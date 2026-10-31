# Number Object

**Date started:** 2026-10-17
**Status:** Learning

## What it is
`Number` is a built-in object with helper methods for working with numbers. Like `Math`, you call its methods on `Number` itself, and you pass in the value to check.

## Syntax
```javascript
console.log(Number.isInteger(5));    // true
console.log(Number.isInteger(5.5));  // false
```

## Key rules and gotchas
- Call it as `Number.isInteger(...)`. It's not a method on number values, so `(5).isInteger()` doesn't work.
- It returns `true` or `false`.
- It checks the type as well as the value. A string that looks like a number is not an integer: `Number.isInteger("5")` gives `false`.
- Decimal numbers with no fractional part still count: `Number.isInteger(5.0)` gives `true`, because `5.0` is just `5`.

## Examples
```javascript
console.log(Number.isInteger(12));    // true
console.log(Number.isInteger(0.25));  // false
console.log(Number.isInteger("12"));  // false
```

## Reference
- [MDN: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN: Number.isInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)

## Questions / still unclear
-

## Related topics
- [Math object](math-object.md)
- [Methods](../basics/methods.md)
