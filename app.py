import csv
import difflib
import io
import ipaddress
import os
import re
import sqlite3
from datetime import datetime, timedelta
from pathlib import Path
from urllib.parse import urlparse

from flask import Flask, Response, jsonify, render_template, request

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 1024 * 1024
DB = Path(__file__).with_name("scamshield.db")
MAX_MESSAGE_LENGTH = 10000


RULES = [
    {
        "id": "fees",
        "pattern": r"\b(?:registration|processing|security deposit|joining|training|application)\s+fee\b|\bpay\s+(?:a\s+)?(?:fee|deposit)\b",
        "points": 30,
        "title": "Payment requested",
        "ta": "வேலைக்காக பணம் அல்லது கட்டணம் கேட்கப்படுகிறது.",
        "detail": "Legitimate employers generally do not require applicants to pay fees or deposits to get a job.",
    },
    {
        "id": "guarantees",
        "pattern": r"\b(?:guaranteed job|100%\s*(?:job|guarantee)|no interview|direct selection|instant job|selected without interview)\b",
        "points": 20,
        "title": "Unusual job guarantee or selection",
        "ta": "அசாதாரண வேலை உத்தரவாதம் அல்லது நேர்காணல் இல்லாத தேர்வு கூறப்படுகிறது.",
        "detail": "Promises of guaranteed placement or selection without a normal process deserve independent verification.",
    },
    {
        "id": "credentials",
        "pattern": r"\b(?:share|send|provide|tell us|reply with).{0,35}\b(?:otp|pin|cvv|bank password|banking password|upi pin)\b|\b(?:otp|upi pin|atm pin|cvv|bank password)\b",
        "points": 40,
        "title": "Sensitive credentials requested",
        "ta": "OTP, PIN, CVV அல்லது வங்கி கடவுச்சொல் கேட்கப்படுகிறது.",
        "detail": "Never share one-time passwords, payment PINs, CVVs, or banking passwords with a recruiter.",
    },
    {
        "id": "salary",
        "pattern": r"\b(?:earn|make)\b.{0,30}\b(?:per day|daily|weekly)\b|\b(?:easy money|unlimited income|earnings? guaranteed)\b|\b(?:salary|pay)\b.{0,35}\b(?:per day|daily)\b|\b(?:salary|earnings?)\b.{0,30}\b(?:\d{5,}|[1-9]\d?\s*lpa)\b.{0,30}\b(?:no experience|without experience|freshers?)\b",
        "points": 15,
        "title": "Unusually easy or high earnings claim",
        "ta": "எளிதான அல்லது நம்பமுடியாத வருமானம் வாக்குறுதி அளிக்கப்படுகிறது.",
        "detail": "Compare compensation with similar roles and check whether duties and pay are clearly explained.",
    },
    {
        "id": "urgency",
        "pattern": r"\b(?:urgent|apply immediately|limited vacancies|last chance|act now|today only|respond now)\b",
        "points": 10,
        "title": "Pressure to act quickly",
        "ta": "உடனே செயல்பட அழுத்தம் கொடுக்கப்படுகிறது.",
        "detail": "Pressure can discourage careful checks. Take time to verify the employer through independent channels.",
    },
    {
        "id": "recruitment",
        "pattern": r"\b(?:congratulations.{0,25}(?:selected|hired)|you are selected|you have been selected|fake recruitment|job offer.{0,20}without interview)\b",
        "points": 15,
        "title": "Unexpected recruitment or selection message",
        "ta": "எதிர்பாராத வேலைத் தேர்வு செய்தி உள்ளது.",
        "detail": "Unexpected selection messages should be checked against a real application and a verified company contact.",
    },
    {
        "id": "messaging",
        "pattern": r"\b(?:contact|message|whatsapp|telegram|signal)\b.{0,35}\b(?:recruiter|hr|manager|interview|job)\b|\b(?:whatsapp|telegram)\b.{0,30}\b(?:job|apply|recruiter)\b",
        "points": 10,
        "title": "Recruiter contact shifted to a messaging app",
        "ta": "அறியாத ஆட்சேர்ப்பாளரை மெசேஜிங் செயலியில் தொடர்புகொள்ளச் சொல்கிறது.",
        "detail": "Messaging apps can be used legitimately, but verify the recruiter independently before sharing information.",
    },
    {
        "id": "payments",
        "pattern": r"\b(?:bitcoin|cryptocurrency|crypto|gift card|gift-card|steam card|itunes card)\b",
        "points": 30,
        "title": "Cryptocurrency or gift-card payment mentioned",
        "ta": "கிரிப்டோகரன்சி அல்லது பரிசு அட்டை மூலம் பணம் கேட்கப்படலாம்.",
        "detail": "Requests to pay a recruiter using cryptocurrency or gift cards are a serious warning sign.",
    },
    {
        "id": "identity",
        "pattern": r"\b(?:send|upload|share|submit|provide).{0,45}\b(?:passport|aadhaar|aadhar|social security|ssn|identity card|id card|identity document)\b",
        "points": 20,
        "title": "Identity documents requested",
        "ta": "அடையாள ஆவணங்கள் கேட்கப்படுகின்றன.",
        "detail": "Confirm the company and offer through official channels before sending identity documents.",
    },
    {
        "id": "work_from_home",
        "pattern": r"\b(?:work from home|work-from-home|remote job|home based job)\b.{0,60}\b(?:no experience|easy money|guaranteed|earn|salary)\b",
        "points": 10,
        "title": "Work-from-home offer needs extra scrutiny",
        "ta": "வீட்டிலிருந்து வேலை வாய்ப்பை கூடுதல் கவனத்துடன் சரிபார்க்கவும்.",
        "detail": "Remote work is common, but vague duties, upfront costs, and unrealistic earnings warrant checks.",
    },
    {
        "id": "software",
        "pattern": r"\b(?:install|download)\b.{0,45}\b(?:app|application|software|apk)\b|\b(?:apk|remote access app|screen sharing app)\b",
        "points": 20,
        "title": "Unknown application or software requested",
        "ta": "அறியாத செயலி அல்லது மென்பொருளை நிறுவச் சொல்கிறது.",
        "detail": "Do not install unknown software or grant device access at a recruiter's request.",
    },
    {
        "id": "interview",
        "pattern": r"\b(?:fake interview|instant interview selection|interview scheduled without application)\b",
        "points": 20,
        "title": "Interview or selection process appears unusual",
        "ta": "நேர்காணல் அல்லது தேர்வு செயல்முறை சந்தேகத்திற்குரியதாக உள்ளது.",
        "detail": "Verify interview details using the company's official careers page or a known contact.",
    },
    {
        "id": "tamil_fees",
        "pattern": r"(பதிவுக் கட்டணம்|பயிற்சி கட்டணம்|பாதுகாப்பு வைப்பு|சேர்க்கை கட்டணம்|முன்பணம்)",
        "points": 30,
        "title": "Payment requested (Tamil-language indicator)",
        "ta": "வேலைக்காக பணம் அல்லது கட்டணம் கேட்கப்படுகிறது.",
        "detail": "வேலை பெறுவதற்காக கட்டணம் அல்லது வைப்புத்தொகை செலுத்த வேண்டுமா என்பதை அதிகாரப்பூர்வ வழிகளில் சரிபார்க்கவும்.",
    },
    {
        "id": "tamil_credentials",
        "pattern": r"(ஓடிபி|பின் எண்|வங்கி கடவுச்சொல்|சிவிவி)",
        "points": 40,
        "title": "Sensitive credentials mentioned (Tamil-language indicator)",
        "ta": "OTP, PIN, CVV அல்லது வங்கி கடவுச்சொல்லை பகிர வேண்டாம்.",
        "detail": "ஒருமுறை கடவுச்சொல், PIN, CVV அல்லது வங்கி கடவுச்சொல்லை ஆட்சேர்ப்பாளரிடம் பகிர வேண்டாம்.",
    },
]

