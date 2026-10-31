# String Concatenation

**Date started:** 2026-10-17
**Status:** Practiced

## What it is
Concatenation joins two or more strings into one string. In JavaScript you do it with the `+` operator.

## Syntax
```javascript
console.log("Hello, " + "world!");   // Hello, world!

let firstName = "Jordan";
console.log("Welcome, " + firstName); // Welcome, Jordan
```

## Key rules and gotchas
- `+` adds numbers but joins strings. Whether it adds or joins depends on the types of the values.
- If either side is a string, `+` converts the other side to a string: `"Score: " + 10` gives `"Score: 10"`.
- Watch the spaces. `"Hello," + "world"` gives `"Hello,world"`. Put the space inside a string.
- Math runs before joining only if you use parentheses or the operands are numbers. `1 + 2 + "3"` gives `"33"`, because `1 + 2` runs first (3), then `3 + "3"` joins to `"33"`.
- `console.log(270 + 50)` gives `320`, but `console.log("270" + "50")` gives `"27050"`. Same symbol, different result, because of the quotes.

## Examples I worked through
```javascript
console.log("Hello " + "there");  // Hello there
console.log("Score: " + 10 + 5);  // Score: 105
console.log("Score: " + (10 + 5)); // Score: 15
```

## Questions / still unclear
-

## Reference
- [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Related topics
- [Arithmetic operators](arithmetic-operators.md)
- [console.log](console-log.md)
