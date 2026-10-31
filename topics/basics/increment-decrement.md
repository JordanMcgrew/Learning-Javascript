# Increment and Decrement Operators

**Date started:** 2026-10-17
**Status:** Learning

## What it is
`++` adds 1 to a variable's value. `--` subtracts 1. They're shorthand for changing a number by exactly one.

## Syntax
```javascript
var dog = 1;
dog++;
console.log(dog);  // 2
dog--;
console.log(dog);  // 1
```

## Key rules and gotchas
- `x++` is the same as `x = x + 1`. `x--` is the same as `x = x - 1`.
- The variable must hold a number that can be changed. A `const` variable throws an error here, the same as any other reassignment.
- Each operator changes the variable itself, so the change sticks for later lines.
- These only change by 1. To add or subtract other amounts, use `+=` or `-=` (covered in the next note).

## Practice
```javascript
var dog = 1;
dog++;
console.log(dog);  // 2
dog--;
console.log(dog);  // 1
```

## Questions / still unclear
-

## Related topics
- [Variables](variables.md)
- [Arithmetic operators](arithmetic-operators.md)