SHORTENERS = {"bit.ly", "tinyurl.com", "t.co", "goo.gl", "ow.ly", "is.gd", "buff.ly", "cutt.ly"}
COMMON_DOMAINS = ("google", "amazon", "microsoft", "linkedin", "indeed", "naukri", "infosys", "accenture")


def connect_db():
    connection = sqlite3.connect(DB)
    connection.row_factory = sqlite3.Row
    return connection


def init_db():
    with connect_db() as conn:
        conn.execute(
            """CREATE TABLE IF NOT EXISTS checks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                message TEXT NOT NULL,
                score INTEGER NOT NULL,
                result TEXT NOT NULL,
                reasons TEXT NOT NULL,
                checked_at TEXT NOT NULL
            )"""
        )


def inspect_urls(message):
    found = []
    seen = set()
    for match in re.findall(r"(?:https?://|www\.)[^\s<>\"']+", message, re.IGNORECASE):
        url = match.rstrip(".,;:!?)]}")
        normalized = url if url.lower().startswith(("http://", "https://")) else "http://" + url
        if normalized in seen:
            continue
        seen.add(normalized)
        parsed = urlparse(normalized)
        host = (parsed.hostname or "").lower()
        flags = []
        if host in SHORTENERS:
            flags.append("Shortened link hides its destination.")
        try:
            ipaddress.ip_address(host)
            flags.append("Uses a raw IP address instead of a domain.")
        except ValueError:
            if re.search(r"xn--|(?:[a-z0-9-]+\.){4,}[a-z]{2,}$", host):
                flags.append("Domain structure may be unusual or difficult to verify.")
            if host.count("-") >= 3:
                flags.append("Domain contains several hyphens; check for lookalike spelling.")
            labels = host.split(".")
            for label in labels:
                if label == "www":
                    continue
                similar = next(
                    (
                        brand
                        for brand in COMMON_DOMAINS
                        if label != brand
                        and len(label) >= 5
                        and difflib.SequenceMatcher(None, label, brand).ratio() >= 0.78
                    ),
                    None,
                )
                if similar:
                    flags.append(f"Domain spelling resembles {similar}; verify the exact official address.")
                    break
        if parsed.username or parsed.password:
            flags.append("URL contains user information before the domain.")
        if parsed.scheme != "https":
            flags.append("Does not use HTTPS.")
        found.append({"url": url, "flags": flags})
    return found


