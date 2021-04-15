# Map

> Map provide a convenient way of holding key-value pairs .

## Enter Map

```javascript
const m = new Map();

//Add to map
m.set("color", "red");
//Get an item from a map by key; return undefined is key doesn't exist
const color = m.get("color");
//Delete an item from a map by key
m.delete("color");
//Delete all items from a map
const hasColor = m.has("color");
//Find the number of items in a map
const size = m.size;
```

## Iterating over a map

```javascript
// Iterate over map keys
for (const k of m.keys()) {
  console.log(k);
}

//Iterate over map values
for (const v of m.values()) {
  console.log(v);
}

//Iterate over map key, value pairs
for (const [k, v] of m.entries()) {
  console.log(k, v);
}
//simplify to
for (const [k, v] of m) {
  console.log(k, v);
}
```

## Convert to array

```javascript
//Convert the map keys into an array
const a = [...m.keys()];
//Convert the map values into an array
const a = [...m.values()];
```

## Why we need Map if we have Object?

1. Any value can be used as key in maps, but keys in objects are only Strings and Symbol
2. You can get the size of the Map, but we don’t have a built-in method to get size in Object
3. Map maintains the key-value insertion order, whereas Object don’t.
4. Maps are iterable, whereas an Object is not iterable by-default
