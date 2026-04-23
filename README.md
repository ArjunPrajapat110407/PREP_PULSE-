# ⚡ Prep Pulse V27 — Universal Exam Tracker

**All-in-one exam preparation tracker — works offline, installable as PWA. Works for ANY exam: NEET, JEE, UPSC, State PMTs, and more!**

## 🚀 Use Directly
Open `PrepPulse_V27.html` in Chrome/Safari — no server needed.

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
3. Your app URL: `https://yourusername.github.io/repo-name/PrepPulse_V27.html`

> ⚠️ PWA install only works when hosted on HTTPS (GitHub Pages). Won't work from local file://.

## 📁 Files
| File | Purpose |
|------|---------|
| `PrepPulse_V27.html` | Main app (single file, works standalone) |
| `manifest.json` | PWA install metadata |
| `service-worker.js` | Offline caching |
| `README.md` | This file |

## ✨ V27 Changes (This Update)
- 🐛 **Change Date Button Fixed** — Ab kabhi bhi fail nahi hoga! Throttle bypass + clean state read
- 🎯 **Dynamic Exam Name** — Exam change karo to pura app update hota hai — koi "NEET 2026" nahi dikhega jab dusra exam select ho
- 🗑 **Base Subject Delete** — Settings mein Biology/Chemistry/Physics ko permanently hide karo — aur restore bhi kar sako
- 🌐 **GitHub Pages + PWA Fixed** — Service worker ab sahi se register hoga GitHub Pages pe
- 📱 **PWA Install Fixed** — Manifest + SW properly configured for installable PWA

## Features
- 📊 Subject-wise chapter tracker (any exam!)
- ⏱ Focus timer + Pomodoro
- 📅 Daily tasks + study log
- 🎯 Mock test tracker
- 🏆 Points + badges system
- 📈 Charts & analytics
- 🔔 Reminders & notifications
- 🌙 Dark / Light theme
- 📱 Mobile responsive + PWA

---
*Data saved in browser localStorage — no account needed.*