def detect_scam(message):
    warnings = []
    for rule in RULES:
        match = re.search(rule["pattern"], message, re.IGNORECASE)
        if match:
            warnings.append(
                {
                    "id": rule["id"],
                    "title": rule["title"],
                    "points": rule["points"],
                    "detail": rule["detail"],
                    "ta": rule["ta"],
                    "phrase": match.group(0),
                }
            )

    urls = inspect_urls(message)
    if urls:
        warnings.append(
            {
                "id": "links",
                "title": "Link included; destination needs verification",
                "points": 5,
                "detail": "A link's presence does not prove it is harmful. Do not open it unless you can independently confirm the destination.",
                "ta": "இணைப்பு இருப்பது மட்டும் ஆபத்தை நிரூபிக்காது; திறப்பதற்கு முன் இலக்கை தனியாகச் சரிபார்க்கவும்.",
            }
        )
    score = min(100, sum(item["points"] for item in warnings))
    result = "HIGH RISK" if score >= 50 else "SUSPICIOUS" if score >= 25 else "LOW RISK"
    evidence = "Strong" if len(warnings) >= 3 else "Moderate" if len(warnings) == 2 else "Limited"
    recommendations = [
        "Find the company's official website independently; do not rely only on a message link.",
        "Never pay to secure a job or share OTPs, payment PINs, CVVs, or banking passwords.",
        "Verify the recruiter using contact details published on the official company website.",
    ]
    return {
        "score": score,
        "result": result,
        "warnings": warnings,
        "reasons": [warning["title"] for warning in warnings] or [
            "No configured warning signs found. Verify the employer independently."
        ],
        "urls": urls,
        "evidence": evidence,
        "recommendations": recommendations,
    }


def safe_csv_cell(value):
    text = str(value or "")
    return "'" + text if text.startswith(("=", "+", "-", "@", "\t", "\r")) else text


@app.after_request
def add_security_headers(response):
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    return response


@app.errorhandler(413)
def request_too_large(_error):
    return jsonify({"error": "Request is too large. Keep messages under 10,000 characters."}), 413


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json(silent=True) or {}
    message = data.get("message", "")
    if not isinstance(message, str) or not message.strip():
        return jsonify({"error": "Please enter a job message."}), 400
    message = message.strip()
    if len(message) > MAX_MESSAGE_LENGTH:
        return jsonify({"error": "Message is too long. Maximum length is 10,000 characters."}), 400
    result = detect_scam(message)
    checked_at = datetime.now().astimezone().isoformat(timespec="seconds")
    with connect_db() as conn:
        cursor = conn.execute(
            "INSERT INTO checks (message, score, result, reasons, checked_at) VALUES (?, ?, ?, ?, ?)",
            (message, result["score"], result["result"], " | ".join(result["reasons"]), checked_at),
        )
        analysis_id = cursor.lastrowid
    return jsonify({**result, "id": analysis_id, "checked_at": checked_at, "message": message})


