const translations = {
  ta: {
    risk_high: "அதிக ஆபத்து", risk_suspicious: "சந்தேகத்திற்குரியது", risk_low: "குறைந்த ஆபத்து",
    nav_analyze: "செய்தியை ஆய்வு செய்", nav_dashboard: "டாஷ்போர்டு", nav_history: "வரலாறு",
    nav_verify: "வேலையைச் சரிபார்", nav_learn: "பாதுகாப்பு மையம்", local_note: "உள்ளூர் ஆய்வு · உங்கள் செய்திகள் இந்தச் சாதனத்திலேயே இருக்கும்",
    product: "ஸ்காம்‌ஷீல்ட்", footer_note: "ஸ்காம்‌ஷீல்ட் எச்சரிக்கை அறிகுறிகளை மட்டுமே காட்டும்; உறுதியான சான்று அல்ல. ஒவ்வொரு வேலையையும் தனியாகச் சரிபார்க்கவும்.",
    privacy_link: "தனியுரிமை & பாதுகாப்பு", analyzer_label: "செய்தி பாதுகாப்பு ஆய்வி", analyze_title: "நம்புவதற்கு முன் சரிபார்க்கவும்.",
    analyze_subtitle: "வேலைச் செய்திகளில் உள்ள பொதுவான எச்சரிக்கை அறிகுறிகளைப் பாருங்கள். செய்தி இந்தச் சேவையகத்தில் மட்டுமே ஆய்வு செய்யப்படும்; வெளிப்புற சேவைக்கு அனுப்பப்படாது.",
    verify_cta: "வேலை வாய்ப்பைச் சரிபார்", paste_message: "வேலைச் செய்தியை ஒட்டவும்", paste_help: "SMS, மின்னஞ்சல், சமூகப் பதிவு அல்லது வேலை வாய்ப்பு உரை",
    message_label: "வேலைச் செய்தி", message_placeholder: "செய்தியை இங்கே ஒட்டவும். கடவுச்சொல், OTP அல்லது தனிப்பட்ட தகவலைச் சேர்க்க வேண்டாம்.",
    privacy_hint: "முக்கியமான தனிப்பட்ட விவரங்களைச் சேர்க்க வேண்டாம்.", analyze_button: "செய்தியை ஆய்வு செய்", analyzing: "எச்சரிக்கை அறிகுறிகளைச் சரிபார்க்கிறது…",
    private_local: "தனியுரிமை முதன்மை", private_desc: "விதி அடிப்படையிலான ஆய்வு. AI அல்லது வெளிப்புற ஆய்வு சேவை பயன்படுத்தப்படாது.",
    quick_checks: "விரைவான பாதுகாப்பு சரிபார்ப்புகள்", slow_down: "நிதானிக்கவும். சரிபார்க்கவும். பாதுகாக்கவும்.",
    tip_pay: "வேலை பெறுவதற்காக கட்டணம் செலுத்த வேண்டாம்.", tip_secrets: "OTP, PIN அல்லது CVV பகிர வேண்டாம்.",
    tip_official: "நிறுவனத்தின் அதிகாரப்பூர்வ தளத்தை நீங்களே தேடுங்கள்.", tip_links: "அறியாத வேலை இணைப்புகளைத் திறக்க வேண்டாம்.",
    learn_safety: "பாதுகாப்பு வழிகாட்டிகளைப் பாருங்கள் →", disclaimer_short: "குறைந்த மதிப்பெண் வேலை உண்மையானது என்பதை நிரூபிக்காது. இந்தக் கருவி நிறுவனங்களையோ இணைப்புகளையோ சரிபார்க்காது.",
    overview: "கண்ணோட்டம்", dashboard_title: "உங்கள் பாதுகாப்பு நிலை", dashboard_subtitle: "இந்தச் சாதனத்தில் ஆய்வு செய்யப்பட்ட செய்திகள் மற்றும் கண்டறியப்பட்ட எச்சரிக்கை அறிகுறிகள்.",
    new_analysis: "＋ புதிய ஆய்வு", total_analyzed: "மொத்த ஆய்வுகள்", saved_records: "சேமித்த பதிவுகள்", high_risk: "அதிக ஆபத்து", high_records: "அதிக ஆபத்து பதிவுகள்",
    suspicious: "சந்தேகத்திற்குரியது", suspicious_records: "மேலும் சரிபார்க்கவும்", low_risk: "குறைந்த ஆபத்து", low_records: "முக்கிய அறிகுறிகள் இல்லை",
    average_score: "சராசரி மதிப்பெண்", across_records: "அனைத்து பதிவுகளிலும்", risk_distribution: "ஆபத்து பகிர்வு", risk_distribution_sub: "சேமித்த ஆய்வுகளின் வகைப்பாடு",
    activity_title: "ஆய்வு செயல்பாடு", activity_sub: "கடந்த ஏழு நாட்களில் சேமித்த ஆய்வுகள்", no_activity: "கடந்த ஏழு நாட்களில் செயல்பாடு இல்லை.",
    frequent_signs: "அடிக்கடி காணப்பட்ட அறிகுறிகள்", frequent_sub: "சேமித்த ஆய்வுகளின் அடிப்படையில்", no_warnings: "எச்சரிக்கை அறிகுறிகள் இன்னும் இல்லை.",
    recent_activity: "சமீபத்திய செயல்பாடு", latest_five: "சமீபத்திய ஐந்து செய்திகள்", view_history: "வரலாற்றைப் பார்க்க →",
    dashboard_empty: "உங்கள் டாஷ்போர்டு தயார்", empty_history_desc: "உண்மையான புள்ளிவிவரங்கள் மற்றும் சமீபத்திய செயல்பாட்டைப் பார்க்க வேலைச் செய்தியை ஆய்வு செய்யுங்கள்.",
    first_analysis: "முதல் ஆய்வைத் தொடங்குங்கள்", saved_analyses: "சேமித்த ஆய்வுகள்", history_title: "செய்தி வரலாறு",
    history_sub: "உங்கள் உள்ளூர் தரவுத்தளத்தில் சேமித்த பதிவுகளைத் தேடவும், வடிகட்டவும், ஏற்றுமதி செய்யவும் அல்லது நீக்கவும்.",
    export_csv: "↓ CSV ஏற்றுமதி", search_messages: "செய்திகளைத் தேடு", keyword_placeholder: "சொல்", risk_level: "ஆபத்து நிலை",
    all_levels: "அனைத்து நிலைகள்", from_date: "தொடக்க தேதி", to_date: "முடிவு தேதி", sort_by: "வரிசைப்படுத்து",
    latest_first: "சமீபத்தியவை முதலில்", highest_risk: "அதிக ஆபத்து முதலில்", apply_filters: "வடிகட்டவும்", records_found: "பதிவுகள்",
    clear_history: "முழு வரலாற்றையும் நீக்கு", view_report: "அறிக்கையைப் பார்", delete: "நீக்கு", previous: "முந்தையது", next: "அடுத்து",
    no_history: "பொருந்தும் வரலாறு இல்லை", no_history_desc: "வடிகட்டிகளை மாற்றவும் அல்லது புதிய ஆய்வைத் தொடங்கவும்.", analyze_message_link: "செய்தியை ஆய்வு செய்",
    analysis_report: "ஆய்வு அறிக்கை", report_title: "பாதுகாப்பு அறிக்கை", download_report: "↓ TXT அறிக்கையைப் பதிவிறக்கு",
    risk_score: "ஆபத்து மதிப்பெண்", score_disclaimer: "மதிப்பெண் ஓர் அறிகுறி மட்டுமே; உண்மைத்தன்மைக்கான சான்று அல்ல.",
    evidence_strength: "சான்று வலிமை", submitted_message: "சமர்ப்பித்த செய்தி", message_escaped: "சாதாரண உரையாகக் காட்டப்படும்; இணைப்புகள் திறக்கப்படாது.",
    detected_signs: "கண்டறியப்பட்ட எச்சரிக்கை அறிகுறிகள்", score_explained: "ஒவ்வொரு வகையும் ஒருமுறை மட்டுமே கணக்கிடப்படும்; மொத்தம் 100-ல் வரையறுக்கப்படும்.",
    no_flags: "அமைக்கப்பட்ட எச்சரிக்கை அறிகுறிகள் இல்லை. இது பாதுகாப்பானது என்பதை உறுதிப்படுத்தாது.",
    links_found: "கண்டறியப்பட்ட இணைப்புகள் (திறக்கப்படவில்லை)", format_only: "அடிப்படை URL எச்சரிக்கை இல்லை; வடிவம் மட்டும் பாதுகாப்பை நிரூபிக்காது.",
    url_advice: "அறியாத இணைப்புகளைத் திறக்க வேண்டாம். நிறுவனத்தின் அதிகாரப்பூர்வ தளத்தை நீங்களே தட்டச்சு செய்து பாருங்கள்.",
    safety_actions: "பரிந்துரைக்கப்படும் பாதுகாப்பு நடவடிக்கைகள்", full_disclaimer: "ஸ்காம்‌ஷீல்ட் உள்ளூர் முக்கியச்சொல் விதிகளைப் பயன்படுத்துகிறது; AI பயன்படுத்தாது, நிறுவனங்களைத் தொடர்புகொள்ளாது, நிறுவனங்கள், ஆட்சேர்ப்பாளர்கள், வேலைகள் அல்லது URL-களைச் சரிபார்க்காது. உண்மையான செய்தியிலும் குறிக்கப்பட்ட சொற்கள் இருக்கலாம்; மோசடி செய்தியில் எச்சரிக்கை இல்லாமலும் இருக்கலாம்.",
    not_found: "பதிவு கிடைக்கவில்லை", not_found_desc: "இந்த ஆய்வு நீக்கப்பட்டிருக்கலாம்.", back_history: "வரலாற்றுக்குத் திரும்பு",
    verification_check: "சரிபார்ப்பு பட்டியல்", verify_title: "நீங்களே சரிபார்க்கவும்.", verify_sub: "அதிகாரப்பூர்வ மூலங்களைப் பயன்படுத்தவும். ஸ்காம்‌ஷீல்ட் நிறுவனங்களைத் தொடர்புகொள்வதோ விவரங்களைச் சரிபார்ப்பதோ இல்லை.",
    offer_details: "வேலை வாய்ப்பு விவரங்கள்", company_name: "நிறுவனத்தின் பெயர்", recruiter_email: "ஆட்சேர்ப்பாளர் மின்னஞ்சல்",
    job_title: "வேலைப் பதவி", phone_optional: "தொலைபேசி (விருப்பம்)", job_description: "வேலை விவரம் அல்லது செய்தி",
    checklist_title: "உங்கள் சரிபார்ப்பு பட்டியல்", checklist_sub: "நீங்கள் உண்மையில் சரிபார்த்தவற்றுக்கு பதிலளிக்கவும். உறுதி செய்யவில்லை என்றால் “தெரியவில்லை” என்பதைத் தேர்ந்தெடுக்கவும்.",
    vacancy: "அதிகாரப்பூர்வ நிறுவனத் தளத்தில் காலியிடம் உள்ளதா?", domain: "மின்னஞ்சல் டொமைன் நிறுவனத்தின் அதிகாரப்பூர்வ டொமைனுடன் பொருந்துகிறதா?",
    money: "பணம் கேட்கப்படுகிறதா?", interview: "நேர்காணல் நடத்தப்பட்டதா?", realistic: "சம்பளமும் பணிவிவரமும் நியாயமானதா?",
    contacts: "தொடர்பு விவரங்களைத் தனியாகச் சரிபார்க்க முடியுமா?", yes: "ஆம்", no: "இல்லை", unsure: "தெரியவில்லை",
    create_summary: "சுய சரிபார்ப்பு சுருக்கம் உருவாக்கு", self_check_summary: "சுய சரிபார்ப்பு சுருக்கம்", checklist_results: "உங்கள் பட்டியல் முடிவுகள்",
    learn_label: "கற்றுக்கொள்ளுங்கள் & பாதுகாக்கவும்", learn_title: "அறிகுறிகளை அறிந்து கட்டுப்பாட்டில் இருங்கள்.",
    learn_sub: "நடைமுறை, தனிப்பட்ட சரிபார்ப்புகள் வேலை வாய்ப்பை பாதுகாப்பாக மதிப்பிட உதவும்.",
    scam_fee_title: "முன்பணம் கேட்கும் மோசடிகள்", scam_fee_text: "வேலை தொடங்குவதற்கு முன் பதிவு, பயிற்சி, உபகரணம் அல்லது பாதுகாப்புக் கட்டணம் கேட்கப்படுகிறது.",
    scam_data_title: "முக்கியத் தகவல் கேட்பது", scam_data_text: "சலுகையைச் சரிபார்ப்பதற்கு முன் பணப் PIN, OTP, வங்கி உள்நுழைவு அல்லது அடையாள ஆவணங்கள் கேட்கப்படுகின்றன.",
    scam_remote_title: "வீட்டிலிருந்து வேலை மோசடிகள்", scam_remote_text: "தெளிவற்ற வேலை, நம்பமுடியாத வருமானம், கட்டணக் கருவிகள் அல்லது அறியாத செயலி நிறுவுதல்.",
    safe_links_title: "இணைப்புகள் & ஆட்சேர்ப்பாளர் போலி அடையாளம்", safe_links_text: "அழகான செய்தி அல்லது லோகோ சான்றல்ல. போலி டொமைன்கள் உண்மையான நிறுவனங்களைப் போலத் தோன்றலாம்.",
    example: "அசல் எடுத்துக்காட்டு", suspicious_example: "சந்தேக அறிகுறி: முன்பணம் + அவசரம்", never_share: "OTP அல்லது பணப் PIN பகிர வேண்டாம்.",
    genuine_compare: "உண்மையானது vs சந்தேகமானது", genuine: "நம்பகமாகத் தோன்றுவது:", warning: "எச்சரிக்கை அறிகுறிகள்:",
    step_official: "அதிகாரப்பூர்வ இணையதள முகவரியை நீங்களே தட்டச்சு செய்யவும்.", step_contact: "பொதுவில் வெளியிடப்பட்ட நிறுவன எண்ணை அழைக்கவும்.",
    step_domain: "அனுப்புநர் பெயரை மட்டும் அல்ல, மின்னஞ்சல் டொமைனையும் சரிபார்க்கவும்.", if_paid: "பணம் செலுத்தியிருந்தால் அல்லது முக்கியத் தகவலைப் பகிர்ந்திருந்தால்",
    paid_1: "உடனே வங்கி அல்லது பண வழங்குநரைத் தொடர்புகொண்டு பணத்தைத் தடுக்க அல்லது மறுக்க முடியுமா கேளுங்கள்.",
    paid_2: "நம்பகமான சாதனத்தில் கடவுச்சொற்களை மாற்றி, செயலில் உள்ள அமர்வுகளை முடித்து, பலகட்ட பாதுகாப்பை இயக்குங்கள்.",
    paid_3: "OTP, PIN அல்லது அட்டை விவரங்களைப் பகிர்ந்திருந்தால், வங்கியின் அதிகாரப்பூர்வ எண்ணை உடனே அழைக்கவும்.",
    paid_4: "செய்தி/ரசீதுகளைச் சேமித்து, உள்ளூர் சைபர் குற்ற அல்லது நுகர்வோர் பாதுகாப்பு அதிகாரியிடம் தெரிவிக்கவும்.",
    paid_5: "அடையாள ஆவணங்கள் பகிர்ந்திருந்தால், தவறான பயன்பாட்டைத் தடுக்க வழங்கிய அதிகாரியைத் தொடர்புகொள்ளவும்.",
    quick_quiz: "விரைவு வினாடி வினா", quiz_title: "எச்சரிக்கை அறிகுறியை அடையாளம் காண்பீர்களா?",
    quiz_sub: "ஒவ்வொரு கேள்விக்கும் பதிலளித்து உடனடி விளக்கத்தைப் பெறுங்கள்.", quiz_score: "மதிப்பெண்",
    privacy_notice: "தனியுரிமை: வரலாற்றைப் பார்க்க ஆய்வு செய்திகள் இந்தக் கணினியின் உள்ளூர் SQLite தரவுத்தளத்தில் சேமிக்கப்படும். வரலாற்றுக் கட்டுப்பாடுகள் மூலம் பதிவுகளை நீக்கலாம். வெளிப்புற API-க்கு செய்திகள் அனுப்பப்படாது.",
    quiz_q1: "1. ஊதியத்தைச் செயல்படுத்த OTP கேட்கிறார். என்ன செய்ய வேண்டும்?", quiz1_a: "செய்தி நம்பகமாகத் தெரிந்தால் பகிரவும்.",
    quiz1_b: "பகிர வேண்டாம்; ஏற்கனவே பகிர்ந்திருந்தால் வங்கியைத் தொடர்புகொள்ளவும்.", quiz1_explanation: "ஆட்சேர்ப்பாளருக்கு உங்கள் வங்கி அல்லது பண OTP தேவையில்லை. ஒருமுறை குறியீடுகளை ரகசியமாக வைத்திருங்கள்.",
    quiz_q2: "2. காலியிடம் உண்மையானதா என்பதை எப்படிச் சரிபார்ப்பீர்கள்?", quiz2_a: "நிறுவனத்தின் அதிகாரப்பூர்வ தளத்தில் நீங்களே தேடுங்கள்.",
    quiz2_b: "எதிர்பாராத செய்தியில் உள்ள இணைப்பை நம்புங்கள்.", quiz2_explanation: "செய்தி இணைப்பை மட்டும் நம்பாமல் அதிகாரப்பூர்வ தளம் அல்லது தொடர்பு வழியைப் பயன்படுத்தவும்.",
    quiz_q3: "3. “உறுதி” செய்யப்பட்ட தொலைவேலைக்கு திருப்பித் தரப்படும் வைப்புத்தொகை கேட்கப்படுகிறது. பாதுகாப்பானது எது?",
    quiz3_a: "இடத்தைப் பெற உடனே பணம் செலுத்துங்கள்.", quiz3_b: "நிதானித்து, பணம் செலுத்தாமல், நிறுவனத்தைத் தனியாகச் சரிபாருங்கள்.",
    quiz3_explanation: "முன்பணம் மற்றும் அவசரம் எச்சரிக்கை அறிகுறிகள்; பணம் திருப்பித் தரப்படும் என்ற வாக்குறுதி ஆபத்தை நீக்காது.",
    confirm_delete_record: "இந்தச் சேமித்த ஆய்வை நீக்கவா? இதை மீட்டெடுக்க முடியாது.",
    confirm_clear_all: "சேமித்த அனைத்து ஆய்வு வரலாற்றையும் நிரந்தரமாக நீக்கவா? இதை மீட்டெடுக்க முடியாது."
  }
};

