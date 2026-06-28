# Workout PWA — Workflow SOP

## Session micro-workflow

Follow this order every time you work on a feature:

1. Run `git status` — confirm working tree is clean before starting
2. Write or update data / logic first
3. Build the UI against real data
4. Test on desktop browser
5. Verify on iPhone Safari or installed PWA
6. Commit and push before ending the session

---

## Git safety rules

> **Why these rules exist:** During the Phase 1→2 transition, a `git pull` from the remote wiped local files (`style.css`, `manifest.json`, `sw.js`, `icons/`) that had not been committed yet. These rules prevent that from happening again.

### Before pulling from remote

Never run `git pull` with uncommitted local changes. Always commit first:

```bash
git add .
git commit -m "WIP: brief description"
git pull
```

If you need to pull and aren't ready to commit, stash instead:

```bash
git stash
git pull
git stash pop
```

### After completing any phase

Commit and push — the SW cache version is bumped automatically by GitHub Actions on every deploy (set to the commit SHA). No manual version tracking needed.

```bash
git add .
git commit -m "Phase X complete: brief description"
git push
```

The installed PWA will show an "App updated — tap to reload" toast on next open.

> **Do not reinstall** unless the manifest changes (app name, icon, display mode).

### Before starting any new phase

Run `git status` and confirm the output says:

```
nothing to commit, working tree clean
```

Do not write any new files until this is confirmed.

### Golden rule

Never let the remote overwrite local work. The remote is empty until you push — it does not know about files you've created locally.

---

## File structure reference

The git repo root is `P03-Tolko-Workout-PWA/` — this is a fully isolated repo, separate from other projects.

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions: deploys to gh-pages on every push to main
├── index.html              # App shell + all screens
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker (cache-first; version auto-bumped by CI)
├── style.css               # Global styles + CSS theme variables
├── app.js                  # Routing + screen logic + default routines seed
├── data/
│   ├── movements.js        # Movement library data (31 movements)
│   └── quotes.js           # Daily quotes list
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── animations/
│   └── movements.css       # CSS keyframe animations per movement
└── doc/
    ├── PROJECT_SPEC.md
    ├── EXECUTION_PLAN.md
    └── workflow-SOP.md     # this file
```

---

## Testing checklist (per phase)

- [ ] No console errors in desktop browser
- [ ] Correct screen renders on nav tap
- [ ] Offline mode works (disable network in DevTools, reload)
- [ ] Tested on iPad/iPhone in Safari
- [ ] Tested in installed PWA mode (from home screen)
- [ ] `git status` clean before closing session
