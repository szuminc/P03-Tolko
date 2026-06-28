// ── Service worker ────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .catch(err => console.warn('SW failed:', err));
  });
}

// ── Router ────────────────────────────────────────────────────────────────
const SCREENS = ['routines', 'library', 'achievements'];
const DEFAULT  = 'routines';

function getHash() { return location.hash.replace('#', '') || DEFAULT; }

function navigate(screen) {
  if (!SCREENS.includes(screen)) screen = DEFAULT;
  location.hash = screen;
}

function applyRoute() {
  const target = getHash();
  document.querySelectorAll('.screen').forEach(el =>
    el.classList.toggle('active', el.dataset.screen === target));
  document.querySelectorAll('.nav-item').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.nav === target));
  const titleMap = { routines: 'Tolko', library: 'Movements', achievements: 'Achievements' };
  document.querySelector('#header h1').textContent = titleMap[target] || 'Tolko';

  // FAB only on routines screen
  document.getElementById('fab').classList.toggle('hidden', target !== 'routines');

  if (target === 'library')      renderLibrary();
  if (target === 'routines')     { renderDailyQuote(); renderRoutineList(); }
  if (target === 'achievements') renderAchievements();
}

function backfillMilestones() {
  const total = loadProgress().totalWorkoutsCompleted || 0;
  if (!total) return;
  const data = loadMilestoneData();
  let changed = false;
  for (const m of MILESTONES) {
    if (total >= m.count && !data[m.id]) {
      data[m.id] = true;
      data.activeTheme = m.theme;
      changed = true;
    }
  }
  if (changed) saveMilestoneData(data);
}

window.addEventListener('hashchange', applyRoute);
window.addEventListener('DOMContentLoaded', () => {
  seedDefaultRoutines();
  backfillMilestones();
  const saved = loadMilestoneData().activeTheme;
  if (saved) applyTheme(saved);

  document.querySelectorAll('.nav-item').forEach(btn =>
    btn.addEventListener('click', () => navigate(btn.dataset.nav)));
  applyRoute();
});

// ── Movement library ──────────────────────────────────────────────────────
function renderLibrary() {
  const container = document.getElementById('library-list');
  if (!container || container.dataset.rendered) return;
  container.dataset.rendered = '1';
  movements.forEach(m => {
    const card = document.createElement('div');
    card.className = 'movement-card';
    const tagHtml = (m.tags || []).map(t => `<span class="movement-tag ${t}">${t.charAt(0).toUpperCase() + t.slice(1)}</span>`).join('');
    card.innerHTML = `
      <div class="movement-anim-wrap">${m.svg}</div>
      <div class="movement-card-info">
        <p class="movement-card-name">${m.name}</p>
        ${tagHtml ? `<div class="movement-card-tags">${tagHtml}</div>` : ''}
        <p class="movement-card-meta">${m.defaultDuration}s · ${m.defaultReps} set${m.defaultReps > 1 ? 's' : ''}</p>
      </div>
      <svg class="movement-card-chevron" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
    `;
    card.addEventListener('click', () => showMovementDetail(m));
    container.appendChild(card);
  });
}

