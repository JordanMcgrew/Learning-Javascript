# Properties

**Date started:** 2026-10-17
**Status:** Practiced

## What it is
A property is a named value attached to something, such as a string or an object. You read it with dot notation: the thing, a dot, then the property name.

## Syntax
```javascript
let word = "Hello";
console.log(word.length);   // 5, the number of characters in the string
```

## Key rules and gotchas
- Dot notation reads a property: `thing.propertyName`. It doesn't call anything, so no parentheses.
- Properties are different from methods. Methods are actions with parentheses, such as `word.toUpperCase()`.
- A property name is case-sensitive: `word.Length` is not the same as `word.length`, and it gives `undefined`.
- Counting characters includes spaces: `"Hi there".length` is 8.

## Examples
```javascript
console.log("Hello".length);  // 5
console.log("Hi there".length); // 8
```

## Questions / still unclear
- Confirmed scope for this course: built-in properties like `.length` on strings. Add more examples as the lessons introduce other built-in properties.

## The dot operator
The dot between a value and a property or method name is called the dot operator. It reads a property (`word.length`) or calls a method (`word.toUpperCase()`).

## Related topics
- [String concatenation](string-concatenation.md)
- [console.log](console-log.md)
- [Methods](methods.md)
