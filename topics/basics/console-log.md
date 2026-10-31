# console.log

**Date started:** 2026-10-17
**Status:** Learning

## What it is
`console.log()` prints a value to the browser's developer console (or the terminal when running Node). It's how you see what your code is doing.

## Syntax
```javascript
console.log("Hello, world!");
console.log(42);
console.log(2 + 3);      // logs 5, the result of the expression
```

## Key rules and gotchas
- Put the value inside the parentheses. Strings need quotes; numbers don't.
- Expressions are evaluated first, then the result is logged.
- Multiple values can be passed separated by commas and print on one line separated by spaces: `console.log("Total:", 10)`.
- Each call starts a new line in the console.

## Examples I worked through
```javascript
console.log("Hello");        // Hello
console.log(7 * 6);          // 42
```

## Questions / still unclear
-

## Related topics
- [Comments](comments.md)
- [Arithmetic operators](arithmetic-operators.md)
