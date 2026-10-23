/**
 * Pakistan GK Challenge - Main Application Controller
 * Handles view routing, DOM rendering, keyboard events, dialogs,
 * daily challenge logic, timer synchronization, and results review.
 */

(function () {
  "use strict";

  // Application State
  const app = {
    quizEngine: null,
    currentView: "home",
    lastQuizResult: null,
    reviewFilter: "all",
    theme: "dark",
    soundEnabled: true,
  };

  // Cached DOM Elements
  const DOM = {};

  function initApp() {
    cacheElements();
    loadPreferences();
    initQuizEngine();
    renderCategories();
    updateHomeStats();
    updateDailyChallengeCard();
    renderLeaderboardPreview();
    renderRecentHistoryPreview();
    bindEvents();
    handleInitialRoute();
  }

  function cacheElements() {
    // Views
    DOM.views = {
      home: document.getElementById("view-home"),
      config: document.getElementById("view-config"),
      quiz: document.getElementById("view-quiz"),
      results: document.getElementById("view-results"),
    };

    // Header Controls
    DOM.btnToggleSound = document.getElementById("btn-toggle-sound");
    DOM.btnToggleTheme = document.getElementById("btn-toggle-theme");
    DOM.btnOpenStats = document.getElementById("btn-open-stats");
    DOM.btnNavStartQuiz = document.getElementById("btn-nav-start-quiz");
    DOM.brandHomeLink = document.getElementById("brand-home-link");

    // Home View Elements
    DOM.btnHeroStart = document.getElementById("btn-hero-start");
    DOM.btnHeroExplore = document.getElementById("btn-hero-explore");
    DOM.btnPlayMixedGK = document.getElementById("btn-play-mixed-gk");
    DOM.btnStartDaily = document.getElementById("btn-start-daily");
    DOM.dailyStreakDisplay = document.getElementById("daily-streak-display");
    DOM.dailyStatusText = document.getElementById("daily-status-text");
    DOM.dailyBtnText = document.getElementById("daily-btn-text");
    DOM.categoriesGrid = document.getElementById("categories-grid-container");
    DOM.heroStatQuestions = document.getElementById("hero-stat-questions");
    DOM.heroStatAttempts = document.getElementById("hero-stat-attempts");
    DOM.heroStatAccuracy = document.getElementById("hero-stat-accuracy");
    DOM.statStripAttempts = document.getElementById("stat-strip-attempts");
    DOM.leaderboardTableBody = document.getElementById("leaderboard-table-body");
    DOM.recentHistoryContainer = document.getElementById("recent-history-container");
    DOM.btnViewAllStats = document.getElementById("btn-view-all-stats");

    // Config Elements
    DOM.configForm = document.getElementById("quiz-config-form");
    DOM.configCategorySelect = document.getElementById("config-category-select");
    DOM.configDifficultyInput = document.getElementById("config-difficulty");
    DOM.configCountInput = document.getElementById("config-count");
    DOM.configTimerToggle = document.getElementById("config-timer-toggle");
    DOM.configInstantToggle = document.getElementById("config-instant-toggle");
    DOM.btnConfigCancel = document.getElementById("btn-config-cancel");
    DOM.btnConfigLaunch = document.getElementById("btn-config-launch");

    // Quiz Elements
    DOM.btnQuizExit = document.getElementById("btn-quiz-exit");
    DOM.quizHudCategory = document.getElementById("quiz-hud-category");
    DOM.quizHudDifficulty = document.getElementById("quiz-hud-difficulty");
    DOM.quizCounterText = document.getElementById("quiz-counter-text");
    DOM.quizProgressFill = document.getElementById("quiz-progress-fill");
    DOM.quizTimerBadge = document.getElementById("quiz-timer-badge");
    DOM.quizTimerValue = document.getElementById("quiz-timer-value");
    DOM.btnQuizFlag = document.getElementById("btn-quiz-flag");
    DOM.quizQuestionText = document.getElementById("quiz-question-text");
    DOM.quizOptionsContainer = document.getElementById("quiz-options-container");
    DOM.quizExplanationBox = document.getElementById("quiz-explanation-box");
    DOM.quizExplanationText = document.getElementById("quiz-explanation-text");
    DOM.btnQuizPrev = document.getElementById("btn-quiz-prev");
    DOM.btnQuizSkip = document.getElementById("btn-quiz-skip");
    DOM.btnQuizNext = document.getElementById("btn-quiz-next");
    DOM.btnQuizSubmit = document.getElementById("btn-quiz-submit");
    DOM.quizMatrixGrid = document.getElementById("quiz-matrix-grid");

    // Results Elements
    DOM.resultsBadgeRank = document.getElementById("results-badge-rank");
    DOM.resultsTitleHeading = document.getElementById("results-title-heading");
    DOM.resultsEvalMessage = document.getElementById("results-eval-message");
    DOM.resScoreRatio = document.getElementById("res-score-ratio");
    DOM.resAccuracyVal = document.getElementById("res-accuracy-val");
    DOM.resTimeVal = document.getElementById("res-time-val");
    DOM.resMissedVal = document.getElementById("res-missed-val");
    DOM.btnResultsPlayAgain = document.getElementById("btn-results-play-again");
    DOM.btnResultsRetryMissed = document.getElementById("btn-results-retry-missed");
    DOM.btnResultsShare = document.getElementById("btn-results-share");
    DOM.btnResultsHome = document.getElementById("btn-results-home");
    DOM.reviewCardsContainer = document.getElementById("review-cards-container");
    DOM.reviewFilterTabs = document.querySelectorAll(".btn-filter-tab");

    // Modals & Dialogs
    DOM.dialogExit = document.getElementById("dialog-exit");
    DOM.btnCancelExit = document.getElementById("btn-cancel-exit");
    DOM.btnConfirmExit = document.getElementById("btn-confirm-exit");

    DOM.dialogSubmit = document.getElementById("dialog-submit");
    DOM.dialogSubmitBody = document.getElementById("dialog-submit-body");
    DOM.btnCancelSubmit = document.getElementById("btn-cancel-submit");
    DOM.btnConfirmSubmit = document.getElementById("btn-confirm-submit");

    DOM.dialogStats = document.getElementById("dialog-stats");
    DOM.statsModalContent = document.getElementById("stats-modal-content");
    DOM.btnCloseStatsDialog = document.getElementById("btn-close-stats-dialog");
    DOM.btnClearStatsData = document.getElementById("btn-clear-stats-data");

    // Toast
    DOM.toastNotice = document.getElementById("toast-notice");
  }

  // ==========================================
  // Router & View Management
  // ==========================================
  function showView(viewName) {
    if (!DOM.views[viewName]) return;

    Object.keys(DOM.views).forEach((key) => {
      DOM.views[key].classList.remove("active");
    });

    DOM.views[viewName].classList.add("active");
    app.currentView = viewName;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleInitialRoute() {
    const hash = window.location.hash;
    if (hash === "#categories" || hash === "#daily" || hash === "#how-it-works" || hash === "#leaderboard" || hash === "#about-developer") {
      showView("home");
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      showView("home");
    }
  }

  // ==========================================
  // Preferences (Theme & Sound)
  // ==========================================
  function loadPreferences() {
    const prefs = window.StorageManager.getPreferences();
    app.theme = prefs.theme || "dark";
    app.soundEnabled = prefs.soundEnabled !== false;

    applyTheme(app.theme);
    applySound(app.soundEnabled);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const themeIcon = document.getElementById("theme-icon");
    if (themeIcon) {
      if (theme === "dark") {
        themeIcon.innerHTML = `
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        `;
      } else {
        themeIcon.innerHTML = `
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        `;
      }
    }
  }

  function toggleTheme() {
    app.theme = app.theme === "dark" ? "light" : "dark";
    applyTheme(app.theme);
    window.StorageManager.savePreferences({ theme: app.theme });
    window.SoundEngine.playClick();
  }

  function applySound(enabled) {
    window.SoundEngine.setEnabled(enabled);
    const soundIcon = document.getElementById("sound-icon");
    if (DOM.btnToggleSound) {
      DOM.btnToggleSound.setAttribute("aria-pressed", String(enabled));
    }
    if (soundIcon) {
      if (enabled) {
        soundIcon.innerHTML = `
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        `;
      } else {
        soundIcon.innerHTML = `
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        `;
      }
    }
  }

  function toggleSound() {
    app.soundEnabled = !app.soundEnabled;
    applySound(app.soundEnabled);
    window.StorageManager.savePreferences({ soundEnabled: app.soundEnabled });
    if (app.soundEnabled) {
      window.SoundEngine.playClick();
    }
  }

  // ==========================================
  // Categories Rendering (Home View)
  // ==========================================
  function renderCategories() {
    const categories = window.QuestionBank.getCategories();
    if (!DOM.categoriesGrid) return;

    // Build Category Cards
    let html = "";
    categories.forEach((cat) => {
      const count = window.QuestionBank.getQuestionCountByCategory(cat.id);
      html += `
        <article class="category-card" style="--cat-color: ${cat.color};">
          <div>
            <div class="category-card-top">
              <div class="category-icon-box" aria-hidden="true">
                ${getCategorySVG(cat.icon)}
              </div>
              <span class="category-count-badge">${count} Questions</span>
            </div>
            <h3>${escapeHtml(cat.name)}</h3>
            <p>${escapeHtml(cat.description)}</p>
          </div>
          <div class="category-card-footer">
            <button type="button" class="btn-category-play" data-category="${cat.id}">
              <span>Start Subject Quiz</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </article>
      `;
    });

    DOM.categoriesGrid.innerHTML = html;

    // Populate Category Dropdown in Config Screen
    if (DOM.configCategorySelect) {
      let optionsHtml = `<option value="all">🌟 All Categories (Mixed General Knowledge)</option>`;
      categories.forEach((cat) => {
        const count = window.QuestionBank.getQuestionCountByCategory(cat.id);
        optionsHtml += `<option value="${cat.id}">${escapeHtml(cat.name)} (${count} questions)</option>`;
      });
      DOM.configCategorySelect.innerHTML = optionsHtml;
    }
  }

  function getCategorySVG(iconName) {
    const icons = {
      history: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>`,
      mountain: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>`,
      flag: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`,
      "map-pin": `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
      palette: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"></path></svg>`,
      trophy: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34"></path><path d="M6 2h12v7a6 6 0 0 1-12 0V2z"></path></svg>`,
      award: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
      landmark: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="2" y1="22" x2="22" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>`,
      "trending-up": `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
      "book-open": `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
    };
    return icons[iconName] || icons.history;
  }

  // ==========================================
  // Home Stats & Daily Challenge
  // ==========================================
  function updateHomeStats() {
    const stats = window.StorageManager.getOverallStats();
    if (DOM.heroStatAttempts) DOM.heroStatAttempts.textContent = stats.totalQuizzes;
    if (DOM.heroStatAccuracy) DOM.heroStatAccuracy.textContent = `${stats.averageAccuracy}%`;
    if (DOM.statStripAttempts) DOM.statStripAttempts.textContent = stats.totalQuizzes;
  }

  function updateDailyChallengeCard() {
    const todayStr = window.StorageManager.getTodayDateString();
    const record = window.StorageManager.getDailyChallengeRecord(todayStr);
    const streak = window.StorageManager.getStreak();

    if (DOM.dailyStreakDisplay) {
      DOM.dailyStreakDisplay.textContent = `🔥 ${streak.currentStreak} Day Streak`;
    }

    if (record && record.completed) {
      if (DOM.dailyStatusText) {
        DOM.dailyStatusText.textContent = `Completed Today! Score: ${record.score}/${record.total} (${record.percentage}%)`;
      }
      if (DOM.dailyBtnText) {
        DOM.dailyBtnText.textContent = "Replay Daily Challenge";
      }
    } else {
      if (DOM.dailyStatusText) {
        DOM.dailyStatusText.textContent = "Available for Today";
      }
      if (DOM.dailyBtnText) {
        DOM.dailyBtnText.textContent = "Take Daily Challenge";
      }
    }
  }

  function renderLeaderboardPreview() {
    if (!DOM.leaderboardTableBody) return;
    const board = window.StorageManager.getLeaderboard();

    if (board.length === 0) {
      DOM.leaderboardTableBody.innerHTML = `
        <tr>
          <td colspan="5">
            <div class="empty-state">
              <p>No quiz attempts recorded yet on this device.</p>
              <p>Complete your first quiz to earn a spot on the leaderboard!</p>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    let rowsHtml = "";
    board.slice(0, 5).forEach((entry, idx) => {
      const rank = idx + 1;
      let rankClass = "rank-other";
      if (rank === 1) rankClass = "rank-1";
      if (rank === 2) rankClass = "rank-2";
      if (rank === 3) rankClass = "rank-3";

      rowsHtml += `
        <tr>
          <td><span class="rank-badge ${rankClass}">${rank}</span></td>
          <td><strong>${escapeHtml(entry.categoryName || "Mixed GK")}</strong></td>
          <td>${entry.score} / ${entry.totalQuestions}</td>
          <td><strong>${entry.percentage}%</strong></td>
          <td style="color: var(--text-muted);">${escapeHtml(entry.dateFormatted || "")}</td>
        </tr>
      `;
    });

    DOM.leaderboardTableBody.innerHTML = rowsHtml;
  }

  function renderRecentHistoryPreview() {
    if (!DOM.recentHistoryContainer) return;
    const history = window.StorageManager.getHistory();

    if (history.length === 0) {
      DOM.recentHistoryContainer.innerHTML = `
        <div class="empty-state">
          <p>Your recent quiz scores and progress will appear here.</p>
        </div>
      `;
      return;
    }

    let listHtml = `<div style="display: flex; flex-direction: column; gap: 0.85rem;">`;
    history.slice(0, 4).forEach((h) => {
      const minutes = Math.floor(h.timeSpentSeconds / 60);
      const seconds = h.timeSpentSeconds % 60;
      const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

      listHtml += `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; border-radius: var(--radius-md); background: var(--bg-subtle); border: 1px solid var(--border-light);">
          <div>
            <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-primary);">${escapeHtml(h.categoryName)}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${escapeHtml(h.dateFormatted)} &bull; ${timeStr}</div>
          </div>
          <div style="text-align: right;">
            <div style="font-family: var(--font-heading); font-weight: 700; font-size: 1.15rem; color: ${h.percentage >= 70 ? "var(--color-success)" : "var(--text-primary)"};">${h.score}/${h.totalQuestions}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">${h.percentage}%</div>
          </div>
        </div>
      `;
    });
    listHtml += `</div>`;

    DOM.recentHistoryContainer.innerHTML = listHtml;
  }

  // ==========================================
  // Quiz Configuration Handlers
  // ==========================================
  function openConfig(preselectedCategory = "all") {
    window.SoundEngine.playClick();
    if (DOM.configCategorySelect) {
      DOM.configCategorySelect.value = preselectedCategory;
    }
    showView("config");
  }

  function handleConfigSubmit(e) {
    e.preventDefault();
    window.SoundEngine.playClick();

    const category = DOM.configCategorySelect ? DOM.configCategorySelect.value : "all";
    const difficulty = DOM.configDifficultyInput ? DOM.configDifficultyInput.value : "all";
    const questionCount = DOM.configCountInput ? parseInt(DOM.configCountInput.value, 10) : 10;
    const timerEnabled = DOM.configTimerToggle ? DOM.configTimerToggle.checked : true;
    const instantFeedback = DOM.configInstantToggle ? DOM.configInstantToggle.checked : false;

    startQuizSession({
      category,
      difficulty,
      questionCount,
      timerEnabled,
      instantFeedback,
      isDailyChallenge: false,
    });
  }

  function startDailyChallenge() {
    window.SoundEngine.playClick();
    startQuizSession({
      isDailyChallenge: true,
      timerEnabled: true,
      instantFeedback: false,
    });
  }

  // ==========================================
  // Quiz Session Management
  // ==========================================
  function initQuizEngine() {
    app.quizEngine = new window.QuizEngine();

    app.quizEngine.onTimerTick = (seconds, total) => {
      if (!DOM.quizTimerValue) return;
      DOM.quizTimerValue.textContent = `${seconds}s`;

      if (seconds <= 5) {
        DOM.quizTimerBadge.className = "timer-badge danger";
        window.SoundEngine.playTimerTick();
      } else if (seconds <= 10) {
        DOM.quizTimerBadge.className = "timer-badge warning";
      } else {
        DOM.quizTimerBadge.className = "timer-badge";
      }
    };

    app.quizEngine.onTimerExpired = () => {
      window.SoundEngine.playIncorrect();
      // If there are subsequent questions, automatically advance or prompt
      if (app.quizEngine.getCurrentIndex() < app.quizEngine.getTotalQuestions() - 1) {
        app.quizEngine.nextQuestion();
        renderActiveQuestion();
      } else {
        promptQuizSubmit();
      }
    };
  }

  function startQuizSession(options) {
    app.quizEngine.startQuiz(options);
    showView("quiz");
    renderActiveQuestion();
  }

  function startRetryMissedSession() {
    if (!app.lastQuizResult || !app.lastQuizResult.missedQuestions || app.lastQuizResult.missedQuestions.length === 0) {
      return;
    }

    window.SoundEngine.playClick();
    app.quizEngine.startRetryMissed(app.lastQuizResult.missedQuestions, {
      category: app.lastQuizResult.category,
      categoryName: app.lastQuizResult.categoryName,
      difficulty: app.lastQuizResult.difficulty,
      timerEnabled: true,
      instantFeedback: false,
    });

    showView("quiz");
    renderActiveQuestion();
  }

  function renderActiveQuestion() {
    const q = app.quizEngine.getCurrentQuestion();
    if (!q) return;

    const currentIdx = app.quizEngine.getCurrentIndex();
    const total = app.quizEngine.getTotalQuestions();
    const isAnswered = app.quizEngine.getUserAnswer(currentIdx) !== null;
    const isFlagged = app.quizEngine.isFlagged(currentIdx);

    // Update HUD
    if (DOM.quizHudCategory) DOM.quizHudCategory.textContent = q.categoryName;
    if (DOM.quizHudDifficulty) {
      DOM.quizHudDifficulty.textContent = q.difficulty.toUpperCase();
      DOM.quizHudDifficulty.style.backgroundColor =
        q.difficulty === "easy"
          ? "var(--pk-green-subtle)"
          : q.difficulty === "medium"
          ? "var(--accent-gold-subtle)"
          : "var(--accent-terracotta-subtle)";
    }
    if (DOM.quizCounterText) DOM.quizCounterText.textContent = `Question ${currentIdx + 1} of ${total}`;

    const progressPct = Math.round(((currentIdx + 1) / total) * 100);
    if (DOM.quizProgressFill) DOM.quizProgressFill.style.width = `${progressPct}%`;

    // Flag button state
    if (DOM.btnQuizFlag) {
      if (isFlagged) {
        DOM.btnQuizFlag.classList.add("active");
        DOM.btnQuizFlag.setAttribute("aria-pressed", "true");
      } else {
        DOM.btnQuizFlag.classList.remove("active");
        DOM.btnQuizFlag.setAttribute("aria-pressed", "false");
      }
    }

    // Question statement
    if (DOM.quizQuestionText) {
      DOM.quizQuestionText.textContent = q.question;
    }

    // Options rendering
    const selectedAnswer = app.quizEngine.getUserAnswer(currentIdx);
    const isInstantMode = app.quizEngine.config.instantFeedback;
    const hasInstantChecked = app.quizEngine.instantChecked.has(currentIdx);

    const keyLabels = ["A", "B", "C", "D"];
    let optionsHtml = "";

    q.options.forEach((optText, optIdx) => {
      let optionClasses = "option-btn";
      const isSelected = selectedAnswer === optIdx;

      if (isSelected) optionClasses += " selected";

      if (isInstantMode && hasInstantChecked) {
        if (optIdx === q.correctIndex) {
          optionClasses += " correct";
        } else if (isSelected && optIdx !== q.correctIndex) {
          optionClasses += " incorrect";
        }
      }

      optionsHtml += `
        <button type="button" class="${optionClasses}" data-index="${optIdx}" aria-pressed="${isSelected}">
          <span class="option-key" aria-hidden="true">${keyLabels[optIdx]}</span>
          <span class="option-text">${escapeHtml(optText)}</span>
        </button>
      `;
    });

    if (DOM.quizOptionsContainer) {
      DOM.quizOptionsContainer.innerHTML = optionsHtml;
    }

    // Explanation Box for Instant Mode
    if (DOM.quizExplanationBox && DOM.quizExplanationText) {
      if (isInstantMode && hasInstantChecked) {
        DOM.quizExplanationText.textContent = q.explanation;
        DOM.quizExplanationBox.classList.add("visible");
      } else {
        DOM.quizExplanationBox.classList.remove("visible");
      }
    }

    // Navigation buttons state
    if (DOM.btnQuizPrev) DOM.btnQuizPrev.disabled = currentIdx === 0;
    if (DOM.btnQuizNext) {
      DOM.btnQuizNext.style.display = currentIdx === total - 1 ? "none" : "inline-flex";
    }
    if (DOM.btnQuizSubmit) {
      DOM.btnQuizSubmit.style.display = currentIdx === total - 1 ? "inline-flex" : "none";
    }

    renderQuestionMatrix();
  }

  function handleOptionSelect(optionIdx) {
    const currentIdx = app.quizEngine.getCurrentIndex();
    const q = app.quizEngine.getCurrentQuestion();
    if (!q) return;

    app.quizEngine.selectAnswer(optionIdx);

    // Audio cue
    if (app.quizEngine.config.instantFeedback) {
      if (optionIdx === q.correctIndex) {
        window.SoundEngine.playCorrect();
      } else {
        window.SoundEngine.playIncorrect();
      }
    } else {
      window.SoundEngine.playSelect();
    }

    renderActiveQuestion();
  }

  function renderQuestionMatrix() {
    if (!DOM.quizMatrixGrid) return;
    const statuses = app.quizEngine.getQuestionStatuses();

    let pillsHtml = "";
    statuses.forEach((st) => {
      let classes = "matrix-pill";
      if (st.isCurrent) classes += " current";
      if (st.isAnswered) classes += " answered";
      if (st.isFlagged) classes += " flagged";

      pillsHtml += `
        <button type="button" class="${classes}" data-goto="${st.index}" title="Question ${st.number}">
          ${st.number}
        </button>
      `;
    });

    DOM.quizMatrixGrid.innerHTML = pillsHtml;
  }

  // ==========================================
  // Confirmation Modals & Dialog Handling
  // ==========================================
  function showModalDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "true");
    }
  }

  function closeModalDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  function promptQuizExit() {
    window.SoundEngine.playClick();
    showModalDialog(DOM.dialogExit);
  }

  function confirmQuizExit() {
    window.SoundEngine.playClick();
    closeModalDialog(DOM.dialogExit);
    app.quizEngine.stopTimer();
    showView("home");
  }

  function promptQuizSubmit() {
    window.SoundEngine.playClick();
    const total = app.quizEngine.getTotalQuestions();
    const answered = app.quizEngine.getAnsweredCount();
    const unanswered = total - answered;

    if (unanswered > 0) {
      if (DOM.dialogSubmitBody) {
        DOM.dialogSubmitBody.innerHTML = `
          You have answered <strong>${answered}</strong> of <strong>${total}</strong> questions.
          <br><br>
          <span style="color: var(--color-warning);">⚠️ Warning: ${unanswered} question${unanswered > 1 ? "s are" : " is"} unanswered and will receive zero points.</span>
          <br><br>
          Are you ready to finalize your score?
        `;
      }
      showModalDialog(DOM.dialogSubmit);
    } else {
      executeQuizSubmit();
    }
  }

  function executeQuizSubmit() {
    closeModalDialog(DOM.dialogSubmit);
    const result = app.quizEngine.submitQuiz();
    app.lastQuizResult = result;

    window.SoundEngine.playFanfare();
    showView("results");
    renderResultsView(result);
    updateHomeStats();
    updateDailyChallengeCard();
    renderLeaderboardPreview();
    renderRecentHistoryPreview();
  }

  // ==========================================
  // Results & Detailed Answer Review
  // ==========================================
  function renderResultsView(result) {
    if (!result) return;

    if (DOM.resultsBadgeRank) DOM.resultsBadgeRank.textContent = result.assessment.rank;
    if (DOM.resultsTitleHeading) {
      DOM.resultsTitleHeading.textContent = `${result.score} of ${result.totalQuestions} Correct (${result.percentage}%)`;
    }
    if (DOM.resultsEvalMessage) DOM.resultsEvalMessage.textContent = result.assessment.message;

    if (DOM.resScoreRatio) DOM.resScoreRatio.textContent = `${result.score} / ${result.totalQuestions}`;
    if (DOM.resAccuracyVal) DOM.resAccuracyVal.textContent = `${result.percentage}%`;

    const minutes = Math.floor(result.timeSpentSeconds / 60);
    const seconds = result.timeSpentSeconds % 60;
    const timeFormatted = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
    if (DOM.resTimeVal) DOM.resTimeVal.textContent = timeFormatted;

    const missed = result.missedQuestions ? result.missedQuestions.length : 0;
    if (DOM.resMissedVal) DOM.resMissedVal.textContent = missed;

    // Retry Missed button availability
    if (DOM.btnResultsRetryMissed) {
      if (missed > 0) {
        DOM.btnResultsRetryMissed.style.display = "inline-flex";
        DOM.btnResultsRetryMissed.textContent = `Retry Missed (${missed})`;
      } else {
        DOM.btnResultsRetryMissed.style.display = "none";
      }
    }

    app.reviewFilter = "all";
    renderReviewCards();
  }

  function renderReviewCards() {
    if (!DOM.reviewCardsContainer || !app.lastQuizResult) return;
    const reviews = app.lastQuizResult.detailedReview || [];

    const filtered = reviews.filter((r) => {
      if (app.reviewFilter === "correct") return r.isCorrect;
      if (app.reviewFilter === "missed") return !r.isCorrect;
      if (app.reviewFilter === "flagged") return r.flagged;
      return true;
    });

    if (filtered.length === 0) {
      DOM.reviewCardsContainer.innerHTML = `
        <div class="empty-state">
          <p>No questions matched the "${app.reviewFilter}" filter criteria.</p>
        </div>
      `;
      return;
    }

    const keyLabels = ["A", "B", "C", "D"];
    let html = "";

    filtered.forEach((item) => {
      let cardClass = "review-item-card";
      let statusTag = "";

      if (!item.isAnswered) {
        cardClass += " is-unanswered";
        statusTag = `<span class="review-status-tag unanswered">Unanswered</span>`;
      } else if (item.isCorrect) {
        cardClass += " is-correct";
        statusTag = `<span class="review-status-tag correct">Correct</span>`;
      } else {
        cardClass += " is-incorrect";
        statusTag = `<span class="review-status-tag incorrect">Incorrect</span>`;
      }

      let optionsHtml = "";
      item.options.forEach((optText, optIdx) => {
        let pillClass = "review-ans-pill";
        const isUserChoice = item.selectedIndex === optIdx;
        const isRightAnswer = item.correctIndex === optIdx;

        if (isRightAnswer) {
          pillClass += " correct-answer";
        } else if (isUserChoice && !item.isCorrect) {
          pillClass += " user-selected-wrong";
        }

        optionsHtml += `
          <div class="${pillClass}">
            <strong>${keyLabels[optIdx]}.</strong> ${escapeHtml(optText)}
            ${isRightAnswer ? " ✓ (Correct)" : isUserChoice ? " ✗ (Your Answer)" : ""}
          </div>
        `;
      });

      html += `
        <article class="${cardClass}">
          <div class="review-item-header">
            <span class="review-q-num">Question ${item.questionNumber} &bull; ${escapeHtml(item.categoryName)}</span>
            ${statusTag}
          </div>
          <h4 class="review-question-text">${escapeHtml(item.question)}</h4>
          <div class="review-answers-grid">
            ${optionsHtml}
          </div>
          <div class="review-explanation">
            <strong>Historical Context:</strong> ${escapeHtml(item.explanation)}
          </div>
        </article>
      `;
    });

    DOM.reviewCardsContainer.innerHTML = html;
  }

  // ==========================================
  // Share Score & Toast
  // ==========================================
  function shareQuizResult() {
    if (!app.lastQuizResult) return;
    window.SoundEngine.playClick();

    const r = app.lastQuizResult;
    const text = `🇵🇰 Pakistan GK Challenge:\nI scored ${r.score}/${r.totalQuestions} (${r.percentage}%) in ${r.categoryName} with the rank "${r.assessment.rank}"!\nTest your knowledge: https://pakistangk.example.com`;

    if (navigator.share) {
      navigator.share({
        title: "Pakistan GK Challenge Score",
        text: text,
      }).catch(() => {
        // Fallback to clipboard
        copyToClipboard(text);
      });
    } else {
      copyToClipboard(text);
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast("Score summary copied to clipboard!");
      }).catch(() => {
        showToast("Score: " + app.lastQuizResult.percentage + "%");
      });
    } else {
      showToast("Score summary ready to share!");
    }
  }

  function showToast(message) {
    if (!DOM.toastNotice) return;
    DOM.toastNotice.textContent = message;
    DOM.toastNotice.classList.add("show");
    setTimeout(() => {
      DOM.toastNotice.classList.remove("show");
    }, 2800);
  }

  // ==========================================
  // Statistics Modal
  // ==========================================
  function openStatsModal() {
    window.SoundEngine.playClick();
    const stats = window.StorageManager.getOverallStats();
    const catStats = window.StorageManager.getCategoryStats();
    const streak = window.StorageManager.getStreak();

    let catBarsHtml = "";
    Object.keys(catStats).forEach((key) => {
      const c = catStats[key];
      const accuracy = c.totalQuestionsAnswered > 0 ? Math.round((c.totalCorrect / c.totalQuestionsAnswered) * 100) : 0;
      catBarsHtml += `
        <div style="margin-bottom: 0.85rem;">
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.25rem;">
            <span>${escapeHtml(c.categoryName)}</span>
            <span>${accuracy}% (${c.totalCorrect}/${c.totalQuestionsAnswered})</span>
          </div>
          <div style="height: 6px; background: var(--bg-subtle); border-radius: var(--radius-full); overflow: hidden;">
            <div style="height: 100%; width: ${accuracy}%; background: var(--pk-green-base); border-radius: var(--radius-full);"></div>
          </div>
        </div>
      `;
    });

    if (DOM.statsModalContent) {
      DOM.statsModalContent.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem; text-align: center;">
          <div style="background: var(--bg-subtle); padding: 1rem; border-radius: var(--radius-md);">
            <div style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 700;">${stats.totalQuizzes}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Quizzes Completed</div>
          </div>
          <div style="background: var(--bg-subtle); padding: 1rem; border-radius: var(--radius-md);">
            <div style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 700;">${stats.averageAccuracy}%</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Overall Accuracy</div>
          </div>
          <div style="background: var(--bg-subtle); padding: 1rem; border-radius: var(--radius-md);">
            <div style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 700;">🔥 ${streak.currentStreak}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Daily Streak</div>
          </div>
        </div>

        <h4 style="font-size: 1rem; margin-bottom: 0.75rem;">Category Mastery Breakdown</h4>
        <div style="max-height: 220px; overflow-y: auto; padding-right: 0.5rem; margin-bottom: 1.5rem;">
          ${catBarsHtml || "<p style='color: var(--text-muted); font-size: 0.88rem;'>Play subject quizzes to unlock category mastery stats.</p>"}
        </div>
      `;
    }

    showModalDialog(DOM.dialogStats);
  }

  function handleClearData() {
    if (confirm("Are you sure you want to clear your saved scores, history, and streaks on this browser?")) {
      window.StorageManager.clearAllData();
      closeModalDialog(DOM.dialogStats);
      updateHomeStats();
      updateDailyChallengeCard();
      renderLeaderboardPreview();
      renderRecentHistoryPreview();
      showToast("Local history cleared.");
    }
  }

  // ==========================================
  // Event Bindings
  // ==========================================
  function bindEvents() {
    // Header controls
    if (DOM.btnToggleTheme) DOM.btnToggleTheme.addEventListener("click", toggleTheme);
    if (DOM.btnToggleSound) DOM.btnToggleSound.addEventListener("click", toggleSound);
    if (DOM.btnOpenStats) DOM.btnOpenStats.addEventListener("click", openStatsModal);
    if (DOM.btnNavStartQuiz) DOM.btnNavStartQuiz.addEventListener("click", () => openConfig("all"));
    if (DOM.brandHomeLink) {
      DOM.brandHomeLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (app.currentView === "quiz") {
          promptQuizExit();
        } else {
          showView("home");
        }
      });
    }

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        if (app.currentView === "quiz") {
          e.preventDefault();
          promptQuizExit();
        } else if (app.currentView !== "home") {
          showView("home");
        }
      });
    });

    // Home buttons
    if (DOM.btnHeroStart) DOM.btnHeroStart.addEventListener("click", () => openConfig("all"));
    if (DOM.btnPlayMixedGK) DOM.btnPlayMixedGK.addEventListener("click", () => openConfig("all"));
    if (DOM.btnStartDaily) DOM.btnStartDaily.addEventListener("click", startDailyChallenge);
    if (DOM.btnViewAllStats) DOM.btnViewAllStats.addEventListener("click", openStatsModal);

    const footerStatsLink = document.getElementById("footer-link-stats");
    if (footerStatsLink) {
      footerStatsLink.addEventListener("click", (e) => {
        e.preventDefault();
        openStatsModal();
      });
    }

    // Category Grid click delegation
    if (DOM.categoriesGrid) {
      DOM.categoriesGrid.addEventListener("click", (e) => {
        const btn = e.target.closest(".btn-category-play");
        if (btn) {
          const catId = btn.getAttribute("data-category");
          openConfig(catId);
        }
      });
    }

    // Footer category links
    document.querySelectorAll(".footer-category-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const cat = link.getAttribute("data-cat");
        openConfig(cat);
      });
    });

    // Config Screen Form
    if (DOM.configForm) DOM.configForm.addEventListener("submit", handleConfigSubmit);
    if (DOM.btnConfigCancel) DOM.btnConfigCancel.addEventListener("click", () => showView("home"));

    // Config radio selectors (Difficulty & Count)
    document.querySelectorAll('.config-options-grid[aria-label="Difficulty Level"] .config-btn-select').forEach((btn) => {
      btn.addEventListener("click", () => {
        window.SoundEngine.playClick();
        document.querySelectorAll('.config-options-grid[aria-label="Difficulty Level"] .config-btn-select').forEach((b) => {
          b.classList.remove("selected");
          b.setAttribute("aria-checked", "false");
        });
        btn.classList.add("selected");
        btn.setAttribute("aria-checked", "true");
        if (DOM.configDifficultyInput) DOM.configDifficultyInput.value = btn.getAttribute("data-value");
      });
    });

    document.querySelectorAll('.config-options-grid[aria-label="Number of Questions"] .config-btn-select').forEach((btn) => {
      btn.addEventListener("click", () => {
        window.SoundEngine.playClick();
        document.querySelectorAll('.config-options-grid[aria-label="Number of Questions"] .config-btn-select').forEach((b) => {
          b.classList.remove("selected");
          b.setAttribute("aria-checked", "false");
        });
        btn.classList.add("selected");
        btn.setAttribute("aria-checked", "true");
        if (DOM.configCountInput) DOM.configCountInput.value = btn.getAttribute("data-count");
      });
    });

    // Quiz Navigation & Controls
    if (DOM.btnQuizExit) DOM.btnQuizExit.addEventListener("click", promptQuizExit);
    if (DOM.btnQuizFlag) {
      DOM.btnQuizFlag.addEventListener("click", () => {
        const flagged = app.quizEngine.toggleFlag();
        window.SoundEngine.playClick();
        DOM.btnQuizFlag.classList.toggle("active", flagged);
        DOM.btnQuizFlag.setAttribute("aria-pressed", String(flagged));
        renderQuestionMatrix();
      });
    }

    if (DOM.btnQuizPrev) {
      DOM.btnQuizPrev.addEventListener("click", () => {
        window.SoundEngine.playClick();
        app.quizEngine.prevQuestion();
        renderActiveQuestion();
      });
    }

    if (DOM.btnQuizNext) {
      DOM.btnQuizNext.addEventListener("click", () => {
        window.SoundEngine.playClick();
        app.quizEngine.nextQuestion();
        renderActiveQuestion();
      });
    }

    if (DOM.btnQuizSkip) {
      DOM.btnQuizSkip.addEventListener("click", () => {
        window.SoundEngine.playClick();
        if (app.quizEngine.getCurrentIndex() < app.quizEngine.getTotalQuestions() - 1) {
          app.quizEngine.nextQuestion();
          renderActiveQuestion();
        } else {
          promptQuizSubmit();
        }
      });
    }

    if (DOM.btnQuizSubmit) DOM.btnQuizSubmit.addEventListener("click", promptQuizSubmit);

    // Option selection delegation
    if (DOM.quizOptionsContainer) {
      DOM.quizOptionsContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".option-btn");
        if (btn) {
          const idx = parseInt(btn.getAttribute("data-index"), 10);
          handleOptionSelect(idx);
        }
      });
    }

    // Matrix navigation delegation
    if (DOM.quizMatrixGrid) {
      DOM.quizMatrixGrid.addEventListener("click", (e) => {
        const pill = e.target.closest(".matrix-pill");
        if (pill) {
          const gotoIdx = parseInt(pill.getAttribute("data-goto"), 10);
          window.SoundEngine.playClick();
          app.quizEngine.goToQuestion(gotoIdx);
          renderActiveQuestion();
        }
      });
    }

    // Results Actions
    if (DOM.btnResultsPlayAgain) {
      DOM.btnResultsPlayAgain.addEventListener("click", () => {
        window.SoundEngine.playClick();
        if (app.lastQuizResult) {
          startQuizSession({
            category: app.lastQuizResult.category,
            difficulty: app.lastQuizResult.difficulty,
            questionCount: app.lastQuizResult.totalQuestions,
            isDailyChallenge: app.lastQuizResult.isDailyChallenge,
          });
        } else {
          openConfig("all");
        }
      });
    }

    if (DOM.btnResultsRetryMissed) {
      DOM.btnResultsRetryMissed.addEventListener("click", startRetryMissedSession);
    }

    if (DOM.btnResultsShare) {
      DOM.btnResultsShare.addEventListener("click", shareQuizResult);
    }

    if (DOM.btnResultsHome) {
      DOM.btnResultsHome.addEventListener("click", () => {
        window.SoundEngine.playClick();
        showView("home");
      });
    }

    // Review Filter Tabs
    if (DOM.reviewFilterTabs) {
      DOM.reviewFilterTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          window.SoundEngine.playClick();
          DOM.reviewFilterTabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");
          app.reviewFilter = tab.getAttribute("data-filter");
          renderReviewCards();
        });
      });
    }

    // Dialog Buttons
    if (DOM.btnCancelExit) DOM.btnCancelExit.addEventListener("click", () => closeModalDialog(DOM.dialogExit));
    if (DOM.btnConfirmExit) DOM.btnConfirmExit.addEventListener("click", confirmQuizExit);

    if (DOM.btnCancelSubmit) DOM.btnCancelSubmit.addEventListener("click", () => closeModalDialog(DOM.dialogSubmit));
    if (DOM.btnConfirmSubmit) DOM.btnConfirmSubmit.addEventListener("click", executeQuizSubmit);

    if (DOM.btnCloseStatsDialog) DOM.btnCloseStatsDialog.addEventListener("click", () => closeModalDialog(DOM.dialogStats));
    if (DOM.btnClearStatsData) DOM.btnClearStatsData.addEventListener("click", handleClearData);

    // Light-dismiss support for dialogs: clicking backdrop dismisses
    [DOM.dialogExit, DOM.dialogSubmit, DOM.dialogStats].forEach((dialog) => {
      if (dialog) {
        dialog.addEventListener("click", (e) => {
          const rect = dialog.getBoundingClientRect();
          const isInDialog = (
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width
          );
          if (!isInDialog) {
            closeModalDialog(dialog);
          }
        });
      }
    });

    // Keyboard Shortcuts (1-4, A-D, Enter, Arrow keys)
    window.addEventListener("keydown", handleGlobalKeyboard);
  }

  function handleGlobalKeyboard(e) {
    if (app.currentView !== "quiz") return;
    // Don't intercept if user is typing in an input
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;

    const key = e.key.toUpperCase();

    // Option selection via 1, 2, 3, 4 or A, B, C, D
    if (["1", "A"].includes(key)) {
      e.preventDefault();
      handleOptionSelect(0);
    } else if (["2", "B"].includes(key)) {
      e.preventDefault();
      handleOptionSelect(1);
    } else if (["3", "C"].includes(key)) {
      e.preventDefault();
      handleOptionSelect(2);
    } else if (["4", "D"].includes(key)) {
      e.preventDefault();
      handleOptionSelect(3);
    } else if (key === "ARROWLEFT" || key === "P") {
      // Previous
      e.preventDefault();
      if (app.quizEngine.getCurrentIndex() > 0) {
        window.SoundEngine.playClick();
        app.quizEngine.prevQuestion();
        renderActiveQuestion();
      }
    } else if (key === "ARROWRIGHT" || key === "N") {
      // Next
      e.preventDefault();
      if (app.quizEngine.getCurrentIndex() < app.quizEngine.getTotalQuestions() - 1) {
        window.SoundEngine.playClick();
        app.quizEngine.nextQuestion();
        renderActiveQuestion();
      }
    } else if (key === "F") {
      // Flag
      e.preventDefault();
      const flagged = app.quizEngine.toggleFlag();
      window.SoundEngine.playClick();
      if (DOM.btnQuizFlag) {
        DOM.btnQuizFlag.classList.toggle("active", flagged);
        DOM.btnQuizFlag.setAttribute("aria-pressed", String(flagged));
      }
      renderQuestionMatrix();
    }
  }

  // Utility helper for safe HTML escaping
  function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Initialize once DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();

