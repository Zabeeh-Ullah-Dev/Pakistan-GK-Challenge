<<<<<<< HEAD
# 🇵🇰 Pakistan GK Challenge — Professional General Knowledge Quiz

[![License: MIT](https://img.shields.io/badge/License-MIT-01411c.svg)](LICENSE)
[![Vanilla JavaScript](https://img.shields.io/badge/Vanilla-JavaScript_ES6+-f7df1e.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Pure CSS3](https://img.shields.io/badge/Pure-CSS3_Custom_Tokens-264de4.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Semantic HTML5](https://img.shields.io/badge/Semantic-HTML5_WCAG_AAA-e34f26.svg)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-047857.svg)](#)

> **Pakistan GK Challenge** is a premium, responsive general knowledge web application dedicated to testing and elevating knowledge of Pakistan’s rich history, geography, national symbols, culture, cricket, science, and constitution. Built with vanilla HTML5, CSS3, and JavaScript—designed with professional human UI/UX art direction.

---

## 🏛️ UI/UX Design Direction & Heritage Identity

Unlike template-driven or generic AI quiz layouts, **Pakistan GK Challenge** is art-directed with deep inspiration from Pakistan's civilizational identity:

- **Emerald & Crescent Palette**: Grounded in Pakistan's official flag green (`#01411c`), elevated with deep spruce forest tones, warm brass gold accents (`#c59b27`), and terracotta sandstone undertones reminiscent of Lahore Fort, Badshahi Mosque, and Mohenjo-daro.
- **Editorial Typography**: Styled with Google Fonts' **Plus Jakarta Sans** for modern UI readability and **Playfair Display** for national titles and metrics.
- **Thoughtful Visual Rhythm**: Varied section compositions, subtle traditional geometric lattice backgrounds, and national badges (e.g., *Karakoram Vanguard*, *Heritage Scholar*).
- **Zero Heavy Frameworks**: 100% vanilla web platform capabilities—instant loading, zero build steps, and zero security vulnerabilities.

---

## 🌟 Key Features

### 1. Curated Master Question Bank (130 Verified Items)
- **10 Core Categories** (13 fact-checked questions each):
  1. **Pakistan History** — Independence movement, Lahore Resolution 1940, founding milestones, Radcliffe Line, and historical turning points.
  2. **Geography of Pakistan** — K2 (8,611m), Nanga Parbat, Indus river system, Deosai plateau, and international passes (Khunjerab, Khyber, Bolan).
  3. **National Symbols** — Anthem composer (Ahmed G. Chagla) and poet (Hafeez Jalandhari), Markhor, Jasmine, Deodar, and the State Emblem.
  4. **Provinces & Cities** — Karachi, Lahore, Sialkot's export craft, Taxila Buddhist Gandhara heritage, Quetta, and Gwadar Port.
  5. **Culture & Traditions** — Ajrak block-printing, Truck art, Qawwali, Sufi heritage (Lal Shahbaz Qalandar, Waris Shah), Shandur Polo, and Kalash culture.
  6. **Sports & Cricket** — 1992 World Cup, 2009 T20 World Cup, 2017 Champions Trophy, Jahangir Khan's 555-match streak, Olympic hockey, and Arshad Nadeem's 92.97m Olympic record.
  7. **Important Personalities** — Quaid-e-Azam, Allama Iqbal, Fatima Jinnah, Abdul Sattar Edhi, Dr. Abdus Salam, Dr. Ruth Pfau, and Benazir Bhutto.
  8. **Constitution & Civics** — 1973 Constitution, Bicameral Parliament (Senate & National Assembly), 18th Amendment, NFC award, and Fundamental Rights.
  9. **Economy & Agriculture** — Indus Basin Irrigation System (IBIS), Super Basmati GI tag, CPEC, SBP, Tarbela Dam, and Khewra Salt Mines.
  10. **Science & Education** — SUPARCO Badr-1, Youm-e-Takbeer 1998, KANUPP, Quaid-i-Azam University, NUST, and ICUBE-Qamar.
- Each item contains **4 distinct choices**, an unambiguous verified answer, and a **2-3 sentence educational historical context**.

### 2. Flexible Quiz Configurations
- **Category Choice**: Select any single subject or challenge yourself with **Mixed General Knowledge**.
- **Difficulty Filters**: Play across All Levels, Easy, Medium, or Hard.
- **Question Volume**: Choose between 10, 20, or 30 questions (with automatic graceful adaptation if a category has fewer questions).
- **Challenge Modes**:
  - **Timed Mode**: 30-second countdown with visual warnings (amber under 10s, pulse crimson under 5s).
  - **Zen Mode**: Untimed relaxed study experience.
  - **Instant Feedback (Study Mode)**: Reveals correct answers and historical context immediately upon clicking.
  - **Exam Mode**: Simulates formal assessment with complete review at the finish.

### 3. Interactive Quiz HUD & Question Matrix
- Real-time progress bar and "Question X of Y" counter.
- **Collapsible Question Matrix Navigator**: Jump directly to any question, with visual indicators for answered, unanswered, flagged, and active states.
- **Review Flagging**: Mark uncertain questions to revisit before submitting.
- **Exit & Submit Confirmation Modals**: Native accessible `<dialog>` modals that warn of unanswered questions to prevent accidental loss of points.

### 4. Results & Mastery Learning
- **Comprehensive Score Card**: Displays final score, accuracy %, time taken, and performance tier.
- **Interactive Review Tabs**: Filter review items by *All*, *Correct*, *Missed*, or *Flagged*.
- **"Retry Missed Questions"**: Instantly launches a focused session containing *only* the questions you got wrong or left unanswered.
- **Share Results**: One-click sharing with formatted text score cards via Web Share API or Clipboard.

### 5. Daily National Challenge & Streaks
- **Deterministic Daily Seed**: Every visitor globally receives the exact same 10 curated questions (one from each category) for the current calendar date.
- **Streak Tracking**: Tracks daily completion streaks stored in browser `localStorage`.

### 6. Procedural Web Audio Sound Engine
- High-fidelity audio feedback synthesized via the **Web Audio API** (tactile clicks, harmonic selection pop, two-tone chime for correct answers, gentle low tone for incorrect answers, warning tick, and fanfare).
- Zero external MP3 files required—100% reliable without network latency or CORS blocks.
- One-click mute/unmute control.

### 7. Accessibility & Responsive Design
- Semantic HTML5 structure (`<header>`, `<main>`, `<nav>`, `<dialog>`, `<article>`, `<section>`, `<footer`).
- Keyboard controls: `1-4` or `A-D` to pick answers, `ArrowLeft` / `ArrowRight` (or `P` / `N`) to navigate, `F` to flag.
- Full support for `prefers-reduced-motion` and high-contrast color ratios.
- Responsive from 320px smartphones to 4K ultra-wide monitors.

---

## 📁 Project Structure

```
Pakistan GK Challenge/
├── index.html            # Semantic, accessible single-page interface
├── css/
│   └── style.css         # Custom tokens, responsive layout, dark/light themes
├── js/
│   ├── questions.js      # 130 fact-checked questions across 10 categories
│   ├── storage.js        # Safe LocalStorage manager for history & leaderboard
│   ├── audio.js          # Web Audio API procedural sound synthesizer
│   ├── quiz.js           # Quiz engine (shuffling, scoring, timers, state)
│   └── app.js            # DOM controller, routing, keyboard navigation, dialogs
├── assets/
│   ├── icons/            # SVG vector iconography
│   └── images/           # Badges and illustrations
└── README.md             # Comprehensive documentation
```

---

## 🚀 How to Run Locally

Because the project is built purely with standard vanilla web technologies, you do not need to install `npm` packages or run build scripts.

### Option 1: Direct File Launch
Double-click `index.html` in your file explorer to open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)
Running through a local web server provides the best experience for local storage and module loading:

**Using Python 3:**
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

**Using Node.js (`npx serve`):**
```bash
npx serve .
```

**Using VS Code Live Server:**
Right-click `index.html` and select **"Open with Live Server"**.

---

## 🌐 How to Deploy to GitHub Pages

1. Initialize git in your local directory (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Pakistan GK Challenge production release"
   ```
2. Create a new repository on [GitHub](https://github.com) named `pakistan-gk-challenge`.
3. Link your remote repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/pakistan-gk-challenge.git
   git push -u origin main
   ```
4. In your GitHub repository:
   - Navigate to **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Branch**, select `main` and root `/`.
   - Click **Save**.
5. Your quiz will be live at `https://<your-username>.github.io/pakistan-gk-challenge/` within minutes!

---

## 🧪 Testing & Verification Checklist

- [x] **Question Bank**: 130 verified questions across 10 categories; zero duplicate IDs, four options per question.
- [x] **Category Capping**: Capping logic prevents duplicate questions when a category has fewer items than requested count.
- [x] **Daily Challenge**: Deterministic seed based on date string ensures identical daily questions for all users on the same day.
- [x] **Scoring Accuracy**: Unanswered questions receive 0 points; correct answers awarded accurately.
- [x] **State Retention**: Selected options and flagged statuses persist when jumping back and forth across questions.
- [x] **Retry Missed**: Correctly filters missed/unanswered items and launches an instant review session.
- [x] **LocalStorage Resilience**: Defensive parsing handles missing, invalid, or disabled storage without application errors.
- [x] **Audio Engine**: Synthesizes cues gracefully using Web Audio API; respects user mute preferences.
- [x] **Accessibility**: ARIA attributes, semantic headings, visible focus rings, and full keyboard navigation (`1-4`, `A-D`, arrows).

---

## 👨‍💻 Developer Profile: A Little About Me

Created and engineered with pride by **Zabeeh Ullah**, creative front-end developer and UI/UX craftsman from Peshawar, Pakistan.

- **Portfolio**: [zabeeh-ullah.netlify.app](https://zabeeh-ullah.netlify.app/)
- **GitHub**: [github.com/Zabeeh-Ullah-Dev](https://github.com/Zabeeh-Ullah-Dev)
- **LinkedIn**: [linkedin.com/in/zabeeh-ullah-1b6094382](https://www.linkedin.com/in/zabeeh-ullah-1b6094382/)
- **WhatsApp**: [+92 307 0509981](https://wa.me/923070509981)
- **Email / CV Request**: `zabeehullah2005@gmail.com`

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
Built with craftsmanship to celebrate Pakistan's history and heritage.

=======
# Pakistan-GK-Challenge
Pakistan GK Challenge is a premium, responsive general knowledge web application dedicated to testing and elevating knowledge of Pakistan’s rich history, geography, national symbols, culture, cricket, science, and constitution. Built with vanilla HTML5, CSS3, and JavaScript—designed with professional human UI/UX art direction.
>>>>>>> a96f626918b8c5163cb55eb08907a73ada2919e3
