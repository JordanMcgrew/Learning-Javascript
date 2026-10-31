# Arithmetic Operators

**Date started:** 2026-10-17
**Status:** Practiced

## What it is
Operators perform math on numbers. Each one takes one or two values and produces a result.

## Syntax
```javascript
console.log(10 + 3);   // 13  addition
console.log(10 - 3);   // 7   subtraction
console.log(10 * 3);   // 30  multiplication
console.log(10 / 3);   // 3.333...  division
console.log(10 % 3);   // 1   remainder (modulo)
console.log(2 ** 3);   // 8   exponentiation (2 to the power of 3)
```

## Key rules and gotchas
- **Precedence** works like PEMDAS: `**` first, then `*`, `/`, `%`, then `+` and `-`. Use parentheses to control order: `(2 + 3) * 4` is 20, but `2 + 3 * 4` is 14.
- `%` gives the remainder, not a percentage. Useful for checking even/odd: `n % 2 === 0`.
- `+` also joins strings: `"Hi " + "there"` gives `"Hi there"`. Mixing a string and a number with `+` gives a string: `"5" + 2` is `"52"`.
- Dividing by zero doesn't throw an error; it gives `Infinity`.

## Examples I worked through
```javascript
console.log((2 + 3) * 4);  // 20
console.log(2 + 3 * 4);    // 14
console.log(17 % 5);       // 2
console.log(270 + 50);     // 320
```

Practice in the course was simple `console.log` calls with arithmetic on numbers, such as `270 + 50`.

## Questions / still unclear
-

## Related topics
- [console.log](console-log.md)
- [Comments](comments.md)
