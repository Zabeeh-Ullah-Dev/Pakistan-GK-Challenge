/**
 * Pakistan GK Challenge - Procedural Web Audio Sound Engine
 * Synthesizes crisp, responsive UI audio cues using Web Audio API.
 * Eliminates external MP3/WAV dependencies, preventing network latency or CORS blocks.
 */

const SoundEngine = {
  ctx: null,
  enabled: true,

  init() {
    // Lazily initialize AudioContext on user interaction to abide by browser autoplay policies
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  },

  setEnabled(bool) {
    this.enabled = Boolean(bool);
  },

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      // Audio failed silently
    }
  },

  playSelect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, this.ctx.currentTime + 0.06); // E5

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {
      // Audio failed silently
    }
  },

  playCorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      // Two-tone bell harmonic (F#5 -> B5)
      const now = this.ctx.currentTime;
      [
        { freq: 587.33, start: now, dur: 0.12 },        // D5
        { freq: 880.00, start: now + 0.08, dur: 0.22 } // A5
      ].forEach((note) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(note.freq, note.start);

        gain.gain.setValueAtTime(0.15, note.start);
        gain.gain.exponentialRampToValueAtTime(0.001, note.start + note.dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(note.start);
        osc.stop(note.start + note.dur);
      });
    } catch (e) {
      // Audio failed silently
    }
  },

  playIncorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(130, now + 0.18);

      // Low pass filter to make it mellow, not harsh
      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(400, now);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.18);
    } catch (e) {
      // Audio failed silently
    }
  },

  playTimerTick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(950, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.03);
    } catch (e) {
      // Audio failed silently
    }
  },

  playFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Arpeggiated victory chord (C5 -> E5 -> G5 -> C6)
      const notes = [
        { freq: 523.25, time: now },
        { freq: 659.25, time: now + 0.1 },
        { freq: 783.99, time: now + 0.2 },
        { freq: 1046.5, time: now + 0.35, len: 0.4 }
      ];

      notes.forEach((n) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(n.freq, n.time);

        const dur = n.len || 0.2;
        gain.gain.setValueAtTime(0.18, n.time);
        gain.gain.exponentialRampToValueAtTime(0.001, n.time + dur);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(n.time);
        osc.stop(n.time + dur);
      });
    } catch (e) {
      // Audio failed silently
    }
  }
};

window.SoundEngine = SoundEngine;

