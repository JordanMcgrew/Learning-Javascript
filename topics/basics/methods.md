# Methods

**Date started:** 2026-10-17
**Status:** Learning

## What it is
A method is an action that belongs to a value, such as a string. You call it with the dot operator, the method name, and parentheses. Unlike a property, a method does something.

## Syntax
```javascript
let word = "hello";
console.log(word.toUpperCase());  // HELLO
```

## Big idea: data types come with methods
Each data type (string, number, array, and so on) has its own built-in methods for working with values of that type. Once you know a type, you can look up what methods it has. Many more exist than we've covered.

- `"hello".toUpperCase()` is a method that belongs to strings.
- `console.log()` is a method on the `console` object, not on a data type. It's a built-in tool you use to output values.
- `.length` is a property, not a method, so it has no parentheses. It still uses the same dot operator.

## How methods and properties are stored
- A data type acts as a shared blueprint. Every string gets its characteristics from the string type.
- Properties like `.length` are tied to each value's contents, so each string has its own length.
- Methods like `.toUpperCase()` are not copied into each string. They are shared through the type, and you apply them to a particular value.
- So reading a property means reading information the value already has, and calling a method means running a shared action on that value.

## String methods covered so far

**`.toUpperCase()`** returns a copy of the string in capital letters.
```javascript
console.log("cats".toUpperCase()); // "CATS"
```

**`.trim()`** removes whitespace from both ends of a string. Whitespace includes spaces, tabs, and line breaks.
```javascript
console.log("   hi there   ".trim()); // "hi there"
```

**`.trimStart()`** removes whitespace from the beginning only.
```javascript
console.log("   hi there   ".trimStart()); // "hi there   "
```

**`.trimEnd()`** removes whitespace from the end only.
```javascript
console.log("   hi there   ".trimEnd()); // "   hi there"
```

Like every string method, these return a new string and leave the original unchanged.

## Key rules and gotchas
- Methods need parentheses, even when they take no input: `word.toUpperCase()`. Without them, you're reading a property, not calling a method.
- Methods don't change the original value. Strings are immutable, so the method returns a new value: `word` is still `"hello"`.
- Method names are case-sensitive, the same as properties.
- Methods and properties both use the dot operator. The parentheses are the difference.
- Trim methods only touch the ends of a string. Spaces in the middle stay.
- Parentheses are required for every method call, even when nothing goes inside. Any input a method needs goes inside them: `"hello".indexOf("e")` gives `1`, the position of the letter "e".

## Questions / still unclear
-

## Reference
- [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (string methods and properties)

## Related topics
- [Properties](properties.md)
- [String concatenation](string-concatenation.md)