function showMovementDetail(m) {
  const overlay = document.getElementById('movement-detail');
  overlay.querySelector('.detail-title').textContent = m.name;
  overlay.querySelector('.detail-desc').textContent = m.description;
  overlay.querySelector('.detail-anim').innerHTML = m.svg;
  overlay.querySelector('.detail-meta').textContent =
    `Default: ${m.defaultDuration}s · ${m.defaultReps} set${m.defaultReps > 1 ? 's' : ''}`;
  const tagsEl = overlay.querySelector('.detail-tags');
  if (tagsEl) tagsEl.innerHTML = (m.tags || []).map(t => `<span class="movement-tag ${t}">${t.charAt(0).toUpperCase() + t.slice(1)}</span>`).join('');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMovementDetail() {
  document.getElementById('movement-detail').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Default routines ──────────────────────────────────────────────────────
const DEFAULT_ROUTINES = [
  {
    id: 'default-core',
    name: 'Core Foundation',
    createdAt: '2026-06-27T00:00:00Z',
    movements: [
      { movementId: 'cat-cow',            duration: 30, reps: 2 },
      { movementId: 'pecs-stretch',       duration: 30, reps: 2 },
      { movementId: 'lats-stretch',       duration: 30, reps: 2 },
      { movementId: 'dead-bug',           duration: 30, reps: 3 },
      { movementId: 'bird-dog',           duration: 20, reps: 3 },
      { movementId: 'abs',                duration: 30, reps: 3 },
      { movementId: 'leg-raise',          duration: 30, reps: 3 },
      { movementId: 'plank-hold',         duration: 30, reps: 3 },
      { movementId: 'seated-twist',       duration: 30, reps: 2 },
      { movementId: 'abs-stretch',        duration: 30, reps: 2 },
      { movementId: 'child-pose',         duration: 40, reps: 1 },
      { movementId: 'downward-dog',       duration: 40, reps: 1 },
    ]
  },
  {
    id: 'default-glute',
    name: 'Glute & Posterior Chain',
    createdAt: '2026-06-27T00:00:00Z',
    movements: [
      { movementId: 'fire-hydrant',       duration: 30, reps: 3 },
      { movementId: 'cat-cow',            duration: 30, reps: 2 },
      { movementId: 'glute-bridge',       duration: 30, reps: 3 },
      { movementId: 'bird-dog',           duration: 20, reps: 3 },
      { movementId: 'superman',           duration: 30, reps: 3 },
      { movementId: 'side-plank',         duration: 30, reps: 3 },
      { movementId: 'hip-flexor',         duration: 30, reps: 3 },
      { movementId: 'squat',              duration: 30, reps: 3 },
      { movementId: 'glutes-stretch',     duration: 40, reps: 2 },
      { movementId: 'child-pose',         duration: 40, reps: 1 },
      { movementId: 'downward-dog',       duration: 40, reps: 1 },
    ]
  },
  {
    id: 'default-cardio',
    name: 'Cardio Burn',
    createdAt: '2026-06-27T00:00:00Z',
    movements: [
      { movementId: 'jumping-jack',       duration: 30, reps: 2 },
      { movementId: 'caterpillar-walk',   duration: 30, reps: 2 },
      { movementId: 'burpee',             duration: 30, reps: 3 },
      { movementId: 'jump-squat',         duration: 20, reps: 3 },
      { movementId: 'mountain-climber',   duration: 30, reps: 3 },
      { movementId: 'high-knees',         duration: 30, reps: 3 },
      { movementId: 'commando',           duration: 30, reps: 3 },
      { movementId: 'push-up',            duration: 30, reps: 3 },
      { movementId: 'downward-dog',       duration: 40, reps: 1 },
      { movementId: 'child-pose',         duration: 40, reps: 1 },
      { movementId: 'abs-stretch',        duration: 30, reps: 2 },
      { movementId: 'triceps-stretch',    duration: 30, reps: 2 },
    ]
  }
];

function seedDefaultRoutines() {
  if (localStorage.getItem('tolko-routines') !== null) return;
  persistRoutines(DEFAULT_ROUTINES);
}

// ── Storage helpers ───────────────────────────────────────────────────────
function loadRoutines() {
  try { return JSON.parse(localStorage.getItem('tolko-routines') || '[]'); }
  catch { return []; }
}

function persistRoutines(list) {
  localStorage.setItem('tolko-routines', JSON.stringify(list));
}

function generateId() {
  return 'r-' + Date.now() + '-' + Math.random().toString(36).slice(2, 6);
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── Daily quote ───────────────────────────────────────────────────────────
function getDailyQuote() {
  if (!quotes || !quotes.length) return '';
  const day = Math.floor(Date.now() / 86400000);
  return quotes[day % quotes.length];
}

function renderDailyQuote() {
  const el = document.getElementById('daily-quote-card');
  if (!el) return;
  const q = getDailyQuote();
  el.innerHTML = q ? `<p class="daily-quote-text">"${escHtml(q)}"</p>` : '';
}

// ── Routine list ──────────────────────────────────────────────────────────
function renderRoutineList() {
  const container = document.getElementById('routine-list');
  if (!container) return;
  const routines = loadRoutines();

  if (!routines.length) {
    container.innerHTML = `
      <div class="empty-state">
        <p class="empty-state-text">No routines yet.</p>
        <p class="empty-state-sub">Tap + to create your first one.</p>
      </div>`;
    return;
  }

  container.innerHTML = routines.map(r => `
    <div class="routine-card">
      <div class="routine-card-info">
        <p class="routine-card-name">${escHtml(r.name)}</p>
        <p class="routine-card-meta">${r.movements.length} movement${r.movements.length !== 1 ? 's' : ''}</p>
      </div>
      <div class="routine-card-actions">
        <button class="btn-icon" onclick="openRoutineBuilder('${r.id}')" aria-label="Edit">
          <svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="btn-icon btn-icon-danger" onclick="confirmDeleteRoutine('${r.id}')" aria-label="Delete">
          <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
        </button>
        <button class="btn btn-primary btn-sm" onclick="startRoutine('${r.id}')">Start</button>
      </div>
    </div>
  `).join('');
}

function confirmDeleteRoutine(id) {
  if (!confirm('Delete this routine?')) return;
  persistRoutines(loadRoutines().filter(r => r.id !== id));
  renderRoutineList();
}

// ── Milestones ────────────────────────────────────────────────────────────
const MILESTONES = [
  { count: 1,   id: 'first',   label: 'First Step',     desc: 'You showed up. That\'s everything.',   theme: 'ember',
    // pixel arrow up
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="0" width="6" height="3"/><rect x="6" y="3" width="12" height="3"/><rect x="3" y="6" width="3" height="3"/><rect x="15" y="6" width="3" height="3"/><rect x="9" y="6" width="6" height="15"/></svg>` },
  { count: 5,   id: 'five',    label: 'Getting Warm',   desc: 'Five workouts. The habit is forming.',  theme: 'ocean',
    // pixel flame
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="0" width="6" height="3"/><rect x="6" y="3" width="12" height="3"/><rect x="3" y="6" width="18" height="6"/><rect x="6" y="12" width="12" height="6"/><rect x="9" y="18" width="6" height="3"/></svg>` },
  { count: 10,  id: 'ten',     label: 'Building Habit', desc: 'Ten down. Consistency wins.',           theme: 'forest',
    // four pixel blocks (2x2 grid)
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="8" height="8"/><rect x="14" y="2" width="8" height="8"/><rect x="2" y="14" width="8" height="8"/><rect x="14" y="14" width="8" height="8"/></svg>` },
  { count: 25,  id: 'twenty5', label: 'Committed',      desc: 'Twenty-five. No excuses.',              theme: 'violet',
    // pixel diamond
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="0" width="6" height="3"/><rect x="6" y="3" width="12" height="3"/><rect x="3" y="6" width="18" height="3"/><rect x="0" y="9" width="24" height="3"/><rect x="3" y="12" width="18" height="3"/><rect x="6" y="15" width="12" height="3"/><rect x="9" y="18" width="6" height="3"/></svg>` },
  { count: 50,  id: 'fifty',   label: 'Dedicated',      desc: 'Fifty workouts. Pure discipline.',      theme: 'rose',
    // pixel mountain
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="9" y="3" width="6" height="3"/><rect x="6" y="6" width="12" height="3"/><rect x="3" y="9" width="18" height="3"/><rect x="0" y="12" width="24" height="9"/></svg>` },
  { count: 100, id: 'hundred', label: 'Elite',           desc: 'One hundred. You\'re legendary.',      theme: 'gold',
    // pixel crown
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="0" y="3" width="4" height="9"/><rect x="10" y="3" width="4" height="9"/><rect x="20" y="3" width="4" height="9"/><rect x="0" y="12" width="24" height="9"/></svg>` },
];

function loadMilestoneData() {
  try { return JSON.parse(localStorage.getItem('tolko-milestones') || '{}'); } catch { return {}; }
}
function saveMilestoneData(data) {
  localStorage.setItem('tolko-milestones', JSON.stringify(data));
}

function applyTheme(theme) {
  if (theme) document.documentElement.setAttribute('data-theme', theme);
  else        document.documentElement.removeAttribute('data-theme');
}

function checkMilestones(totalCount) {
  const data = loadMilestoneData();
  for (const m of MILESTONES) {
    if (totalCount >= m.count && !data[m.id]) {
      data[m.id] = true;
      data.activeTheme = m.theme;
      saveMilestoneData(data);
      applyTheme(m.theme);
      return m;
    }
  }
  return null;
}

function showMilestone(m) {
  document.getElementById('milestone-emoji').innerHTML = m.icon;
  document.getElementById('milestone-title').textContent = m.label;
  document.getElementById('milestone-desc').textContent  = m.desc;
  document.getElementById('milestone-theme').textContent = m.theme + ' theme unlocked';
  document.getElementById('milestone-overlay').classList.add('show');
}

function closeMilestone() {
  document.getElementById('milestone-overlay').classList.remove('show');
}

function renderAchievements() {
  const container = document.getElementById('achievements-list');
  if (!container) return;
  const data      = loadMilestoneData();
  const progress  = loadProgress();
  const total     = progress.totalWorkoutsCompleted || 0;

  container.innerHTML = MILESTONES.map(m => {
    const unlocked = !!data[m.id];
    const next     = !unlocked ? `${total} / ${m.count} workouts` : 'Unlocked';
    return `
      <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
        <div class="achievement-icon">${m.icon}</div>
        <div class="achievement-info">
          <p class="achievement-name">${m.label}</p>
          <p class="achievement-desc">${m.desc}</p>
          <p class="achievement-progress">${next}</p>
        </div>
      </div>`;
  }).join('');
}

// ── Voice ─────────────────────────────────────────────────────────────────

// ── Workout player ────────────────────────────────────────────────────────
const CIRC = 2 * Math.PI * 50; // timer ring circumference

let player    = null;
let wakeLock  = null;
let sounds    = null;

function loadProgress() {
  try { return JSON.parse(localStorage.getItem('tolko-progress') || '{}'); }
  catch { return {}; }
}

async function startRoutine(id) {
  const routine = loadRoutines().find(r => r.id === id);
  if (!routine || !routine.movements.length) return;

  player = {
    routine,
    movIndex:    0,
    repIndex:    0,
    setDuration: 0,
    setStart:    0,
    intervalId:  null,
    paused:      false,
    pausedAt:    0
  };

  document.getElementById('player-view').style.display = 'flex';
  document.getElementById('player-view').style.flexDirection = 'column';
  document.getElementById('complete-view').classList.remove('show');
  document.getElementById('workout-player').classList.add('open');
  document.body.style.overflow = 'hidden';

  if ('speechSynthesis' in window) {
    const unlock = new SpeechSynthesisUtterance(' ');
    unlock.volume = 0;
    window.speechSynthesis.speak(unlock);
  }

  await unlockSounds();

  if ('wakeLock' in navigator) {
    try { wakeLock = await navigator.wakeLock.request('screen'); } catch (_) {}
  }

  startSet();
}

function startSet() {
  if (!player) return;
  const item = player.routine.movements[player.movIndex];
  const m    = movements.find(mv => mv.id === item.movementId);

  player.setDuration        = item.duration;
  player.setStart           = Date.now();
  player.paused             = false;
  player.lastCountdownBeep  = -1;

  // Announce name + duration + reps at the start of each new movement
  if (player.repIndex === 0 && m) {
    const repText = item.reps > 1 ? `${item.reps} reps` : '1 rep';
    announceMovement(`${m.name}. ${item.duration} seconds. ${repText}`);
  }

  // update UI
  const total = player.routine.movements.length;
  document.getElementById('player-progress-text').textContent =
    `Movement ${player.movIndex + 1} of ${total}`;
  document.getElementById('player-movement-name').textContent = m ? m.name : '';
  document.getElementById('player-rep-text').textContent =
    `Rep ${player.repIndex + 1} of ${item.reps}`;
  document.getElementById('player-anim').innerHTML = m ? m.svg : '';
  document.getElementById('pause-btn').textContent = 'Pause';
  updateTimerDisplay(item.duration);

  clearInterval(player.intervalId);
  player.intervalId = setInterval(tick, 250);
}

function tick() {
  if (!player || player.paused) return;
  const elapsed   = (Date.now() - player.setStart) / 1000;
  const remaining = Math.max(0, player.setDuration - elapsed);
  updateTimerDisplay(remaining);

  // Countdown beeps for last 5 seconds
  const secsLeft = Math.ceil(remaining);
  if (remaining > 0 && secsLeft <= 5 && secsLeft !== player.lastCountdownBeep) {
    player.lastCountdownBeep = secsLeft;
    playCountdownBeep();
  }

  if (remaining <= 0) {
    clearInterval(player.intervalId);
    advanceSet();
  }
}

function advanceSet() {
  if (!player) return;
  const item = player.routine.movements[player.movIndex];

  if (player.repIndex < item.reps - 1) {
    // More reps left in this movement
    playSetEndBeep();
    player.repIndex++;
    startSet();
    return;
  }

  if (player.movIndex < player.routine.movements.length - 1) {
    // Movement fully done, more movements ahead
    playMovementEndDing();
    player.movIndex++;
    player.repIndex = 0;
    startSet();
    return;
  }

  // All movements done
  completeWorkout();
}

function updateTimerDisplay(seconds) {
  const secs     = Math.ceil(seconds);
  const fraction = seconds / player.setDuration;
  const offset   = CIRC * (1 - fraction);
  document.getElementById('timer-digits').textContent = secs;
  document.getElementById('timer-ring').style.strokeDashoffset = offset;
}

function togglePause() {
  if (!player) return;
  if (player.paused) {
    // resume — shift setStart forward by paused duration
    player.setStart += Date.now() - player.pausedAt;
    player.paused = false;
    document.getElementById('pause-btn').textContent = 'Pause';
    player.intervalId = setInterval(tick, 250);
  } else {
    player.paused  = true;
    player.pausedAt = Date.now();
    clearInterval(player.intervalId);
    document.getElementById('pause-btn').textContent = 'Resume';
  }
}

function completeWorkout() {
  clearInterval(player?.intervalId);

  const progress = loadProgress();
  progress.totalWorkoutsCompleted = (progress.totalWorkoutsCompleted || 0) + 1;
  localStorage.setItem('tolko-progress', JSON.stringify(progress));

  document.getElementById('player-view').style.display    = 'none';
  document.getElementById('complete-view').classList.add('show');
  document.getElementById('complete-routine-name').textContent = player.routine.name;
  document.getElementById('complete-total').textContent =
    `Total workouts: ${progress.totalWorkoutsCompleted}`;
  playCompletionSound();

  const newMilestone = checkMilestones(progress.totalWorkoutsCompleted);
  if (newMilestone) setTimeout(() => showMilestone(newMilestone), 2000);
}

function stopWorkout() {
  clearInterval(player?.intervalId);
  player = null;
  if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; }
  sounds = null;
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  document.getElementById('workout-player').classList.remove('open');
  document.body.style.overflow = '';
}

function makePCMBeep(freq, dur, vol) {
  const sr = 22050, n = Math.round(sr * dur);
  const buf = new ArrayBuffer(44 + n * 2);
  const dv  = new DataView(buf);
  const str = (off, s) => [...s].forEach((c, i) => dv.setUint8(off + i, c.charCodeAt(0)));
  str(0,'RIFF'); dv.setUint32(4, 36 + n*2, true);
  str(8,'WAVE'); str(12,'fmt ');
  dv.setUint32(16,16,true); dv.setUint16(20,1,true); dv.setUint16(22,1,true);
  dv.setUint32(24,sr,true); dv.setUint32(28,sr*2,true);
  dv.setUint16(32,2,true); dv.setUint16(34,16,true);
  str(36,'data'); dv.setUint32(40, n*2, true);
  for (let i = 0; i < n; i++) {
    const env = Math.exp(-(i / n) * 7);
    dv.setInt16(44 + i*2, Math.round(Math.sin(2*Math.PI*freq*i/sr) * env * vol * 32767), true);
  }
  let s = ''; new Uint8Array(buf).forEach(b => s += String.fromCharCode(b));
  return 'data:audio/wav;base64,' + btoa(s);
}

async function unlockSounds() {
  sounds = {
    countdown: new Audio(makePCMBeep(1047, 0.12, 0.7)),
    repDone:   new Audio(makePCMBeep(880,  0.30, 0.7)),
    movDone:   new Audio(makePCMBeep(1047, 0.80, 0.7)),
    fan1:      new Audio(makePCMBeep(523,  0.18, 0.7)),
    fan2:      new Audio(makePCMBeep(659,  0.18, 0.7)),
    fan3:      new Audio(makePCMBeep(784,  0.18, 0.7)),
    fan4:      new Audio(makePCMBeep(1047, 1.00, 0.7)),
  };
  for (const a of Object.values(sounds)) {
    try { await a.play(); a.pause(); a.currentTime = 0; } catch (_) {}
  }
}

function playSound(a) {
  if (!a) return;
  a.currentTime = 0;
  a.play().catch(() => {});
}

function pickVoice() {
  const voices = window.speechSynthesis.getVoices();
  const preferred = ['Tessa', 'Karen', 'Moira'];
  for (const name of preferred) {
    const match = voices.find(v => v.name.includes(name));
    if (match) return match;
  }
  return voices.find(v => v.lang.startsWith('en')) || null;
}

function announceMovement(text) {
  if (!('speechSynthesis' in window) || !text) return;
  window.speechSynthesis.cancel();

  const parts = text.split('. ').filter(Boolean);
  let idx = 0;

  const speakNext = () => {
    if (idx >= parts.length) return;
    const u = new SpeechSynthesisUtterance(parts[idx]);
    u.rate   = 0.75;
    u.pitch  = 1.0;
    u.volume = 0.75;
    const voice = pickVoice();
    if (voice) u.voice = voice;
    u.onend = () => { idx++; if (idx < parts.length) setTimeout(speakNext, 350); };
    window.speechSynthesis.speak(u);
  };

  if (window.speechSynthesis.getVoices().length > 0) {
    speakNext();
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null;
      speakNext();
    };
  }
}

function playCountdownBeep()  { playSound(sounds?.countdown); }
function playSetEndBeep()     { playSound(sounds?.repDone); }
function playMovementEndDing(){ playSound(sounds?.movDone); }

async function playCompletionSound() {
  for (const a of [sounds?.fan1, sounds?.fan2, sounds?.fan3, sounds?.fan4]) {
    playSound(a);
    await new Promise(r => setTimeout(r, 180));
  }
}

function skipMovement() {
  if (!player) return;
  clearInterval(player.intervalId);
  if (player.movIndex < player.routine.movements.length - 1) {
    player.movIndex++;
    player.repIndex = 0;
    startSet();
  } else {
    completeWorkout();
  }
}

// ── Routine builder ───────────────────────────────────────────────────────
let draftRoutine = null;

function openRoutineBuilder(routineId) {
  const existing = routineId ? loadRoutines().find(r => r.id === routineId) : null;
  draftRoutine = existing
    ? JSON.parse(JSON.stringify(existing))
    : { id: null, name: '', movements: [] };

  document.getElementById('builder-title').textContent = existing ? 'Edit Routine' : 'New Routine';
  document.getElementById('routine-name-input').value = draftRoutine.name;
  renderBuilderMovements();
  document.getElementById('routine-builder').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeRoutineBuilder() {
  document.getElementById('routine-builder').classList.remove('open');
  document.body.style.overflow = '';
  draftRoutine = null;
}

function renderBuilderMovements() {
  const container = document.getElementById('builder-movements');
  if (!draftRoutine.movements.length) {
    container.innerHTML = `<p class="builder-empty">No movements added yet.</p>`;
    return;
  }
  container.innerHTML = draftRoutine.movements.map((item, i) => {
    const m = movements.find(mv => mv.id === item.movementId);
    if (!m) return '';
    const first = i === 0;
    const last  = i === draftRoutine.movements.length - 1;
    return `
      <div class="builder-row">
        <div class="builder-row-thumb">${m.svg}</div>
        <div class="builder-row-body">
          <p class="builder-row-name">${m.name}</p>
          <div class="builder-row-inputs">
            <label class="builder-input-label">
              <span>Secs</span>
              <input class="builder-input" type="number" min="5" max="600" step="5"
                     value="${item.duration}"
                     onchange="updateDraftMovement(${i},'duration',+this.value)" />
            </label>
            <label class="builder-input-label">
              <span>Reps</span>
              <input class="builder-input" type="number" min="1" max="20"
                     value="${item.reps}"
                     onchange="updateDraftMovement(${i},'reps',+this.value)" />
            </label>
          </div>
        </div>
        <div class="builder-row-controls">
          <button class="builder-ctrl" ${first ? 'disabled' : ''} onclick="moveDraftUp(${i})">↑</button>
          <button class="builder-ctrl" ${last  ? 'disabled' : ''} onclick="moveDraftDown(${i})">↓</button>
          <button class="builder-ctrl ctrl-remove" onclick="removeDraftMovement(${i})">✕</button>
        </div>
      </div>`;
  }).join('');
}

function updateDraftMovement(index, field, value) {
  if (draftRoutine) draftRoutine.movements[index][field] = value;
}

function moveDraftUp(index) {
  if (!draftRoutine || index === 0) return;
  const m = draftRoutine.movements;
  [m[index - 1], m[index]] = [m[index], m[index - 1]];
  renderBuilderMovements();
}

function moveDraftDown(index) {
  if (!draftRoutine) return;
  const m = draftRoutine.movements;
  if (index === m.length - 1) return;
  [m[index], m[index + 1]] = [m[index + 1], m[index]];
  renderBuilderMovements();
}

function removeDraftMovement(index) {
  if (draftRoutine) {
    draftRoutine.movements.splice(index, 1);
    renderBuilderMovements();
  }
}

function saveCurrentRoutine() {
  if (!draftRoutine) return;
  const name = document.getElementById('routine-name-input').value.trim() || 'Untitled Routine';
  draftRoutine.name = name;

  if (!draftRoutine.movements.length) {
    alert('Add at least one movement before saving.');
    return;
  }

  const routines = loadRoutines();
  if (draftRoutine.id) {
    const idx = routines.findIndex(r => r.id === draftRoutine.id);
    if (idx !== -1) routines[idx] = draftRoutine;
    else routines.push(draftRoutine);
  } else {
    draftRoutine.id = generateId();
    draftRoutine.createdAt = new Date().toISOString();
    routines.push(draftRoutine);
  }

  persistRoutines(routines);
  closeRoutineBuilder();
  renderRoutineList();
}

// ── Movement picker ───────────────────────────────────────────────────────
function openMovementPicker() {
  document.getElementById('picker-list').innerHTML = movements.map(m => `
    <div class="picker-item" onclick="addMovementToDraft('${m.id}')">
      <div class="picker-item-thumb">${m.svg}</div>
      <div class="picker-item-info">
        <p class="picker-item-name">${m.name}</p>
        ${(m.tags || []).length ? `<div class="movement-card-tags">${(m.tags || []).map(t => `<span class="movement-tag ${t}">${t.charAt(0).toUpperCase() + t.slice(1)}</span>`).join('')}</div>` : ''}
        <p class="picker-item-meta">${m.defaultDuration}s · ${m.defaultReps} set${m.defaultReps > 1 ? 's' : ''}</p>
      </div>
      <svg class="picker-add-icon" viewBox="0 0 24 24">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
    </div>
  `).join('');
  document.getElementById('movement-picker').classList.add('open');
}

function closeMovementPicker() {
  document.getElementById('movement-picker').classList.remove('open');
}

function addMovementToDraft(movementId) {
  const m = movements.find(mv => mv.id === movementId);
  if (!m || !draftRoutine) return;
  draftRoutine.movements.push({ movementId: m.id, duration: m.defaultDuration, reps: m.defaultReps });
  closeMovementPicker();
  renderBuilderMovements();
}
