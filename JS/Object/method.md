## Method interact with properties.

- Object.create() : You can pass additional properties to define each different object property:
  1. value: the value of the property
  2. writable: true the property can be changed
  3. configurable: if false, the property cannot be removed nor any attribute can be changed, except its value
  4. enumerable: true if the property is enumerable
  5. get: a getter function for the property, called when the property is read
  6. set: a setter function for the property, called when the property is set to a value

```javascript
const animal = {};
const dog = Object.create(animal, {
  breed: {
    value: "Siberian Husky",
    writable: false,
  },
});
console.log(dog.breed); //'Siberian Husky'
```

- Object.defineProperties()
- Object.defineProperty()
- Object.getOwnPropertyDescriptor()
- Object.getOwnPropertyDescriptors()
