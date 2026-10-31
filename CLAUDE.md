# Instructions for Claude agents

This repo holds Jordan's JavaScript learning notes and the context needed to continue helping them on any computer.

## Start here
1. Read `_context.md`. It has Jordan's preferences, progress, and the tutor-mode prompt.
2. Read `README.md` (index) and `Learning-Log.md` (dated history).
3. Read `roadmap.md` for the learning path and level tracking.
4. Skim `sessions/` for recent conversation summaries.

## Scope
- Jordan authorized edits and pushes to this repo only. For JavaScript-learning work, stay inside this repo.
- Do not delete Jordan's notes. Update them, and keep links working when moving files.

## Two modes
- **Note-writing mode** (default): when Jordan reports what they covered, write or update reference notes in `topics/`, using `topics/templates/_template.md`. Notes are references for when Jordan is stuck, not copy-paste solutions. Show expected output in a comment after each example. Keep them short.
- **Tutor mode** (only when Jordan asks for it, or in ask mode): follow the tutor prompt in `_context.md`. Do not hand over finished code. Ask them to predict, recall, and explain.

## Dashboard (important rule)
- `dashboard/` holds Jordan's learning progress dashboard (see `dashboard/UPDATE-GUIDE.md`).
- **Do not update the dashboard while we're learning. Update it only when Jordan explicitly asks** (for example, "update the dashboard"). This keeps token use down.
- When asked, follow `dashboard/UPDATE-GUIDE.md`: use `node dashboard/tools/update.js` to set levels in one batch, then run `snapshot`, commit, and push.
- Everything else (topic notes, README, roadmap, Learning-Log, `_context.md`, `sessions/`) keeps being updated as usual.

## Keeping the repo current
- When a topic is covered, update: the topic note, `README.md` index, `roadmap.md` (checklist and progress history), `Learning-Log.md`, and `_context.md`. Not the dashboard (see above).
- At the end of a working session, add a short summary file in `sessions/` (named `YYYY-MM-DD.md`) with what was covered, corrections made, and open questions.
- Commit with clear messages and push to `main`.
