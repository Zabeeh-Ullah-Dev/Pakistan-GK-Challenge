/**
 * Pakistan GK Challenge - Interactive Quiz State Engine
 * Manages quiz configuration, question shuffling, timer loops, answer tracking,
 * question navigation, flagging, score calculation, and missed questions retry.
 */

class QuizEngine {
  constructor() {
    this.reset();
  }

  reset() {
    this.config = {
      category: "all",
      categoryName: "Mixed General Knowledge",
      difficulty: "all",
      questionCount: 10,
      timerEnabled: true,
      timePerQuestion: 30, // seconds
      instantFeedback: false, // study mode vs exam mode
      isDailyChallenge: false,
    };

    this.questions = [];
    this.currentIndex = 0;
    this.userAnswers = {}; // map: questionIndex -> selectedOptionIndex (or null)
    this.flagged = new Set(); // set of question indices flagged for review
    this.instantChecked = new Set(); // questions that had answer checked in instant feedback mode

    this.startTime = null;
    this.endTime = null;
    this.totalTimeSpent = 0;

    // Timer variables
    this.timerInterval = null;
    this.secondsRemaining = 0;
    this.onTimerTick = null;
    this.onTimerExpired = null;

    this.isCompleted = false;
  }

  /**
   * Initializes and starts a new quiz with the given options
   */
  startQuiz(options = {}) {
    this.reset();
    this.config = { ...this.config, ...options };

    // Select questions based on configuration
    if (this.config.isDailyChallenge) {
      this.questions = window.QuestionBank.getDailyChallengeQuestions();
      this.config.categoryName = "Daily National Challenge";
      this.config.questionCount = this.questions.length;
    } else {
      let pool = window.QuestionBank.getByCategory(this.config.category);
      if (this.config.difficulty !== "all") {
        pool = window.QuestionBank.getByDifficulty(this.config.difficulty, pool);
      }

      // If category has fewer questions than requested count, take all available
      const count = Math.min(this.config.questionCount, pool.length);

      // Fisher-Yates shuffle to randomize questions
      const shuffled = [...pool];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      this.questions = shuffled.slice(0, count);

      if (this.config.category !== "all") {
        const cat = window.QuestionBank.getCategoryById(this.config.category);
        this.config.categoryName = cat ? cat.name : "Quiz";
      } else {
        this.config.categoryName = "Mixed General Knowledge";
      }
    }

    // Safety fallback if question bank returns empty
    if (this.questions.length === 0) {
      this.questions = window.QuestionBank.getAll().slice(0, 10);
    }

    this.currentIndex = 0;
    this.startTime = Date.now();
    this.isCompleted = false;

    this.startQuestionTimer();
    return this.getCurrentQuestion();
  }

  /**
   * Starts a retry quiz containing only the questions missed or unanswered in the previous session
   */
  startRetryMissed(missedQuestionList, previousConfig = {}) {
    this.reset();
    this.config = {
      ...this.config,
      ...previousConfig,
      categoryName: `${previousConfig.categoryName || "Quiz"} (Review Retry)`,
      isDailyChallenge: false,
    };

    this.questions = [...missedQuestionList];
    this.currentIndex = 0;
    this.startTime = Date.now();
    this.isCompleted = false;

    this.startQuestionTimer();
    return this.getCurrentQuestion();
  }

  getCurrentQuestion() {
    if (!this.questions || this.questions.length === 0) return null;
    return this.questions[this.currentIndex];
  }

  getCurrentIndex() {
    return this.currentIndex;
  }

  getTotalQuestions() {
    return this.questions.length;
  }

  // Answer Selection
  selectAnswer(optionIndex) {
    if (this.isCompleted) return;
    this.userAnswers[this.currentIndex] = optionIndex;
    if (this.config.instantFeedback) {
      this.instantChecked.add(this.currentIndex);
    }
  }

  getUserAnswer(index = this.currentIndex) {
    return this.userAnswers[index] !== undefined ? this.userAnswers[index] : null;
  }

  // Flag toggle
  toggleFlag(index = this.currentIndex) {
    if (this.flagged.has(index)) {
      this.flagged.delete(index);
      return false;
    } else {
      this.flagged.add(index);
      return true;
    }
  }

  isFlagged(index = this.currentIndex) {
    return this.flagged.has(index);
  }