function showToast(message, type = "") {
  const region = document.getElementById("toastRegion");
  if (!region) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  region.appendChild(toast);
  window.setTimeout(() => toast.remove(), 3800);
}

function applyLanguage(language) {
  const dictionary = translations[language] || {};
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translated = dictionary[element.dataset.i18n];
    if (translated) element.textContent = translated;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const translated = dictionary[element.dataset.i18nPlaceholder];
    if (translated) element.placeholder = translated;
  });
  document.querySelectorAll("option[data-i18n]").forEach((element) => {
    const translated = dictionary[element.dataset.i18n];
    if (translated) element.textContent = translated;
  });
  localStorage.setItem("scamshield-language", language);
}

function appendHighlightedPhrase(container, message, phrases) {
  const source = String(message);
  const match = phrases.map((phrase) => ({ phrase, index: source.toLowerCase().indexOf(phrase.toLowerCase()) }))
    .filter((entry) => entry.index >= 0).sort((a, b) => a.index - b.index)[0];
  if (!match) {
    container.textContent = source;
    return;
  }
  container.append(document.createTextNode(source.slice(0, match.index)));
  const mark = document.createElement("mark");
  mark.textContent = source.slice(match.index, match.index + match.phrase.length);
  container.append(mark, document.createTextNode(source.slice(match.index + match.phrase.length)));
}

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("languageSelect");
  const storedLanguage = localStorage.getItem("scamshield-language") || "en";
  if (langSelect) {
    langSelect.value = storedLanguage;
    applyLanguage(storedLanguage);
    langSelect.addEventListener("change", () => applyLanguage(langSelect.value));
  }
  const themeToggle = document.getElementById("themeToggle");
  if (localStorage.getItem("scamshield-theme") === "dark") document.body.classList.add("dark");
  themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("scamshield-theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
  document.getElementById("menuToggle")?.addEventListener("click", () => {
    document.getElementById("sidebar")?.classList.toggle("open");
  });

  const message = document.getElementById("message");
  const charCount = document.getElementById("charCount");
  message?.addEventListener("input", () => {
    if (charCount) charCount.textContent = `${message.value.length.toLocaleString()} / 10,000`;
  });
  document.getElementById("analyzeButton")?.addEventListener("click", async () => {
    const text = message?.value.trim() || "";
    const lang = localStorage.getItem("scamshield-language") || "en";
    if (!text) {
      showToast(lang === "ta" ? "முதலில் வேலைச் செய்தியை உள்ளிடவும்." : "Please enter a job message.", "error");
      message?.focus();
      return;
    }
    const button = document.getElementById("analyzeButton");
    const loading = document.getElementById("loadingLabel");
    const resultPanel = document.getElementById("resultPanel");
    button.disabled = true;
    loading.hidden = false;
    try {
      const response = await fetch("/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to analyze this message.");
      resultPanel.hidden = false;
      const riskClass = data.score >= 50 ? "badge-high" : data.score >= 25 ? "badge-warn" : "badge-safe";
      resultPanel.replaceChildren();
      const heading = document.createElement("div");
      heading.className = "result-heading";
      const titleArea = document.createElement("div");
      const badge = document.createElement("span");
      badge.className = `risk-badge ${riskClass}`;
      const riskTranslationKey = data.score >= 50 ? "risk_high" : data.score >= 25 ? "risk_suspicious" : "risk_low";
      badge.textContent = lang === "ta" ? translations.ta[riskTranslationKey] : data.result;
      const title = document.createElement("h2");
      title.textContent = lang === "ta" ? "ஆய்வு முடிவு" : "Analysis result";
      titleArea.append(title, badge);
      const score = document.createElement("div");
      score.className = "result-score";
      score.textContent = `${data.score}`;
      const outOf = document.createElement("small");
      outOf.textContent = "/100";
      score.appendChild(outOf);
      heading.append(titleArea, score);
      resultPanel.appendChild(heading);
      const evidence = document.createElement("p");
      evidence.className = "muted";
      evidence.textContent = `${lang === "ta" ? "சான்று வலிமை" : "Evidence strength"}: ${data.evidence} · ${lang === "ta" ? "இது உண்மைத்தன்மைக்கான சான்று அல்ல." : "This is not proof of authenticity."}`;
      resultPanel.appendChild(evidence);
      if (data.warnings.length) {
        const excerpt = document.createElement("blockquote");
        excerpt.className = "submitted-message";
        appendHighlightedPhrase(excerpt, text, data.warnings.map((warning) => warning.phrase));
        resultPanel.appendChild(excerpt);
      }
      if (data.warnings.length) {
        const list = document.createElement("ul");
        list.className = "result-warning-list";
        data.warnings.forEach((warning) => {
          const item = document.createElement("li");
          const points = document.createElement("span");
          points.className = "warning-points";
          points.textContent = `+${warning.points}`;
          const detail = document.createElement("div");
          const strong = document.createElement("strong");
          strong.textContent = `${warning.title} · ${warning.phrase}`;
          const explanation = document.createElement("p");
          explanation.textContent = lang === "ta" ? warning.ta : warning.detail;
          detail.append(strong, explanation);
          item.append(points, detail);
          list.appendChild(item);
        });
        resultPanel.append(list);
      } else {
        const noSigns = document.createElement("p");
        noSigns.textContent = lang === "ta" ? "அமைக்கப்பட்ட எச்சரிக்கை அறிகுறிகள் எதுவும் பொருந்தவில்லை; இது பாதுகாப்பு உறுதி அல்ல." : "No configured warning signs matched. This does not confirm the message is safe.";
        resultPanel.appendChild(noSigns);
      }
      if (data.urls.length) {
        const urlsTitle = document.createElement("h3");
        urlsTitle.textContent = lang === "ta" ? "இணைப்புகள் (திறக்கப்படவில்லை)" : "Links found (not opened)";
        resultPanel.appendChild(urlsTitle);
        data.urls.forEach((url) => {
          const item = document.createElement("p");
          item.className = "result-url";
          item.textContent = `${url.url}${url.flags.length ? ` — ${url.flags.join(" ")}` : ""}`;
          resultPanel.appendChild(item);
        });
      }
      const recommendation = document.createElement("p");
      recommendation.className = "callout";
      recommendation.textContent = lang === "ta" ? "நிறுவனத்தின் அதிகாரப்பூர்வ இணையதளத்தை தனியாகத் தேடி சரிபார்க்கவும். OTP, PIN அல்லது CVV பகிர வேண்டாம்." : data.recommendations[0];
      resultPanel.appendChild(recommendation);
      const reportLink = document.createElement("a");
      reportLink.className = "button button-outline";
      reportLink.href = `/analysis/${data.id}`;
      reportLink.textContent = lang === "ta" ? "முழு அறிக்கையைப் பார்க்க →" : "View full report →";
      resultPanel.appendChild(reportLink);
      resultPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
      showToast(lang === "ta" ? "ஆய்வு முடிந்தது; பதிவு சேமிக்கப்பட்டது." : "Analysis complete and saved.", "success");
    } catch (error) {
      showToast(error.message || "Unable to reach the server.", "error");
    } finally {
      button.disabled = false;
      loading.hidden = true;
    }
  });

  document.querySelectorAll(".delete-record").forEach((button) => {
    button.addEventListener("click", async () => {
      const lang = localStorage.getItem("scamshield-language") || "en";
      const confirmText = lang === "ta" ? translations.ta.confirm_delete_record : "Delete this saved analysis? This cannot be undone.";
      if (!window.confirm(confirmText)) return;
      try {
        const response = await fetch(`/delete/${button.dataset.id}`, { method: "POST" });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Unable to delete record.");
        button.closest(".record-card")?.remove();
        showToast(data.message, "success");
        if (!document.querySelector(".record-card")) window.location.reload();
      } catch (error) {
        showToast(error.message, "error");
      }
    });
  });
  document.getElementById("clearHistory")?.addEventListener("click", async () => {
    const lang = localStorage.getItem("scamshield-language") || "en";
    const confirmText = lang === "ta" ? translations.ta.confirm_clear_all : "Permanently delete ALL saved analysis history? This cannot be undone.";
    if (!window.confirm(confirmText)) return;
    try {
      const response = await fetch("/clear-history", { method: "POST" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to clear history.");
      showToast(data.message, "success");
      window.location.reload();
    } catch (error) {
      showToast(error.message, "error");
    }
  });

  const questions = [...document.querySelectorAll(".quiz-question")];
  let score = 0;
  questions.forEach((question) => {
    question.querySelectorAll(".quiz-option").forEach((button) => {
      button.addEventListener("click", () => {
        if (question.dataset.completed) return;
        question.dataset.completed = "true";
        const lang = localStorage.getItem("scamshield-language") || "en";
        const correct = button.dataset.choice === question.dataset.answer;
        if (correct) score += 1;
        question.querySelectorAll(".quiz-option").forEach((option) => {
          option.disabled = true;
          if (option.dataset.choice === question.dataset.answer) option.classList.add("correct");
          else if (option === button) option.classList.add("incorrect");
        });
        const feedback = question.querySelector(".quiz-feedback");
        feedback.hidden = false;
        const explanation = lang === "ta"
          ? translations.ta[feedback.dataset.explanationKey]
          : feedback.dataset.explanation;
        const correctPrefix = lang === "ta" ? (correct ? "சரி. " : "மீண்டும் பாருங்கள்: ") : (correct ? "Correct. " : "Review: ");
        feedback.textContent = `${correctPrefix}${explanation}`;
        document.getElementById("quizScore").textContent = `${score} / ${questions.length}`;
        if (questions.every((item) => item.dataset.completed)) {
          document.getElementById("quizSummary").textContent = lang === "ta"
            ? `${questions.length} இல் ${score} மதிப்பெண். அதிகாரப்பூர்வ வழிகளில் சரிபார்த்து, வேலைக்காக ஒருபோதும் பணம் செலுத்த வேண்டாம்.`
            : `You scored ${score} out of ${questions.length}. Keep verifying through official channels and never pay to secure a job.`;
        }
      });
    });
  });
});
