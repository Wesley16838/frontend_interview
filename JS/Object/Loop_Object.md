# Looping through objects in JavaScript

1. A for...in loop (Before ES6)
```javascript
for (var property in object) {
  if (object.hasOwnProperty(property)) {
    // Do things here
  }
}
```

2. Better way!
  - Object.keys : Creates an array that contains the properties of an object.
    ```javascript
      const fruits = {
        apple: 28,
        orange: 17,
        pear: 54,
      }

      const keys = Object.keys(fruits)
      console.log(keys) // [apple, orange, pear]
    ```
  - Object.values : Creates an array that contains the values of every property in an object.
  ```javascript
    const fruits = {
      apple: 28,
      orange: 17,
      pear: 54,
    }

    const values = Object.values(fruits)
    console.log(values) // [28, 17, 54]
  ```
  - Object.entries : Creates an array of arrays. Each inner array has two item. The first item is the property; the second item is the value.
  ```javascript
    const fruits = {
      apple: 28,
      orange: 17,
      pear: 54,
    }

    const entries = Object.entries(fruits)
    console.log(entries)
    // [
    //   [apple, 28],
    //   [orange, 17],
    //   [pear, 54]
    // ]
  ```
3. Example
  ```javascript
  // Looping through arrays created from Object.keys
  const keys = Object.keys(fruits)
  for (const key of keys) {
    console.log(key)
  }

  //or use Object.entries
  for (const [fruit, count] of entries) {
    console.log(`There are ${count} ${fruit}s`)
  }
  ```