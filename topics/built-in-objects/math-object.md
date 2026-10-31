# Math Object

**Date started:** 2026-10-17
**Status:** Learning

## What it is
`Math` is a built-in object that holds math helpers. You don't create it. You call its methods directly on `Math` itself.

This is different from string methods. `"hi".toUpperCase()` runs on a specific string value. `Math.floor()` is called on the `Math` object, and you pass it the number to work on.

## Syntax
```javascript
Math.floor(4.7);   // 4   rounds down
Math.ceil(4.2);    // 5   rounds up
```

## Key rules and gotchas
- Call it as `Math.floor(...)`, not `.floor()`. Without `Math.` in front, JavaScript doesn't know where `floor` lives.
- The number goes inside the parentheses, because `Math` doesn't have a value like a string does.
- `Math.floor()` rounds toward negative infinity, so negative numbers go further from zero: `Math.floor(-4.5)` gives `-5`.
- `Math.ceil()` rounds toward positive infinity: `Math.ceil(-4.5)` gives `-4`.
- Both return a whole number. They don't change the original value.

## Examples
```javascript
console.log(Math.floor(9.99));  // 9
console.log(Math.ceil(9.01));   // 10
console.log(Math.floor(-4.5));  // -5
console.log(Math.ceil(-4.5));   // -4
```

## Reference
- [MDN: Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## Questions / still unclear
-

## Related topics
- [Number object](number-object.md)
- [Methods](../basics/methods.md)