  // Navigation
  goToQuestion(index) {
    if (index >= 0 && index < this.questions.length) {
      this.currentIndex = index;
      this.startQuestionTimer();
      return this.getCurrentQuestion();
    }
    return null;
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      return this.goToQuestion(this.currentIndex + 1);
    }
    return null;
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      return this.goToQuestion(this.currentIndex - 1);
    }
    return null;
  }

  // Timer Handlers
  startQuestionTimer() {
    this.stopTimer();

    if (!this.config.timerEnabled) return;

    this.secondsRemaining = this.config.timePerQuestion || 30;

    if (typeof this.onTimerTick === "function") {
      this.onTimerTick(this.secondsRemaining, this.config.timePerQuestion);
    }

    this.timerInterval = setInterval(() => {
      this.secondsRemaining -= 1;

      if (typeof this.onTimerTick === "function") {
        this.onTimerTick(this.secondsRemaining, this.config.timePerQuestion);
      }

      if (this.secondsRemaining <= 0) {
        this.stopTimer();
        if (typeof this.onTimerExpired === "function") {
          this.onTimerExpired(this.currentIndex);
        }
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  // Submission & Scoring
  submitQuiz() {
    this.stopTimer();
    this.endTime = Date.now();
    this.isCompleted = true;
    this.totalTimeSpent = Math.max(1, Math.round((this.endTime - this.startTime) / 1000));

    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;
    const missedQuestions = [];

    const detailedReview = this.questions.map((q, idx) => {
      const selected = this.getUserAnswer(idx);
      const isAnswered = selected !== null;
      const isCorrect = isAnswered && selected === q.correctIndex;

      if (!isAnswered) {
        unansweredCount += 1;
        missedQuestions.push(q);
      } else if (isCorrect) {
        correctCount += 1;
      } else {
        incorrectCount += 1;
        missedQuestions.push(q);
      }

      return {
        questionNumber: idx + 1,
        question: q.question,
        category: q.category,
        categoryName: q.categoryName,
        difficulty: q.difficulty,
        options: q.options,
        correctIndex: q.correctIndex,
        selectedIndex: selected,
        isAnswered,
        isCorrect,
        explanation: q.explanation,
        flagged: this.isFlagged(idx),
      };
    });

    const total = this.questions.length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    // Performance title & feedback assessment
    const assessment = this.getPerformanceAssessment(percentage);

    const result = {
      id: "quiz-" + Date.now(),
      timestamp: this.endTime,
      dateFormatted: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      category: this.config.category,
      categoryName: this.config.categoryName,
      difficulty: this.config.difficulty,
      score: correctCount,
      incorrectCount,
      unansweredCount,
      totalQuestions: total,
      percentage,
      timeSpentSeconds: this.totalTimeSpent,
      isDailyChallenge: this.config.isDailyChallenge,
      assessment,
      detailedReview,
      missedQuestions,
    };

    // Automatically record to storage
    window.StorageManager.saveQuizAttempt(result);

    return result;
  }

  getPerformanceAssessment(percentage) {
    if (percentage === 100) {
      return {
        rank: "National Scholar & Historian",
        badge: "crest-gold",
        message: "Remarkable! You have mastered Pakistan's national heritage, geography, and history with flawless precision.",
      };
    } else if (percentage >= 85) {
      return {
        rank: "Karakoram Vanguard",
        badge: "crest-emerald",
        message: "Outstanding performance! Your deep knowledge of Pakistan shines across diverse domains.",
      };
    } else if (percentage >= 70) {
      return {
        rank: "Heritage Explorer",
        badge: "crest-bronze",
        message: "Great effort! You possess a very solid foundation in Pakistani civic and cultural knowledge.",
      };
    } else if (percentage >= 50) {
      return {
        rank: "Knowledge Seeker",
        badge: "crest-silver",
        message: "A commendable start. Review the detailed explanations below to refine your national insights.",
      };
    } else {
      return {
        rank: "Heritage Apprentice",
        badge: "crest-iron",
        message: "Every expert begins with curiosity. Check the missed questions review and test your skills again!",
      };
    }
  }

  // Status breakdown for navigator matrix
  getQuestionStatuses() {
    return this.questions.map((_, idx) => {
      const isAnswered = this.userAnswers[idx] !== undefined;
      const isFlagged = this.flagged.has(idx);
      const isCurrent = idx === this.currentIndex;
      return {
        index: idx,
        number: idx + 1,
        isAnswered,
        isFlagged,
        isCurrent,
      };
    });
  }

  getAnsweredCount() {
    return Object.keys(this.userAnswers).length;
  }
}

window.QuizEngine = QuizEngine;

