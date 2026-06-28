# Workout PWA — Project Specification

## Overview

A lightweight, personal workout app installable on iPhone via Progressive Web App (PWA). The app lets users build custom workout routines from a library of movements, follow along with illustrated animations and a live timer, and stay motivated through daily quotes and milestone achievements.

No App Store account required. Built with standard web technologies and designed for use via Safari on iOS.

---

## Goals

- Simple, friction-free routine building
- Clean, distraction-free workout player
- Encouraging experience through visual feedback, milestones, and daily motivation
- Fully offline-capable after first load
- Installable to the iPhone home screen

---

## Features

### 1. Movement library

A curated set of movements available to add to any routine. Each movement has:

- A name (e.g. Abs, Four-point rotation, Hip flexor, Plank hold)
- A short description
- A simple looping CSS animation illustrating the movement
- Default duration (seconds) and rep count

The library is extensible — new movements can be added over time.

### 2. Routine builder

Users create named workout routines by:

- Selecting movements from the library
- Configuring duration (in seconds) and rep count for each movement
- Reordering or removing movements
- Saving the routine for future use

Multiple routines can be saved and managed.

### 3. Workout player

When a routine is started, the app enters workout mode:

- Displays the current movement name and illustration animation
- Announces movement name, duration, and rep count via device voice (Tessa / system TTS)
- Shows a countdown timer for the active set
- Plays audio cues: countdown beep (last 3s), bell ding on movement end, fanfare on workout completion
- Displays rep count and set progress
- Advances automatically through all movements in the routine
- WakeLock prevents screen sleep during workout

### 4. Milestone achievements

The app tracks cumulative workout completions and unlocks milestones at set thresholds (e.g. 10th, 30th, 50th, 100th workout). Each milestone:

- Shows a celebratory message
- Unlocks a new app background theme (colour scheme or pattern)
- Persists across sessions via LocalStorage

### 5. Daily inspiring quote

The home screen displays a fresh motivational quote each day. Quotes rotate daily and are drawn from a curated built-in list (no external API dependency, works offline).

---

## Technical Approach

| Concern | Approach |
|---|---|
| Platform | Progressive Web App (PWA) |
| Languages | HTML, CSS, vanilla JavaScript |
| Animations | CSS keyframe animations |
| Persistence | `localStorage` |
| Offline support | Service worker with cache-first strategy |
| Installability | Web App Manifest (`manifest.json`) |
| iOS support | Safari "Add to Home Screen" |

No build tools, frameworks, or backend required.

---

## Data Model

### Movement

```json
{
  "id": "plank-hold",
  "name": "Plank hold",
  "description": "Hold a straight-arm plank position, engaging core throughout.",
  "defaultDuration": 30,
  "defaultReps": 1,
  "animationClass": "anim-plank"
}
```

### Routine

```json
{
  "id": "routine-001",
  "name": "Morning core",
  "createdAt": "2024-06-01T08:00:00Z",
  "movements": [
    { "movementId": "abs", "duration": 30, "reps": 3 },
    { "movementId": "plank-hold", "duration": 45, "reps": 2 }
  ]
}
```

### User progress

```json
{
  "totalWorkoutsCompleted": 12,
  "unlockedMilestones": [10],
  "activeBackground": "default",
  "lastQuoteDate": "2024-06-01"
}
```

---

## Milestones & Themes

| Milestone | Trigger | Theme unlocked | Icon |
|---|---|---|---|
| First Step | 1st workout | Ember (orange) | Pixel arrow up |
| Getting Warm | 5th workout | Ocean (cyan) | Pixel flame |
| Building Habit | 10th workout | Forest (green) | Pixel 2×2 blocks |
| Committed | 25th workout | Violet (purple) | Pixel diamond |
| Dedicated | 50th workout | Rose (pink) | Pixel mountain |
| Elite | 100th workout | Gold (yellow) | Pixel crown |

Icons are Minecraft-style pixel-art SVGs built from `rect` elements only. Themes apply as a CSS accent colour across the entire app via `data-theme` on `:root`.

---

## File Structure

```
/
├── index.html          # App shell
├── manifest.json       # PWA manifest
├── sw.js               # Service worker
├── style.css           # Global styles + theme variables
├── app.js              # App logic and routing
├── data/
│   ├── movements.js    # Movement library
│   └── quotes.js       # Daily quotes list
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── animations/
    └── movements.css   # CSS keyframe animations per movement
```

---

## Out of Scope (v1)

- User accounts or cloud sync
- Social or sharing features
- Apple HealthKit integration
- Video instructions
- Custom movement creation by the user
- Push notifications
