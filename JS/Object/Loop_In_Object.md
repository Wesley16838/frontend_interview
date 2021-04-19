# Looping through objects in JavaScript

## Old way

```javascript
for (var property in object) {
  if (object.hasOwnProperty(property)) {
    // Do things here
  }
}
```

## Better way

1. Object.keys creates an array that contains the properties(keys) of an object

```javascript
const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
};

const keys = Object.keys(fruits);
console.log(keys); // [apple, orange, pear]
```

2. Object.values

```javacript
const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}

const values = Object.values(fruits)
console.log(values) // [28, 17, 54]
```

3. Object.entries creates an array of arrays. Each inner array has two item. The first item is the property; the second item is the value.

```javascript
const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
};

const entries = Object.entries(fruits);
console.log(entries);
// [
//   [apple, 28],
//   [orange, 17],
//   [pear, 54]
// ]
```

## Looping through the array

> Once you’ve converted the object into an array with Object.keys, Object.values, or Object.entries, you can loop through it as if it was a normal array.

```javascript
// Looping through arrays created from Object.keys
const keys = Object.keys(fruits);
for (const key of keys) {
  console.log(key);
}

// Results:
// apple
// orange
// pear

const entries = Object.entries(fruits);
for (const [fruit, count] of entries) {
  console.log(`There are ${count} ${fruit}s`);
}

// Result
// There are 28 apples
// There are 17 oranges
// There are 54 pears
```
