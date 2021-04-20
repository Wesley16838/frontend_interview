# Array

## Method

### ADD/REMOVE ITEMS

- push: add items to the end
- pop: remove item from the end
- shift: remove item from the beginning
- unshift: add items to the begining

### Convert array to strings

- toString: Convert array to string(contain comma)
- join: join all elements into a string
- P.S. Split convert string to array

### Slice Splice Split

- slice: The slice() method returns the selected elements in an array, as a new array object.

```javascript
arr.slice([start], [end]);
```

- splice: The splice() method adds/removes items to/from an array, and returns the removed item(s).

```javascript
// fruits.splice(2, 0, "Lemon", "Kiwi");
arr.splice(start[, deleteCount, elem1, ..., elemN])
```

### Combine two array

1. Concat
2. Spread

### Copy array

1. Spread

```javascript
const aArray = [1, 2, 3];
const copyArray = [...aArray];
```

2. Slice

```javascript
const newArray = oldArray.slice(0);
const newArray = oldArray.slice();
```

3. concat

```javascript
const newArray = [].concat(oldArray);
```

### Check data type

1. isArray(): Array.isArray(variable)
2. constructor: variable.constructor === Array
3. instanceof: variable instanceof Array
4. Object.prototype.toString.call(variable) === '[object Array]' : the most generic way because it differentiate between types of objects

### forEach & Map & reduce

1. reduce

```javascript
[1, 2, 3].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

//flat array
let data = [
  [1, 2],
  [3, 4],
  [5, 6],
];
data.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);
```

### filter
