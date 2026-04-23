# Prep Pulse V25 — NEET Study Tracker

**By ARJUN Prajapat** | Made with ❤️ for NEET aspirants

---

## 🚀 GitHub Pages Deploy Karo (Free Hosting)

### Step 1 — GitHub Account
1. [github.com](https://github.com) pe jaao
2. Free account banao

### Step 2 — Repository Banao
1. "+" button → "New repository"
2. Name: `prep-pulse` (ya koi bhi)
3. **Public** select karo
4. "Create repository" dabao

### Step 3 — Files Upload Karo
Upload ye 4 files ek saath:
- `PrepPulse_V25_Final.html` → **rename karke `index.html`** rakho
- `sw.js`
- `manifest.json`
- `README.md` (optional)

### Step 4 — GitHub Pages Enable Karo
1. Repository → **Settings** tab
2. Left sidebar: **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main`, folder: `/ (root)`
5. **Save** dabao

### Step 5 — Live URL
2-3 minutes baad URL milega:
```
https://yourusername.github.io/prep-pulse/
```

---

## 📱 PWA / App Install Karo

### Android (Chrome)
1. URL open karo
2. Chrome menu (⋮) → **"Add to Home Screen"**
3. ✅ App icon aa jayega!

### iPhone (Safari)
1. URL Safari mein open karo
2. Share button (⬆) → **"Add to Home Screen"**
3. ✅ Done!

### Windows/Mac (Chrome)
1. Address bar ke end mein **⊕ install icon** dabao
2. Ya Chrome menu → "Install Prep Pulse"

---

## 🔧 Android APK Banana (Advanced)

### Method A: WebIntoApp (No-Code, Free)
1. [webintoapp.com](https://webintoapp.com) open karo
2. GitHub Pages URL daalo
3. APK generate karo
4. Download + install!

### Method B: Android Studio
1. Android Studio install karo
2. New Project → Empty Views Activity (Kotlin)
3. `app/src/main/assets/` folder mein `index.html` daalo
4. `MainActivity.kt` mein:
```kotlin
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val webView = WebView(this)
        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            allowFileAccess = true
            loadWithOverviewMode = true
            useWideViewPort = true
        }
        webView.webViewClient = WebViewClient()
        webView.loadUrl("file:///android_asset/index.html")
        setContentView(webView)
    }
}
```
5. `AndroidManifest.xml` mein add karo:
```xml
<uses-permission android:name="android.permission.INTERNET" />
```
6. **Build → Build Bundle/APK → Build APK(s)**
7. `app/build/outputs/apk/debug/app-debug.apk` download karo!

---

## 🔥 Firebase Sync Setup (Optional — Cross-Device)

1. [console.firebase.google.com](https://console.firebase.google.com) → New Project
2. Realtime Database → Create Database → Start in test mode
3. Project Settings → Web App register karo
4. Config copy karo
5. App mein: Settings → Firebase Cloud Sync → Details bharo → Connect!

---

## ✨ Features (V25)

- 📚 **Syllabus Tracker** — 89 NEET chapters
- ⏱ **Study Timer** — Pomodoro + Focus mode
- 🧪 **Mock Tests** — Score tracker
- 📝 **Notes & Flashcards**
- ❓ **Doubt Book**
- 🎯 **Daily Challenges** — Points system
- ⏰ **Live Countdown** — Real-time NEET countdown
- 🔥 **Firebase Sync** — Phone ↔ Laptop
- 🧩 **Widgets** — Mood, Streak, Study Pace
- 📊 **Charts & Analytics**
- 📱 **PWA / Offline Support**

---

*Jai Mata Di 🙏 | NEET 2026 mein top karo!*
