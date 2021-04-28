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
function clone(obj) {
  if (obj.constructor !== Array && obj.constructor !== Object) {
    return obj;
  } else {
    let targetObj = obj.constructor === Array ? [] : {};
    for (let i in obj) {
      if (typeof obj[i] === "object") {
        targetObj[i] = obj[i].constructor === Array ? [] : {};
        targetObj[i] = clone(obj[i]);
      } else {
        console.log(obj[i]);
        targetObj[i] = obj[i];
      }
    }
  }
  return targetObj;
}
```
