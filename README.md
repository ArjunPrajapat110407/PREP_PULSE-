# ⚡ Prep Pulse V30 — Universal Exam Tracker

**All-in-one exam preparation tracker — works offline, installable as PWA. Works for ANY exam: NEET, JEE, UPSC, CA, State PMT, and more!**

## 🚀 Use Directly
Open `PrepPulse_V30.html` in Chrome/Safari — no server needed.

## 📱 Install as App (PWA)

### Android (Chrome)
1. Host on GitHub Pages (see below)
2. Open the GitHub Pages URL in Chrome  
3. Tap ⋮ menu → **"Add to Home Screen"**

### iPhone (Safari)
1. Open GitHub Pages URL in Safari  
2. Tap Share → **"Add to Home Screen"**

### Windows/Mac (Chrome)
1. Open GitHub Pages URL in Chrome  
2. Click `+` icon in address bar → Install

## 🌐 Host on GitHub Pages (Required for PWA Install)
1. Upload **all 4 files** to a GitHub repo  
2. Go to **Settings → Pages → Source: main branch**  
3. Your app URL: `https://yourusername.github.io/repo-name/PrepPulse_V30.html`

> ⚠️ PWA install only works when hosted on HTTPS (GitHub Pages). Won't work from local file://.

## 📁 Files
| File | Purpose |
|------|---------|
| `PrepPulse_V30.html` | Main app (single file, works standalone) |
| `manifest.json` | PWA install metadata |
| `service-worker.js` | Offline caching |
| `README.md` | This file |

## 🐛 V30 Bug Fixes (Latest)
- **"NEET Warrior" → "Exam Warrior"** — Level name ab fully consistent hai saare places pe
- **NEET 2026 date corrected** — May 3 → May 4 (sahi date)
- **JEE Main preset date updated** — Past date replace kiya future placeholder se
- **Non-NEET custom subjects fixed** — JEE/UPSC users ke liye saare wizard subjects ab correctly set hote hain (sirf non-standard wale nahi)
- **Stale preloaded data cleaned** — Old hardcoded dates/sessions removed from default state

## ✨ V30 New Features (This Update)

### 🧙 Universal Setup Wizard
- **First Run Wizard** — App pehli baar khulne par automatic setup wizard aata hai
- **Exam Presets** — NEET, JEE Main, JEE Advanced, UPSC, CA Foundation, State PMT, Custom — ek click mein select karo
- **Custom Subject Setup** — Apne subjects khud set karo (NEET ke liye pre-filled, baaki ke liye blank)
- **Start Date** — Apni preparation start date bhi wizard mein set karo
- **Re-run Wizard** — Settings → "Setup Wizard Dobara Chalao" button se kabhi bhi run kar sakte ho

### 🔄 Auto-Adapt for Any Exam
- **Non-NEET users**: NEET ke base chapters automatically hidden — apne custom chapters add karo (Settings → Chapter Manager)
- **Exam Name Everywhere** — Wizard se naam set karo → app ke saare places update
- **Level Name** — "NEET Warrior" → "Exam Warrior" (generic)
- **Subject Focus** — NEET ke liye 30/30/40 ideal, baaki ke liye equal split
- **Score Calculator** — NEET users ke liye NEET-specific, baaki ke liye generic label

### 🐛 All V29 Fixes Preserved
- Mood widget, streak, study pace, subject dials — sab working

## ✨ Previous Versions
See app's built-in guide for V1–V29 feature history.

---
*Data saved in browser localStorage — no account needed.*
