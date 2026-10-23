/**
 * Pakistan GK Challenge - LocalStorage & State Persistence Manager
 * Handles user history, statistics, daily challenge records, local leaderboard, and preferences.
 * Includes defensive parsing and error recovery for corrupted or restricted storage.
 */

const STORAGE_KEYS = {
  PREFERENCES: "pk_gk_preferences_v1",
  QUIZ_HISTORY: "pk_gk_history_v1",
  LEADERBOARD: "pk_gk_leaderboard_v1",
  CATEGORY_STATS: "pk_gk_category_stats_v1",
  DAILY_CHALLENGE: "pk_gk_daily_challenge_v1",
  STREAK: "pk_gk_daily_streak_v1",
};

const DEFAULT_PREFERENCES = {
  theme: "dark", // default to elegant dark emerald theme
  soundEnabled: true,
  timerEnabled: true,
  timerSecondsPerQuestion: 30,
  reducedMotion: false,
};

const StorageManager = {
  // Safe wrapper for localStorage access
  isAvailable() {
    try {
      const test = "__pk_storage_test__";
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return true;
    } catch (e) {
      console.warn("LocalStorage is not available or access is denied.", e);
      return false;
    }
  },

  getItem(key, fallback = null) {
    if (!this.isAvailable()) return fallback;
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return fallback;
      return JSON.parse(item);
    } catch (e) {
      console.error(`Failed to parse localStorage key: ${key}`, e);
      return fallback;
    }
  },

  setItem(key, value) {
    if (!this.isAvailable()) return false;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error(`Failed to write to localStorage key: ${key}`, e);
      return false;
    }
  },

  // ===============================
  // User Preferences
  // ===============================
  getPreferences() {
    const saved = this.getItem(STORAGE_KEYS.PREFERENCES, {});
    return { ...DEFAULT_PREFERENCES, ...saved };
  },

  savePreferences(prefs) {
    const current = this.getPreferences();
    const updated = { ...current, ...prefs };
    this.setItem(STORAGE_KEYS.PREFERENCES, updated);
    return updated;
  },

  // ===============================
  // Quiz History & Attempts
  // ===============================
  getHistory() {
    const list = this.getItem(STORAGE_KEYS.QUIZ_HISTORY, []);
    return Array.isArray(list) ? list : [];
  },

  saveQuizAttempt(attemptData) {
    /**
     * attemptData schema:
     * {
     *   id: string,
     *   timestamp: number (epoch ms),
     *   dateFormatted: string,
     *   category: string,
     *   categoryName: string,
     *   difficulty: string,
     *   score: number,
     *   totalQuestions: number,
     *   percentage: number,
     *   timeSpentSeconds: number,
     *   isDailyChallenge: boolean
     * }
     */
    const history = this.getHistory();
    history.unshift(attemptData); // newest first
    // keep maximum 50 most recent attempts to avoid storage bloat
    if (history.length > 50) history.pop();
    this.setItem(STORAGE_KEYS.QUIZ_HISTORY, history);

    // Update Category Stats
    this.updateCategoryStats(attemptData);

    // Update Local Leaderboard
    this.updateLeaderboard(attemptData);

    // If Daily Challenge, update daily tracking
    if (attemptData.isDailyChallenge) {
      this.recordDailyCompletion(attemptData);
    }

    return history;
  },

  // ===============================
  // Category-wise Performance Stats
  // ===============================
  getCategoryStats() {
    const stats = this.getItem(STORAGE_KEYS.CATEGORY_STATS, {});
    return typeof stats === "object" && stats !== null ? stats : {};
  },

  updateCategoryStats(attempt) {
    const stats = this.getCategoryStats();
    const cat = attempt.category || "mixed";

    if (!stats[cat]) {
      stats[cat] = {
        categoryName: attempt.categoryName || "Mixed Knowledge",
        quizzesPlayed: 0,
        totalQuestionsAnswered: 0,
        totalCorrect: 0,
        bestScore: 0,
        bestPercentage: 0,
      };
    }

    const current = stats[cat];
    current.quizzesPlayed += 1;
    current.totalQuestionsAnswered += attempt.totalQuestions;
    current.totalCorrect += attempt.score;
    if (attempt.score > current.bestScore) {
      current.bestScore = attempt.score;
    }
    if (attempt.percentage > current.bestPercentage) {
      current.bestPercentage = attempt.percentage;
    }

    this.setItem(STORAGE_KEYS.CATEGORY_STATS, stats);
    return stats;
  },

  // Overall summary metrics
  getOverallStats() {
    const history = this.getHistory();
    const totalQuizzes = history.length;
    if (totalQuizzes === 0) {
      return {
        totalQuizzes: 0,
        totalQuestionsAnswered: 0,
        totalCorrect: 0,
        averageAccuracy: 0,
        highestScore: 0,
        highestPercentage: 0,
        totalTimeSpentSeconds: 0,
      };
    }

    let totalQuestions = 0;
    let totalCorrect = 0;
    let totalTime = 0;
    let highestScore = 0;
    let highestPercentage = 0;

    history.forEach((h) => {
      totalQuestions += h.totalQuestions || 0;
      totalCorrect += h.score || 0;
      totalTime += h.timeSpentSeconds || 0;
      if ((h.score || 0) > highestScore) highestScore = h.score;
      if ((h.percentage || 0) > highestPercentage) highestPercentage = h.percentage;
    });

    const averageAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

    return {
      totalQuizzes,
      totalQuestionsAnswered: totalQuestions,
      totalCorrect,
      averageAccuracy,
      highestScore,
      highestPercentage,
      totalTimeSpentSeconds: totalTime,
    };
  },

  // ===============================
  // Local Leaderboard
  // ===============================
  getLeaderboard() {
    const board = this.getItem(STORAGE_KEYS.LEADERBOARD, []);
    return Array.isArray(board) ? board : [];
  },

  updateLeaderboard(attempt) {
    const board = this.getLeaderboard();
    const entry = {
      id: attempt.id || "entry-" + Date.now(),
      dateFormatted: attempt.dateFormatted || new Date().toLocaleDateString(),
      categoryName: attempt.categoryName,
      difficulty: attempt.difficulty,
      score: attempt.score,
      totalQuestions: attempt.totalQuestions,
      percentage: attempt.percentage,
      timeSpentSeconds: attempt.timeSpentSeconds,
    };

    board.push(entry);

    // Sort by percentage descending, then score descending, then time ascending (faster is better)
    board.sort((a, b) => {
      if (b.percentage !== a.percentage) return b.percentage - a.percentage;
      if (b.score !== a.score) return b.score - a.score;
      return a.timeSpentSeconds - b.timeSpentSeconds;
    });

    // Keep top 15 entries
    const topBoard = board.slice(0, 15);
    this.setItem(STORAGE_KEYS.LEADERBOARD, topBoard);
    return topBoard;
  },

  // ===============================
  // Daily Challenge & Streak
  // ===============================
  getTodayDateString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  },

  getDailyChallengeRecord(dateString = this.getTodayDateString()) {
    const records = this.getItem(STORAGE_KEYS.DAILY_CHALLENGE, {});
    return records[dateString] || null;
  },

  recordDailyCompletion(attempt) {
    const dateStr = this.getTodayDateString();
    const records = this.getItem(STORAGE_KEYS.DAILY_CHALLENGE, {});

    records[dateStr] = {
      completed: true,
      timestamp: Date.now(),
      score: attempt.score,
      total: attempt.totalQuestions,
      percentage: attempt.percentage,
      timeSpentSeconds: attempt.timeSpentSeconds,
    };

    this.setItem(STORAGE_KEYS.DAILY_CHALLENGE, records);
    this.incrementStreak(dateStr);
    return records[dateStr];
  },

  getStreak() {
    const streakData = this.getItem(STORAGE_KEYS.STREAK, { currentStreak: 0, lastDate: null, maxStreak: 0 });
    return streakData;
  },

  incrementStreak(todayStr = this.getTodayDateString()) {
    const streak = this.getStreak();
    if (!streak.lastDate) {
      streak.currentStreak = 1;
      streak.maxStreak = 1;
      streak.lastDate = todayStr;
    } else if (streak.lastDate === todayStr) {
      // Already played today, maintain streak
    } else {
      // Check if lastDate was yesterday
      const last = new Date(streak.lastDate);
      const today = new Date(todayStr);
      const diffDays = Math.round((today - last) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        streak.currentStreak += 1;
      } else {
        streak.currentStreak = 1; // broken streak
      }

      if (streak.currentStreak > streak.maxStreak) {
        streak.maxStreak = streak.currentStreak;
      }
      streak.lastDate = todayStr;
    }

    this.setItem(STORAGE_KEYS.STREAK, streak);
    return streak;
  },

  // Clear all data (with user confirmation in UI)
  clearAllData() {
    if (!this.isAvailable()) return;
    Object.values(STORAGE_KEYS).forEach((key) => {
      window.localStorage.removeItem(key);
    });
  },
};

window.StorageManager = StorageManager;

