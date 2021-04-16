# Closure

> A closure gives you access to an outer function’s scope from an inner function due to lexical environment. - Scope Chain

- Three Scope chain
  1. it has access to its own scope — variables defined between its curly brackets
  2. it has access to the outer function’s variables
  3. it has access to the global variables

## What is Currying in javascript?

> Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Curried functions are constructed by chaining closures and immediately returning their inner functions simultaneously.

```javascript
add(1,2,3) ===> add(1)(2)(3)
const add = (x) => {
  function addY(y) {
    return y ? add(x + y) : x;
  }
  return addY;
};
```

> Currying means that the closure does not have to receive all of its arguments at once, but separately. Beside,
