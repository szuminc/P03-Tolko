# Workout PWA — Execution Plan

## Phases overview

| Phase | Focus | Output | Status |
|---|---|---|---|
| 1 | Project setup | Repo scaffold, PWA shell, manifest | ✅ Done |
| 2 | Movement library | Data + CSS animations | ✅ Done |
| 3 | Routine builder | UI to create and save routines | ✅ Done |
| 4 | Workout player | Timer, progression, audio cues | ✅ Done |
| 5 | Milestones & themes | Achievement system + CSS theme unlocks | ✅ Done |
| 6 | Daily quote | Quote display on home screen | ✅ Done |
| 7 | PWA hardening | Service worker, offline, install prompt | ✅ Done |
| 8 | Polish & testing | iOS testing, UX, performance | ✅ Done |

---

## Phase 1 — Project setup ✅

**Goal:** Running PWA shell installable on iPhone via Safari.

Tasks:
- [x] Create GitHub repo
- [x] Scaffold file structure (`index.html`, `style.css`, `app.js`, `manifest.json`, `sw.js`)
- [x] Set up `manifest.json` with name, icons, display mode, theme colour
- [x] Register a basic service worker (cache shell on install)
- [x] Verify "Add to Home Screen" works in Safari iOS
- [x] Set up CSS custom properties for theming (colours, fonts, spacing)
- [x] Build app shell layout: header, main content area, bottom nav

---

## Phase 2 — Movement library ✅

**Goal:** A data-driven set of movements with looping CSS animations.

Tasks:
- [x] Define movement data structure in `data/movements.js`
- [x] Add initial movement set: Abs, Four-point rotation, Hip flexor, Plank hold, Glute Bridge, Bird Dog, Dead Bug, Cat-Cow
- [x] Write CSS keyframe animation for each movement in `animations/movements.css`
- [x] Build a movement library screen listing all movements
- [x] Tapping a movement shows its detail view (name, description, animation, default settings)

---

## Phase 3 — Routine builder ✅

**Goal:** Users can build, name, save, and manage routines.

Tasks:
- [x] Build routine list screen (home, shows saved routines)
- [x] Build "create routine" flow:
  - [x] Name the routine
  - [x] Browse and select movements from the library
  - [x] Set duration (seconds) and reps per movement
  - [x] Reorder movements (up/down buttons)
  - [x] Remove movements
- [x] Save routine to `localStorage`
- [x] Edit and delete existing routines
- [x] Validate: routine must have at least one movement before saving

---

## Phase 4 — Workout player ✅

**Goal:** A focused workout mode that guides the user through a routine.

Tasks:
- [x] Build workout player screen
- [x] Show current movement name and animation
- [x] Implement timestamp-based countdown timer (iOS-accurate, 250ms interval)
- [x] Show rep count and overall progress (e.g. "Movement 2 of 5")
- [x] Auto-advance to next movement when timer reaches zero
- [x] Audio: countdown beep (last 3s), bell ding at end of each movement, fanfare at workout completion
- [x] Voice announcement at start of each movement: name, duration, and rep count (with natural pauses between phrases)
- [x] Pause / resume control
- [x] Skip movement control
- [x] Show completion screen when routine finishes
- [x] WakeLock API to prevent screen sleep during workout
- [x] Increment `totalWorkoutsCompleted` in `localStorage` on completion

---

## Phase 5 — Milestones & themes ✅

**Goal:** Celebrate workout counts with unlockable CSS colour themes.

Tasks:
- [x] Define 6 milestone thresholds: 1, 5, 10, 25, 50, 100 workouts
- [x] Each milestone unlocks a CSS accent theme: ember, ocean, forest, violet, rose, gold
- [x] Check for new milestone on every workout completion
- [x] Show milestone celebration overlay (icon, title, description, theme name)
- [x] Persist unlocked milestones and active theme in `localStorage`
- [x] Apply active theme via `data-theme` on `:root` using CSS custom properties
- [x] Build achievements screen showing locked and unlocked milestones
- [x] `backfillMilestones()` retroactively grants milestones on first load
- [x] Milestone icons: Minecraft-style pixel-art SVGs (arrow, flame, blocks, diamond, mountain, crown)

