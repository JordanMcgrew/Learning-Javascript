# Project: Kelvin Weather (Codecademy)

**Date completed:** 2026-10-17
**Status:** Passed the course tests

## What it does
Converts a Kelvin temperature to Celsius, then to Fahrenheit (rounded down with `Math.floor()`), and logs the result with a template literal. Extra practice converts to Newton.

## Concepts used
- Variables: `const` for the fixed Kelvin value, `let` for values that are recalculated
- Arithmetic operators and operator precedence in the conversion formula
- `Math.floor()` on a number
- Template literals: `` `The temperature is ${value} degrees Fahrenheit.` ``
- Comments above each line

## Review points to revisit
- The Newton `console.log` says "degrees Fahrenheit" even though it logs a Newton value. The text should match the scale.
- Variable names were `todayForcast`, `todayForcastC`, and `todayForcastF` instead of the names the project asked for (`kelvin`, `celsius`, `fahrenheit`).
- The rounded Fahrenheit value was stored in a new variable, not in `fahrenheit`, which would have needed `let`.
- The Kelvin value was set to `0` (for the "0 Kelvin" question) instead of the forecast value `293`.

## Questions / still unclear
-

## Related topics
- [Variables](../basics/variables.md)
- [Arithmetic operators](../basics/arithmetic-operators.md)
- [Methods](../basics/methods.md)
