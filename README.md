# 🩸 Lifeline — Every Second Matters. Every Life Counts.

> A full-stack blood donation platform built as a B.Tech 3rd-year major project.  
> **This project uses fictional seed data. No real hospitals, donors, or partnerships are represented.**

---

## ⚡ Quick Start

### Prerequisites
- Node.js ≥ 20, npm ≥ 9
- Python ≥ 3.11
- A Supabase project (free tier works)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd lifeline

# Frontend
cd frontend
npm install
cp .env.example .env.local   # fill in your Supabase values

# Backend
cd ../backend
python -m venv venv
venv\Scripts\activate        # Windows
pip install -r requirements.txt
cp .env.example .env         # fill in your values
```

### 2. Database

1. Create a Supabase project at https://supabase.com
2. Run `database/schema.sql` in the Supabase SQL editor
3. Run `database/policies.sql`
4. Run `database/seed.sql` (fictional data only)

### 3. Run Locally

```bash
# Terminal 1 — Backend
cd backend
python run.py

# Terminal 2 — Frontend
cd frontend
npm run dev
```

Frontend: http://localhost:5173  
Backend API: http://localhost:5000

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite, Tailwind CSS, React Router, Framer Motion |
| Backend | Python, Flask, Flask-CORS, Flask-Limiter |
| Database | Supabase PostgreSQL + Auth + RLS |
| ML | Pandas, Scikit-learn, XGBoost |
| Maps | react-leaflet + OpenStreetMap |
| Deploy | Netlify / Vercel + Render / Railway |

---

## 🧪 Tests

```bash
# Backend tests
cd backend
pytest tests/ -v

# Frontend tests
cd frontend
npm run test
```

---

## 📋 ML Training

```bash
cd backend
python -m ml.training.train    # trains all 6 models, selects best
python -m ml.evaluation.evaluate  # prints metrics table
```

> **Note:** ML models run on **synthetic data**. Results are for educational demonstration only. Real-world performance is unvalidated.

---

## ⚠️ Disclaimers

- **Medical:** Blood-group matching shown in this app is NOT a transfusion-compatibility guarantee. Never declare anyone medically eligible. Consult a qualified medical professional.
- **Data:** All hospitals, blood banks, donor counts, success stories, and accuracy numbers shown in the UI use clearly labelled fictional seed data.
- **Demo mode:** Without provider API keys, email and SMS notifications are not actually delivered. The UI shows "Demo mode: not actually delivered."
- **Not production-ready:** This project requires legal review, medical review, and security audit before any real-world deployment.

---

## 📁 Project Structure

```
lifeline/
├── frontend/          # React + Vite frontend
├── backend/           # Flask API + ML modules
├── database/          # SQL schema, policies, seed data
├── docs/              # Architecture, API docs, viva questions
├── .gitignore
└── README.md
```

---

## 🎓 Academic Context

Built as a major project for B.Tech Computer Science, 3rd year.  
Demonstrates: full-stack development, REST APIs, Supabase Auth + RLS, ML model comparison, UI/UX design systems, and responsible AI practices.
\n<!-- trigger redeploy -->
