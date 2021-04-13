# Ways to Clone Objects in JavaScript

1. Shallow clone
   - Using Spread
   ```javascript
   const food = { beef: "🥩", bacon: "🥓" };
   const cloneFood = { ...food };
   ```
   - Using Object.assign
   ```javascript
   const food = { beef: "🥩", bacon: "🥓" };
   const cloneFood = Object.assign({}, food);
   ```
2. Deep clone
   - Using JSON: JSON.stringify convert object or value to a JSON string and The JSON.parse() method parses a string and returns a JavaScript object.
     - Issues
       a. Only work with Number and String and Object literal without function or Symbol properties.
   ```javascript
   const cloneFood = JSON.parse(JSON.stringify(food));
   ```
   - Using lodash
   ```javascript
   const cloneFood = _.cloneDeep(food);
   ```
   - Lodash DeepClone vs JSON
     - JSON.stringify/parse only work with Number and String and Object literal without function or Symbol properties.
     - deepClone work with all types, function and Symbol are copied by reference.

## Deep copy vs Shallow copy

> A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. A shallow copy means that certain (sub-)values are still connected to the original variable.

## Deep clone using Recursive

```javascript
function deepClone(source) {
  const targetObj = source.constructor === Array ? [] : {}; // copy the goal is to determine an array or an object
  for (let keys in source) {
    // Traverse goal
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === "object") {
        // If the value is an object, it recursively
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else {
        // If not, the direct assignment
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}
```