@app.route("/history")
def history_api():
    with connect_db() as conn:
        rows = conn.execute(
            "SELECT id, message, score, result, checked_at FROM checks ORDER BY id DESC LIMIT 20"
        ).fetchall()
    return jsonify([dict(row) for row in rows])


@app.route("/dashboard")
def dashboard():
    with connect_db() as conn:
        total, high, suspicious, low, average = conn.execute(
            """SELECT COUNT(*), SUM(result='HIGH RISK'), SUM(result='SUSPICIOUS'),
               SUM(result='LOW RISK'), AVG(score) FROM checks"""
        ).fetchone()
        recent = conn.execute(
            "SELECT id, message, score, result, checked_at FROM checks ORDER BY id DESC LIMIT 5"
        ).fetchall()
        records = conn.execute("SELECT reasons FROM checks").fetchall()
        activity = conn.execute(
            """SELECT substr(checked_at, 1, 10) AS day, COUNT(*) AS count
               FROM checks WHERE checked_at >= ? GROUP BY day ORDER BY day""",
            ((datetime.now() - timedelta(days=6)).strftime("%Y-%m-%d"),),
        ).fetchall()
    counts = {"HIGH RISK": high or 0, "SUSPICIOUS": suspicious or 0, "LOW RISK": low or 0}
    frequency = {}
    for record in records:
        for reason in (record["reasons"] or "").split(" | "):
            if reason and not reason.startswith("No configured"):
                frequency[reason] = frequency.get(reason, 0) + 1
    today = datetime.now().date()
    activity_by_day = {row["day"]: row["count"] for row in activity}
    activity_series = [
        {
            "day": (today - timedelta(days=6 - offset)).strftime("%Y-%m-%d"),
            "count": activity_by_day.get((today - timedelta(days=6 - offset)).strftime("%Y-%m-%d"), 0),
        }
        for offset in range(7)
    ]
    max_activity = max((item["count"] for item in activity_series), default=0)
    return render_template(
        "dashboard.html",
        total=total or 0,
        counts=counts,
        average=round(average or 0, 1),
        recent=recent,
        frequent=sorted(frequency.items(), key=lambda item: (-item[1], item[0]))[:5],
        activity=activity_series,
        max_activity=max_activity,
    )


