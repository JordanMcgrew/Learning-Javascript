// Data for dashboard/index.html. Edit with dashboard/tools/update.js (see UPDATE-GUIDE.md).
window.PROGRESS = {
 "updated": "2026-10-31",
 "mdnBase": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/",
 "levels": [
  {
   "name": "Not started",
   "weight": 0,
   "meaning": "Not covered yet."
  },
  {
   "name": "Seen",
   "weight": 0.25,
   "meaning": "Introduced to it or used it once."
  },
  {
   "name": "Learning",
   "weight": 0.5,
   "meaning": "Covered it and can use it with my notes."
  },
  {
   "name": "Practiced",
   "weight": 0.75,
   "meaning": "Used it on my own in exercises or a project."
  },
  {
   "name": "Can explain",
   "weight": 1,
   "meaning": "Can teach it back and predict its behavior."
  }
 ],
 "tiers": {
  "c": "Core (MDN fundamentals)",
  "i": "Intermediate",
  "a": "Advanced"
 },
 "areas": [
  {
   "id": "grammar",
   "name": "Grammar & types",
   "mdn": "Guide/Grammar_and_types",
   "topics": [
    {
     "name": "Running JavaScript & console.log",
     "level": 3,
     "tier": "c",
     "note": "../topics/basics/console-log.md"
    },
    {
     "name": "Comments",
     "level": 2,
     "tier": "c",
     "note": "../topics/basics/comments.md"
    },
    {
     "name": "Variables: let, const, var",
     "level": 2,
     "tier": "c",
     "note": "../topics/basics/variables.md",
     "mdn": "Reference/Statements/let"
    },
    {
     "name": "Data types: strings, numbers, booleans",
     "level": 2,
     "tier": "c",
     "note": "../topics/basics/arithmetic-operators.md"
    },
    {
     "name": "undefined & null",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "typeof",
     "level": 1,
     "tier": "c"
    },
    {
     "name": "Naming rules & case sensitivity",
     "level": 2,
     "tier": "c",
     "note": "../topics/basics/variables.md"
    },
    {
     "name": "Type coercion basics",
     "level": 1,
     "tier": "c",
     "note": "../topics/basics/string-concatenation.md"
    },
    {
     "name": "Hoisting & the temporal dead zone",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Strict mode",
     "level": 0,
     "tier": "i",
     "mdn": "Reference/Strict_mode"
    },
    {
     "name": "Semicolons & automatic insertion",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Symbols",
     "level": 0,
     "tier": "a",
     "mdn": "Reference/Global_Objects/Symbol"
    }
   ]
  },
  {
   "id": "operators",
   "name": "Expressions & operators",
   "mdn": "Guide/Expressions_and_operators",
   "topics": [
    {
     "name": "Arithmetic operators",
     "level": 3,
     "tier": "c",
     "note": "../topics/basics/arithmetic-operators.md"
    },
    {
     "name": "Operator precedence",
     "level": 2,
     "tier": "c",
     "note": "../topics/basics/arithmetic-operators.md"
    },
    {
     "name": "Increment & decrement",
     "level": 2,
     "tier": "c",
     "note": "../topics/basics/increment-decrement.md"
    },
    {
     "name": "Assignment & compound assignment (+=, -=)",
     "level": 1,
     "tier": "c"
    },
    {
     "name": "Comparison operators",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Strict vs loose equality (=== vs ==)",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Logical operators (&&, ||, !)",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Truthy & falsy values",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Ternary operator",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Nullish coalescing & optional chaining",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Spread & rest syntax",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Destructuring assignment",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "instanceof & in",
     "level": 0,
     "tier": "a"
    },
    {
     "name": "Bitwise operators",
     "level": 0,
     "tier": "a"
    }
   ]
  },
  {
   "id": "numbers-strings",
   "name": "Numbers & strings",
   "mdn": "Guide/Numbers_and_strings",
   "topics": [
    {
     "name": "String concatenation",
     "level": 3,
     "tier": "c",
     "note": "../topics/basics/string-concatenation.md"
    },
    {
     "name": "Template literals (interpolation)",
     "level": 2,
     "tier": "c",
     "mdn": "Reference/Template_literals"
    },
    {
     "name": "Properties & the dot operator (.length)",
     "level": 3,
     "tier": "c",
     "note": "../topics/basics/properties.md"
    },
    {
     "name": "Calling methods",
     "level": 2,
     "tier": "c",
     "note": "../topics/basics/methods.md"
    },
    {
     "name": "String methods: case & trim",
     "level": 2,
     "tier": "c",
     "note": "../topics/basics/methods.md",
     "mdn": "Reference/Global_Objects/String"
    },
    {
     "name": "String methods: search & slice",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Escape characters & multiline strings",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Math: floor & ceil",
     "level": 2,
     "tier": "c",
     "note": "../topics/built-in-objects/math-object.md",
     "mdn": "Reference/Global_Objects/Math"
    },
    {
     "name": "Math: random, round, min & max",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Number: isInteger",
     "level": 2,
     "tier": "c",
     "note": "../topics/built-in-objects/number-object.md",
     "mdn": "Reference/Global_Objects/Number"
    },
    {
     "name": "Number conversion: parseInt, parseFloat",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "String methods: split, replace, repeat",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Floating-point quirks (0.1 + 0.2)",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "BigInt",
     "level": 0,
     "tier": "a",
     "mdn": "Reference/Global_Objects/BigInt"
    }
   ]
  },
  {
   "id": "control-flow",
   "name": "Control flow & errors",
   "mdn": "Guide/Control_flow_and_error_handling",
   "topics": [
    {
     "name": "if / else if / else",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "switch statements",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Block scope",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Reading error messages",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "try / catch / finally",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "throw & custom errors",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Error types (TypeError, ReferenceError…)",
     "level": 0,
     "tier": "i",
     "mdn": "Reference/Global_Objects/Error"
    }
   ]
  },
  {
   "id": "loops",
   "name": "Loops & iteration",
   "mdn": "Guide/Loops_and_iteration",
   "topics": [
    {
     "name": "for loop",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "while loop",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "do...while loop",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "break & continue",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "for...of",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Nested loops",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "for...in",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Labeled statements",
     "level": 0,
     "tier": "a"
    }
   ]
  },
  {
   "id": "functions",
   "name": "Functions",
   "mdn": "Guide/Functions",
   "topics": [
    {
     "name": "Declaring & calling functions",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Parameters & return values",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Function expressions",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Arrow functions",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Scope: global, function, block",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Default & rest parameters",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Callbacks & higher-order functions",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Closures",
     "level": 0,
     "tier": "i",
     "mdn": "Closures"
    },
    {
     "name": "Recursion",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "this, call, apply & bind",
     "level": 0,
     "tier": "a"
    }
   ]
  },
  {
   "id": "arrays",
   "name": "Arrays",
   "mdn": "Guide/Indexed_collections",
   "topics": [
    {
     "name": "Creating arrays & indexing",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Array length",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "push, pop, shift, unshift",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "slice, splice, concat",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "indexOf, includes, find",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "forEach",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "map & filter",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Nested arrays",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Arrays and const (mutability)",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "reduce",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "sort & reverse",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Array destructuring & spread",
     "level": 0,
     "tier": "i",
     "mdn": "Reference/Global_Objects/Array"
    }
   ]
  },
  {
   "id": "objects",
   "name": "Objects",
   "mdn": "Guide/Working_with_objects",
   "topics": [
    {
     "name": "Object literals",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Dot vs bracket notation",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Adding, changing, deleting properties",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Methods & this in objects",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Nested objects",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Object.keys, values, entries",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "References vs copies",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "JSON: parse & stringify",
     "level": 0,
     "tier": "i",
     "mdn": "Reference/Global_Objects/JSON"
    },
    {
     "name": "Object destructuring & shorthand",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Getters & setters",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Enumerability & ownership",
     "level": 0,
     "tier": "a"
    },
    {
     "name": "Prototype chain & inheritance",
     "level": 0,
     "tier": "a",
     "mdn": "Inheritance_and_the_prototype_chain"
    }
   ]
  },
  {
   "id": "classes",
   "name": "Classes",
   "mdn": "Guide/Using_classes",
   "topics": [
    {
     "name": "class & constructor",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Methods & instances",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "extends & super",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "static members",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Private fields",
     "level": 0,
     "tier": "a"
    }
   ]
  },
  {
   "id": "async",
   "name": "Asynchronous JavaScript",
   "mdn": "Guide/Using_promises",
   "topics": [
    {
     "name": "Synchronous vs asynchronous & the event loop",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Callbacks & setTimeout",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Promises: then & catch",
     "level": 0,
     "tier": "i",
     "mdn": "Reference/Global_Objects/Promise"
    },
    {
     "name": "async / await",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "fetch & working with APIs",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Error handling in async code",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Promise.all & combinators",
     "level": 0,
     "tier": "a"
    }
   ]
  },
  {
   "id": "keyed",
   "name": "Keyed collections",
   "mdn": "Guide/Keyed_collections",
   "topics": [
    {
     "name": "Map",
     "level": 0,
     "tier": "i",
     "mdn": "Reference/Global_Objects/Map"
    },
    {
     "name": "Set",
     "level": 0,
     "tier": "i",
     "mdn": "Reference/Global_Objects/Set"
    },
    {
     "name": "WeakMap & WeakSet",
     "level": 0,
     "tier": "a"
    }
   ]
  },
  {
   "id": "modules",
   "name": "Modules",
   "mdn": "Guide/Modules",
   "topics": [
    {
     "name": "export & import",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Default vs named exports",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Organizing code across files",
     "level": 0,
     "tier": "i"
    }
   ]
  },
  {
   "id": "dates-regex",
   "name": "Dates, regex & Intl",
   "mdn": "Guide/Representing_dates_and_times",
   "topics": [
    {
     "name": "Date object basics",
     "level": 0,
     "tier": "i",
     "mdn": "Reference/Global_Objects/Date"
    },
    {
     "name": "Regular expressions: basics",
     "level": 0,
     "tier": "i",
     "mdn": "Guide/Regular_expressions"
    },
    {
     "name": "Internationalization (Intl)",
     "level": 0,
     "tier": "a",
     "mdn": "Guide/Internationalization"
    }
   ]
  },
  {
   "id": "deep",
   "name": "Language internals",
   "mdn": "Execution_model",
   "topics": [
    {
     "name": "Iterators & iterables",
     "level": 0,
     "tier": "a",
     "mdn": "Guide/Iterators_and_generators"
    },
    {
     "name": "Generators",
     "level": 0,
     "tier": "a"
    },
    {
     "name": "Typed arrays",
     "level": 0,
     "tier": "a",
     "mdn": "Guide/Typed_arrays"
    },
    {
     "name": "Proxy & Reflect (meta programming)",
     "level": 0,
     "tier": "a",
     "mdn": "Guide/Meta_programming"
    },
    {
     "name": "Memory management",
     "level": 0,
     "tier": "a",
     "mdn": "Memory_management"
    },
    {
     "name": "Execution model",
     "level": 0,
     "tier": "a",
     "mdn": "Execution_model"
    },
    {
     "name": "Equality comparisons & sameness",
     "level": 0,
     "tier": "i",
     "mdn": "Equality_comparisons_and_sameness"
    }
   ]
  },
  {
   "id": "environment",
   "name": "Browser & tools",
   "mdn": null,
   "topics": [
    {
     "name": "Running JavaScript in a web page",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "Debugging with DevTools",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "DOM: selecting & changing elements",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Events & listeners",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "localStorage",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Node.js basics",
     "level": 0,
     "tier": "i"
    }
   ]
  },
  {
   "id": "projects",
   "name": "Projects & practice",
   "mdn": null,
   "topics": [
    {
     "name": "Kelvin Weather (Codecademy)",
     "level": 3,
     "tier": "c",
     "note": "../topics/projects/project-kelvin-weather.md"
    },
    {
     "name": "More guided practice projects",
     "level": 0,
     "tier": "c"
    },
    {
     "name": "A project without a walkthrough",
     "level": 0,
     "tier": "i"
    },
    {
     "name": "Build my own app from scratch",
     "level": 0,
     "tier": "i"
    }
   ]
  }
 ],
 "milestones": [
  {
   "date": "2026-10-17",
   "text": "Started Codecademy’s Intro to JavaScript and began keeping notes"
  },
  {
   "date": "2026-10-17",
   "text": "Passed the Kelvin Weather project tests"
  },
  {
   "date": "2026-10-31",
   "text": "Moved all notes and context into the GitHub repo"
  }
 ],
 "history": [
  {
   "date": "2026-10-31",
   "core": 16.4,
   "coreInt": 9.2,
   "all": 7.9,
   "counts": [
    108,
    3,
    11,
    5,
    0
   ]
  }
 ]
};
