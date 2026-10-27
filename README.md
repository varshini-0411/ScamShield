# ScamShield - Job Scam Detection System

## About the Project

ScamShield is a Python Flask-based web application designed to analyze job messages and identify common warning signs associated with fraudulent job offers. It helps job seekers recognize potentially suspicious messages by displaying a risk score and risk level.

## Features

* Analyze job messages for potential scam indicators
* Display a risk score and estimated risk level
* Identify suspicious keywords and patterns
* Provide a simple and user-friendly interface
* Store and review previous analyses using SQLite, if supported by the application

## Technologies Used

* Python
* Flask
* HTML
* CSS
* JavaScript
* SQLite

## Installation and Setup

### Prerequisites

* Python installed on your computer

### Step 1: Install Dependencies

Open a terminal in the project folder and run:

```
python -m pip install -r requirements.txt
```

### Step 2: Run the Application

Run the following command:

```
python app.py
```

### Step 3: Open the Application

Open your browser and visit:

http://127.0.0.1:5000

## How It Works

1. Enter a job message into the application.
2. Submit the message for analysis.
3. ScamShield checks the message for predefined suspicious keywords and patterns.
4. View the risk score and estimated risk level.
5. Use the result as an initial warning when evaluating the job opportunity.

## Project Objective

The objective of ScamShield is to help job seekers recognize potential recruitment scams and make more informed decisions when evaluating job opportunities.

## Disclaimer

ScamShield provides an initial risk assessment based on predefined warning signs. It cannot guarantee whether a job offer is genuine or fraudulent. Always verify job opportunities through official company websites and trusted recruitment channels before sharing personal information or making payments.

## Developer

Varshini S.

BCA Graduate | Python | Flask | Web Development

Built as a learning project to explore Python programming, web application development, and basic job scam detection.