@app.route("/history-page")
def history_page():
    query = request.args.get("q", "").strip()[:100]
    risk = request.args.get("risk", "")
    start = request.args.get("start", "")
    end = request.args.get("end", "")
    sort = request.args.get("sort", "latest")
    page = max(1, request.args.get("page", 1, type=int))
    clauses, params = [], []
    if query:
        clauses.append("message LIKE ?")
        params.append(f"%{query}%")
    if risk in {"HIGH RISK", "SUSPICIOUS", "LOW RISK"}:
        clauses.append("result = ?")
        params.append(risk)
    if re.fullmatch(r"\d{4}-\d{2}-\d{2}", start):
        clauses.append("date(checked_at) >= date(?)")
        params.append(start)
    if re.fullmatch(r"\d{4}-\d{2}-\d{2}", end):
        clauses.append("date(checked_at) <= date(?)")
        params.append(end)
    where = " WHERE " + " AND ".join(clauses) if clauses else ""
    order = "score DESC, id DESC" if sort == "risk" else "id DESC"
    with connect_db() as conn:
        total = conn.execute(f"SELECT COUNT(*) FROM checks{where}", params).fetchone()[0]
        rows = conn.execute(
            f"SELECT id, message, score, result, checked_at FROM checks{where} ORDER BY {order} LIMIT ? OFFSET ?",
            [*params, 10, (page - 1) * 10],
        ).fetchall()
    return render_template(
        "history.html",
        records=rows,
        total=total,
        page=page,
        pages=max(1, (total + 9) // 10),
        filters={"q": query, "risk": risk, "start": start, "end": end, "sort": sort},
    )


@app.route("/analysis/<int:analysis_id>")
def analysis_detail(analysis_id):
    with connect_db() as conn:
        row = conn.execute("SELECT * FROM checks WHERE id = ?", (analysis_id,)).fetchone()
    if row is None:
        return render_template("not_found.html"), 404
    result = detect_scam(row["message"])
    result.update({"id": row["id"], "message": row["message"], "checked_at": row["checked_at"]})
    return render_template("analysis.html", analysis=result)


@app.route("/report/<int:analysis_id>.txt")
def report(analysis_id):
    with connect_db() as conn:
        row = conn.execute("SELECT * FROM checks WHERE id = ?", (analysis_id,)).fetchone()
    if row is None:
        return render_template("not_found.html"), 404
    result = detect_scam(row["message"])
    lines = [
        "SCAMSHIELD JOB MESSAGE SAFETY REPORT",
        f"Report ID: {row['id']}",
        f"Date and time: {row['checked_at']}",
        "",
        "SUBMITTED MESSAGE",
        row["message"],
        "",
        f"Risk score: {row['score']}/100",
        f"Risk classification: {row['result']}",
        f"Evidence strength: {result['evidence']}",
        "",
        "WARNING SIGNS",
    ]
    lines.extend(
        [f"- {warning['title']} (+{warning['points']}): {warning['detail']}" for warning in result["warnings"]]
        or ["- No configured warning signs found."]
    )
    lines.extend(
        [
            "",
            "RECOMMENDED ACTIONS",
            *[f"- {tip}" for tip in result["recommendations"]],
            "",
            "Verification checklist: Not completed for this report.",
            "Disclaimer: This keyword-based tool cannot prove whether a job, recruiter, or link is genuine. Independently verify all offers.",
        ]
    )
    return Response(
        "\n".join(lines),
        mimetype="text/plain",
        headers={"Content-Disposition": f"attachment; filename=scamshield-report-{analysis_id}.txt"},
    )


@app.route("/delete/<int:analysis_id>", methods=["POST"])
def delete_analysis(analysis_id):
    if not is_same_origin_mutation():
        return jsonify({"error": "Cross-site deletion requests are not allowed."}), 403
    with connect_db() as conn:
        cursor = conn.execute("DELETE FROM checks WHERE id = ?", (analysis_id,))
    if cursor.rowcount == 0:
        return jsonify({"error": "Analysis record not found."}), 404
    return jsonify({"message": "Analysis deleted."})


@app.route("/clear-history", methods=["POST"])
def clear_history():
    if not is_same_origin_mutation():
        return jsonify({"error": "Cross-site deletion requests are not allowed."}), 403
    with connect_db() as conn:
        conn.execute("DELETE FROM checks")
    return jsonify({"message": "All analysis history has been deleted."})


def is_same_origin_mutation():
    origin = request.headers.get("Origin")
    fetch_site = request.headers.get("Sec-Fetch-Site")
    if fetch_site == "cross-site":
        return False
    if origin and urlparse(origin).netloc.lower() != request.host.lower():
        return False
    return True


@app.route("/export.csv")
def export_csv():
    with connect_db() as conn:
        rows = conn.execute(
            "SELECT id, checked_at, score, result, reasons, message FROM checks ORDER BY id DESC"
        ).fetchall()
    output = io.StringIO(newline="")
    writer = csv.writer(output)
    writer.writerow(["Report ID", "Date and time", "Risk score", "Classification", "Warning signs", "Message"])
    for row in rows:
        writer.writerow([safe_csv_cell(value) for value in row])
    return Response(
        "\ufeff" + output.getvalue(),
        mimetype="text/csv",
        headers={"Content-Disposition": "attachment; filename=scamshield-history.csv"},
    )


@app.route("/verify", methods=["GET", "POST"])
def verify_job():
    summary = None
    submitted = {}
    if request.method == "POST":
        submitted = {key: request.form.get(key, "").strip()[:10000] for key in
                     ("company", "email", "title", "description", "phone")}
        if not submitted["company"] or not submitted["description"]:
            summary = "Enter at least a company name and job description."
        elif submitted["email"] and not re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", submitted["email"]):
            summary = "Enter a valid recruiter email address."
        elif submitted["phone"] and not re.fullmatch(r"[+()\d.\-\s]{5,40}", submitted["phone"]):
            summary = "Enter a valid recruiter phone number."
        else:
            checklist = {
                key: request.form.get(key, "unsure")
                for key in ("vacancy", "domain", "money", "interview", "realistic", "contacts")
            }
            summary = {
                "checklist": checklist,
                "notice": "This is a self-check only. ScamShield did not contact the company or verify this job, recruiter, email, or phone number.",
            }
    return render_template("verify.html", summary=summary, submitted=submitted)


@app.route("/learn")
def learn():
    return render_template("learn.html")


init_db()

if __name__ == "__main__":
    app.run(debug=os.environ.get("FLASK_DEBUG") == "1")
