# Variables

**Date started:** 2026-10-17
**Status:** Learning

## What it is
A variable is a named container that stores a value so you can use it later. You create one with a keyword (`let`, `const`, or `var`), a name, and optionally a value.

## Syntax
```javascript
let score = 10;
console.log(score);   // 10

const greeting = "Hello";
console.log(greeting); // Hello
```

## Key rules and gotchas
- `let` creates a variable whose value can change later.
- `const` creates a variable whose value can't be reassigned. Use it by default when a value won't change.
- Reassigning a `const` throws an error: `const x = 1; x = 2;` fails.
- A `const` must be given a value when it's declared. `const x;` is a syntax error.
- `const` stops the variable from being reassigned, not the contents. A `const` holding an object or array can still have its contents changed.
- Use `let` for values that will change. `var` also allows changes, but `let` is the modern default.
- `var` is the older keyword. You'll see it in older code, but `let` and `const` are the modern choice.
- Variable names are case-sensitive: `score` and `Score` are different variables.
- Names can't start with a number, and they can't use reserved words like `let` or `const`.
- Declaring a variable with no value gives `undefined` until you assign one: `let x;` then `console.log(x);` prints `undefined`.

## Examples
```javascript
let lives = 3;
lives = lives - 1;
console.log(lives);   // 2

const pi = 3.14;
console.log(pi * 2);  // 6.28
```

## Practice
My first practice with `var`, one string and one number:
```javascript
var foodType = 'pizza';
var numOfSlices = 8;
console.log(foodType);     // pizza
console.log(numOfSlices);  // 8
```
Each variable is declared with a name and assigned a value, then printed with `console.log`. Strings can use single or double quotes.

## Questions / still unclear
-

## Related topics
- [Arithmetic operators](arithmetic-operators.md)
- [String concatenation](string-concatenation.md)
