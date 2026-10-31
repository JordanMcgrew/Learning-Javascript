# Dashboard update guide

How the learning dashboard works and how agents should update it.

## The rule
**Do not change anything in `dashboard/` until Jordan explicitly asks for a dashboard update** (for example, "update the dashboard"). While we're learning, update notes, the log, and the roadmap as usual, but leave the dashboard alone. This keeps token use down during active learning.

When Jordan asks for an update, do it in one batch from the notes and the conversation since the last snapshot.

## What's here
| File | Purpose |
|---|---|
| `index.html` | The dashboard. Open it in a browser (double-click works, no server needed). Never edit for a progress update. |
| `progress-data.js` | All the data: topic levels, milestones, snapshot history. Edit only with the tool below. |
| `tools/update.js` | Command-line helper that edits `progress-data.js` safely and cheaply. |
| `UPDATE-GUIDE.md` | This file. |

The dashboard's topic list follows the structure of MDN's JavaScript docs (<https://developer.mozilla.org/en-US/docs/Web/JavaScript>): the Guide chapters become the areas, and each topic is tagged by MDN's level:
- **c = Core**: the fundamentals (Guide's "fundamental language" chapters, beginner material).
- **i = Intermediate**: MDN's intermediate guides and the next layer of the main chapters.
- **a = Advanced**: MDN's advanced guides and rarely needed features.

## Levels (what to assign)
| Level | Name | Weight | Give it when |
|---|---|---|---|
| 0 | Not started | 0 | Not covered yet |
| 1 | Seen | 25% | Jordan was introduced to it or used it once |
| 2 | Learning | 50% | Jordan covered it and can use it with the notes |
| 3 | Practiced | 75% | Jordan used it on their own in exercises or a project |
| 4 | Can explain | 100% | Jordan can teach it back and predict its behavior, ideally confirmed in tutor mode |

Be conservative. Raise a level only on evidence from what Jordan said or did: finished lessons, working code, correct predictions, passed project tests. Don't promote to level 4 without Jordan explaining the topic correctly in their own words.

Scores: a scope's understanding % is the average of the topic weights in that scope. "Core" is the headline number; "Core + Intermediate" and "All" are shown by the scope buttons.

## How to update (run from the repo root)
```
node dashboard/tools/update.js show [area-id]                  # print current levels (cheap way to read state)
node dashboard/tools/update.js set "<topic words>" <0-4>       # change one topic's level
node dashboard/tools/update.js set "<words>" 2 --note ../topics/basics/typeof.md   # also link a note
node dashboard/tools/update.js add <area-id> "<name>" <c|i|a> [level] [--note ...] [--mdn Reference/...]
node dashboard/tools/update.js milestone "<text>" [--date YYYY-MM-DD]
node dashboard/tools/update.js snapshot [--date YYYY-MM-DD]    # run LAST: records scores for the progress chart
```
- `set` matches a unique piece of the topic name. If it's ambiguous it lists the matches; use more words.
- Use `show` first, then a series of `set` calls, then `milestone` if something notable happened, then `snapshot`.
- Area ids: grammar, operators, numbers-strings, control-flow, loops, functions, arrays, objects, classes, async, keyed, modules, dates-regex, deep, environment, projects.
- Add a topic when Jordan learns something the map doesn't list (use `add`). Link the note with `--note` and MDN with `--mdn`.
- `snapshot` writes one entry per date and sets the "last updated" date. The progress chart draws a line once there are two or more snapshots.
- A milestone is a moment worth celebrating: finishing a course section, a project passing, a first solo build, a level jump in an area.

## Source of truth for evidence
- `Learning-Log.md`: dated record of what was covered.
- `roadmap.md`: checklist and level history (kept updated as we go).
- `topics/`: Jordan's reference notes. A topic with a note usually means at least level 2.
- `sessions/`: conversation summaries, including understanding checks.
Reconcile the dashboard against these when asked to update.

## After updating
1. Open `dashboard/index.html` locally if possible, or at least run `node dashboard/tools/update.js show` to verify.
2. Commit with a message like "Update dashboard: <date>" and push to `main`.
3. Tell Jordan the new Core % and what moved, in a sentence or two.

## Optional: view it online
Enable GitHub Pages for this repo (Settings, Pages, deploy from `main`) and the dashboard will be available at `/dashboard/`. Not required.
