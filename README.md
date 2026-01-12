![Jenkins Build](http://localhost:8080/job/playwright-admin-dashboard/badge/icon)

> CI powered by Jenkins (local Windows setup). Pipeline and Jenkinsfile are production-ready.

# Playwright Admin Dashboard Automation (CI-Ready)

End-to-end automation of a real-world **Admin Dashboard** using **Playwright + TypeScript**, designed with **production-grade stability** and integrated with **Jenkins CI (Windows)**.

This project focuses on **how QA automation works in messy, real systems** — not ideal demo scenarios.

---

## 🔥 Why This Project Stands Out

Most automation projects fail in real environments due to:
- flaky UI feedback (toasts, async tables)
- unstable demo data
- broken accessibility labels
- CI environment issues (network, browser installs)

This project **solves those problems deliberately**.

---

## 🧩 Tech Stack

- **Playwright** (Chromium)
- **TypeScript**
- **Page Object Model**
- **Jenkins CI (Windows)**
- **Node.js 18**
- **Storage State Authentication**

---

## 🏗️ Architecture Overview

# Playwright Admin Dashboard Automation (CI-Ready)

End-to-end automation of a real-world **Admin Dashboard** using **Playwright + TypeScript**, designed with **production-grade stability** and integrated with **Jenkins CI (Windows)**.

This project focuses on **how QA automation works in messy, real systems** — not ideal demo scenarios.

---

## 🔐 Authentication Strategy (Important)

- Login executed **once** using Playwright `storageState`
- Session reused across all tests
- Eliminates redundant logins
- Makes CI faster and more reliable

```ts
await page.context().storageState({ path: 'storage/admin.json' });

🧠 Real-World QA Decisions (Intentional)
❌ What I Avoided (On Purpose)

Toast-based success assertions (flaky, transient)

Hardcoded demo users

Table row assertions with eventual consistency

Blind waitForTimeout() hacks

✅ What I Did Instead

Assert post-action navigation stability

Use data-agnostic assertions

Handle custom dropdowns & auto-suggest inputs

Scope browser installs to Chromium only for CI reliability

🚀 Jenkins CI Integration (Windows)

This project runs on local Jenkins (Windows):

CI Pipeline stages:

Checkout repository

Install Node dependencies (npm ci)

Install Chromium only (avoid CDN flakiness)

Run Playwright admin tests

Archive HTML report

bat 'npx playwright install chromium'
bat 'npx playwright test --project=admin-tests'

📊 Test Coverage

Admin login validation

Admin dashboard access

User creation workflow

User search & listing behavior

Session persistence

npm install
npx playwright install chromium
npx playwright test --project=admin-tests

💡 What This Project Demonstrates

Realistic QA automation (not tutorial scripts)

CI problem-solving under constraints

Enterprise-style admin UI handling

Clear separation of intent vs behavior

Production-minded automation thinking

📌 Author

Ankita Singh
QA Automation Engineer | Playwright | CI/CD | Admin Systems