---

## Phase 6 — Daily quote ✅

**Goal:** A fresh motivational quote greets the user each day.

Tasks:
- [x] Write 66 curated quotes in `data/quotes.js`
- [x] Date-based quote selection (same quote all day, changes at midnight)
- [x] Display quote on the home/routine list screen
- [x] Fully offline — no external API

---

## Phase 7 — PWA hardening ✅

**Goal:** Reliable offline experience and smooth iOS installation.

Tasks:
- [x] Verify full offline functionality — cache-first SW covers all shell files; no network required after first load
- [x] Handle service worker updates gracefully — `controllerchange` listener shows "App updated — tap to reload" toast (user-controlled, won't interrupt workouts)
- [x] Fix manifest/meta `background_color` and `theme_color` (`#1a1a2e` → `#0b0b0b`) to match actual app bg; inline body style eliminates white flash on load
- [x] Prevent scroll bounce — `overscroll-behavior: none` added to `html` (was only on `body`)
- [x] SW cache bumped to v39
- [ ] Add explicit iOS splash screen images (deferred — auto-generated splash from icon + background_color is acceptable for v1)
- [ ] Test install and launch from iPhone home screen in Safari (manual, owner's device)

---

## Phase 8 — Polish & testing ✅

**Goal:** Smooth, enjoyable experience ready for daily use.

Tasks:
- [x] Accessibility: `--text-muted` #666 → #888 (contrast 3.5:1 → 5.1:1, passes AA)
- [x] Tap targets: `.btn-icon` 40px → 44px, `.btn-sm` 36px → 44px, `.overlay-action` 36px → 44px
- [x] Screen transition: subtle fade + 6px slide-up on `.screen.active` (0.18s)
- [x] Theme-aware glows: hardcoded `rgba(200,255,87,...)` → `color-mix(in srgb, var(--accent) …, transparent)` on FAB, completion check, milestone badge, achievement icon
- [x] Edge cases: empty routine list ✅ already handled; single-movement routine ✅ already handled
- [x] SW cache bumped v39 → v40
- [x] Test all flows on iPad/iPhone Safari — confirmed working
- [x] Audio verified on both iPad and iPhone
- [x] Deployed to GitHub Pages — https://szuminc.github.io/P03-Tolko/
- [x] Installed as PWA on iPhone from home screen — confirmed working
- [x] SW cache auto-bumped to git SHA on every deploy (no manual version tracking)
- [ ] Performance: 60fps animations, no timer jank (manual)
- [ ] Final UX review on device (manual)

---

## Key technical decisions

| Decision | Choice | Reason |
|---|---|---|
| Framework | None (vanilla JS) | Zero build tooling, easier PWA |
| Animations | CSS keyframes | Performant, no dependencies |
| Storage | `localStorage` | Simple, offline, no backend |
| Audio | Web Audio API | No external files, works offline |
| Voice | Web Speech API + Tessa voice | Native iOS, no dependency |
| Timer | `Date.now()` timestamp-based | Accurate on iOS (interval drift fix) |
| Routing | Hash-based (`#routines`, `#library`, `#achievements`) | No server needed |
| Theming | CSS custom properties + `data-theme` on `:root` | Clean, zero JS overhead |
| Safe area | `env(safe-area-inset-top)` on header + overlays | Clears iOS status bar |

---

## Changelog

### 2026-06-27 (continued — library expansion)
- Movement library expanded from 8 → 31 movements
  - Added 14 active movements: Push-Up, Squat, Side Plank, Superman, Cobra Stretch, Leg Raise, Mountain Climber, Seated Twist, Commando, Burpee, Caterpillar Walk, Jump Squat, High Knees, Jumping Jack
  - Added 4 warmup movements: Pecs Stretch, Lats Stretch, Fire Hydrant, Anterior Deltoid
  - Added 5 cooldown movements: Abs Stretch, Child's Pose, Downward Dog, Triceps Stretch, Glutes Stretch
  - Cat-Cow re-tagged as warmup
- Tag system implemented: movements carry `tags: ['warmup']` or `tags: ['cooldown']`
  - Orange pill badge for warmup, blue pill for cooldown
  - Tags render in library list, movement detail overlay, and routine builder picker
- All SVG figures follow established style: filled accent head, thick strokes, joint dots, ground plane
- Active/cardio movements use fast animation cycles (0.65–0.9s); stretches use slow cycles (3–4s)
- New app icon designed and generated: bold lime stick figure in star/victory pose on dark background
  - `doc/gen_icons.py` generates `icons/icon-192.png` and `icons/icon-512.png` via Pillow
  - `doc/generate-icons.html` provides browser-based generator as fallback
- SW cache bumped v47 → v48

### 2026-06-27
- Deployed to GitHub Pages: https://szuminc.github.io/P03-Tolko/
- Repo made public to enable free GitHub Pages hosting
- GitHub Actions workflow deploys P03-Tolko-Workout-PWA/ to gh-pages branch on every push to main
- SW cache auto-bumped to git commit SHA in workflow — no manual version tracking needed
- All PWA paths changed from absolute (/sw.js) to relative (./sw.js) for subpath hosting compatibility
- PWA installed on iPhone from home screen — confirmed working offline-capable on HTTPS

### 2026-06-26 (continued — audio fix)
- iPhone audio broken: AudioContext silently failed on iPhone while working on iPad
- Replaced entire audio system with programmatically generated WAV data URIs played via Audio elements
- Sounds pre-unlocked in startRoutine user gesture via play()+pause() pattern
- Beeps, ding, and fanfare all confirmed working on iPhone and iPad
- SW cache bumped to v44

### 2026-06-26 (continued)
- Phase 8 complete: Polish & testing
  - `--text-muted` #666 → #888 (AA contrast compliance)
  - Tap targets raised to 44px minimum (btn-icon, btn-sm, overlay-action)
  - Screen transition: 0.18s fade + 6px slide-up on active screen
  - All hardcoded rgba(200,255,87,...) glow shadows replaced with color-mix(var(--accent)) — themes now glow in their own color
  - SW cache bumped v39 → v40

### 2026-06-26
- Phase 7 complete: PWA hardening
  - SW update toast: `controllerchange` listener → "App updated — tap to reload" pill (user-controlled)
  - Fixed `background_color` / `theme_color` in manifest and meta tag (`#1a1a2e` → `#0b0b0b`)
  - Inline body background in `<head>` eliminates white flash on load
  - `overscroll-behavior: none` added to `html` element (was body-only)
  - SW cache bumped: v38 → v39

### 2026-06-25
- Milestone icons replaced with Minecraft-style pixel-art SVGs (`rect`-only, no curves)
  - First Step: upward pixel arrow
  - Getting Warm: pixel flame
  - Building Habit: 2×2 pixel blocks
  - Committed: pixel diamond
  - Dedicated: pixel mountain
  - Elite: pixel crown
- Voice now announces movement name, duration, and rep count at start of each movement
  - Example: "Hip Flexor. 30 seconds. 2 reps"
  - Each phrase is a separate utterance with 350ms pause between them for natural delivery
- SW cache bumped: v35 → v36 → v37 → v38

### Prior sessions
- Full visual redesign: dark athletic palette (electric lime `#c8ff57` on near-black `#0b0b0b`)
- iOS safe area fix: header and all overlays now clear the status bar
- Phase 6 complete: 66 daily quotes, date-based rotation
- Phase 5 complete: 6 milestones, CSS theme unlocks, celebration overlay, achievements screen
- Phase 4 complete: workout player with timer, audio, voice, WakeLock
- Phases 1–3 complete: PWA shell, movement library, routine builder
