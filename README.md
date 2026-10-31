# Learning-Javascript

This repository is for Claude to store context and information related to my learning process of JavaScript. Agents on any computer can pick up from here.

**Agents: read `CLAUDE.md` and `_context.md` first.**

My personal documentation as I learn JavaScript. Each topic gets its own note in `topics/`, and `Learning-Log.md` tracks what I covered and when.

## How this folder is organized

- `README.md`: this index (update it when a new topic is added)
- `Learning-Log.md`: dated log of each session: what I learned, what confused me, what to revisit
- `topics/basics/`: core language concepts (variables, operators, strings, methods)
- `topics/built-in-objects/`: Math, Number, and other built-in objects
- `topics/projects/`: finished practice projects and what they taught
- `topics/course/`: course overviews and progress
- `topics/templates/_template.md`: copy this when starting a new topic

## Topics

| # | Topic | Status |
|---|-------|--------|
| 1 | [Codecademy: Intro to JavaScript](topics/course/codecademy-intro-to-javascript.md) (course overview) | Learning |
| 2 | [console.log](topics/basics/console-log.md) | Learning |
| 3 | [Comments](topics/basics/comments.md) | Learning |
| 4 | [Arithmetic operators](topics/basics/arithmetic-operators.md) | Practiced |
| 5 | [String concatenation](topics/basics/string-concatenation.md) | Practiced |
| 6 | [Properties](topics/basics/properties.md) | Practiced |
| 7 | [Methods](topics/basics/methods.md) | Learning |
| 8 | [Math object](topics/built-in-objects/math-object.md) | Learning |
| 9 | [Number object](topics/built-in-objects/number-object.md) | Learning |
| 10 | [Variables](topics/basics/variables.md) | Learning |
| 11 | [Increment and decrement](topics/basics/increment-decrement.md) | Learning |
| 12 | [Project: Kelvin Weather](topics/projects/project-kelvin-weather.md) | Passed |

## Status key

- Learning: currently working through it
- Practiced: understood it and wrote code using it
- Review: needs another look

## Writing conventions (for reading in Zed)

- Notes are references I can check when I get stuck, not solutions to copy into projects.
- Code examples illustrate a concept and show the expected output in a comment. They don't need to be copy-paste ready.
- Notes stay short and scannable: a one-line definition, syntax, gotchas, then examples.
- Related topics link to each other with relative paths, so Zed can jump between them.
- `dashboard/`: progress dashboard (open `dashboard/index.html`); updated only when I ask
- `roadmap.md`: the full JavaScript path, phase by phase, with a progress history table
- `_context.md` holds the conversation history and conventions, so future sessions can pick up where we left off.
