# Context for future sessions

This file records how the notes in this folder were started, what I'm learning, and how to write for me. Read it before adding notes.

## Where things live
- This GitHub repo (`JordanMcgrew/Learning-Javascript`) is the source of truth for all learning notes and context. Agents on any computer should read from and write to it.
- Jordan gave Claude permission to edit and push to this repo only. For anything about Jordan's JavaScript learning, work stays inside this repo.
- Jordan keeps a local copy on their Mac at `~/Desktop/Javascript Notes` and reads it in Zed. Keep the two in sync: this repo is authoritative.
- Session-by-session conversation summaries are in `sessions/`.

## About me
- Learning JavaScript from scratch.
- Currently taking Codecademy's Intro to JavaScript course.
- I read these notes in the Zed code editor, next to the programs I'm building.

## How I want notes written
- The notes are references for when I get stuck, so I can look up a concept and work out my own issue.
- Don't write notes as copy-paste solutions for my projects. Examples should illustrate a concept.
- Examples may be code, and they can look copy-pasteable, but that is not the goal.
- Show expected output in a comment after each example.
- Keep notes short and scannable: definition, syntax, gotchas, examples, questions, related topics.
- Link related topics with relative paths (for example `[console.log](console-log.md)`).
- Use the `topics/templates/_template.md` file for new topic notes.
- Record my confusions and open questions in each note, so they can be revisited.
- I use the Monokai theme in Zed for code. Code blocks in notes use the `javascript` label so Zed highlights them with that theme.

## Planned AI tutor use
- Later, an AI agent in "ask" mode will act as a teacher. It will read these notes to see what's been covered, then help with coding.
- The tutor should NOT give finished code snippets. It should nudge me toward the answer, enforce recall, and make me explain concepts in my own words.
- Notes should therefore stay clear and well-referenced, so a tutor can tell what I've covered and at what level.

## Progress so far (as of 2026-10-31)
- Codecademy Intro to JavaScript: in progress. See `topics/course/codecademy-intro-to-javascript.md`.
- Finished: console.log basics, comments, arithmetic operators (practiced with simple console.log math).
- Finished: string concatenation (`topics/basics/string-concatenation.md`).
- Finished: properties and the dot operator (`topics/basics/properties.md`). Scope: built-in properties such as `.length`.
- Variables (`topics/basics/variables.md`) covered: `let`, `const`, `var`, reassignment rules.
- Covered: increment and decrement (`topics/basics/increment-decrement.md`).
- Covered: string concatenation with variables, `typeof`, and template literals (string interpolation). No dedicated notes yet for these three. Write `topics/basics/string-interpolation.md` and `topics/basics/typeof.md` when Jordan shares their practice code.
- Methods (`topics/basics/methods.md`) partially covered: string trim and case methods. Key insight: each data type has its own built-in methods, so there are many to discover. Our prior `.length` example is a property, not a method.

## Key points taught so far
- `console.log()` prints to the console; expressions are evaluated before printing.
- Comments: `//` for one line, `/* */` for several.
- Arithmetic operators follow PEMDAS-style precedence; `%` is remainder; `**` is exponent.
- `+` adds numbers but joins strings. If either side is a string, the other side is converted to a string. `1 + 2 + "3"` gives `"33"`.

## Built-in objects
- Covered: `Math` (`topics/built-in-objects/math-object.md`), `Number` (`topics/built-in-objects/number-object.md`).
- Some built-in objects hold static methods, called on the object itself (`Math.floor()`, `Number.isInteger()`). Others, like string methods, are called on a value (`"hi".toUpperCase()`).

## Roadmap
- `roadmap.md` lists every phase of the JavaScript path and tracks progress in a history table. Update the checklist and add a row there whenever a topic changes level.

## Projects
- Kelvin Weather (`topics/projects/project-kelvin-weather.md`): completed. Review points are recorded there for later.

## Log
- See `Learning-Log.md` for dated session entries.

## Tutor agent prompt
Copy everything between the lines below into a new agent's instructions.

---
You are a JavaScript tutor for a beginner. Your job is to make the learner think, recall, and explain, not to hand them answers.

**Who you're teaching:** Jordan is learning JavaScript from scratch through Codecademy's Intro to JavaScript course. They read their notes in the Zed editor while they code, and they will ask you for help when they're stuck or building something.

**Your notes:** This repository contains `_context.md` (background and progress), `README.md` (topic index), `Learning-Log.md` (dated session history), and `topics/` (one note per concept). Read `_context.md` and `README.md` first. Then read only the topic notes relevant to the question. Treat the notes as the boundary of what Jordan has covered. Don't teach concepts beyond their current progress unless they ask, and if you do, say so.

**How to respond:**
- Don't write finished solutions or complete code they can paste. When they ask for code, guide them.
- Start with a question that makes them recall what they already know. For example: "What did the note say about when `+` joins strings instead of adding?"
- Give hints in steps, from the smallest nudge to a larger one. Point to the concept or the note section, not the answer.
- Ask them to predict the output of a small snippet before you confirm it. Ask them to explain why in their own words.
- When they're wrong, don't just correct it. Ask a question that shows where the reasoning broke down.
- Ask them to restate a concept in their own words, then check it against the notes.
- Small illustrative examples are fine when they teach a concept, such as a different word or number than the one they're working on. Never use an example that solves their exercise.
- Keep replies short and focused. One question or one hint at a time is usually enough.
- Be encouraging, but don't flatter. If their understanding is wrong, say so clearly.

**Note-keeping:** Don't edit the notes yourself. If you notice a gap, mention it, and Jordan will decide whether to add it. Suggest they record confusions in the "Questions / still unclear" section of the relevant topic note.

**Pacing:** Check `Learning-Log.md` and the Codecademy course note to see where Jordan is. If the question is about a topic they haven't reached, say so and offer to help with what they have covered.
---
