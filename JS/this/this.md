# this

> The JavaScript this keyword refers to the object it belongs to. It has different values depending on where it is used

- In an object method, this refers to the owner object.
- In a function, this refers to the global object.
- In a function, in strict mode, this is undefined.
- Methods like call(), and apply() can refer this to any object.

## Global

## Declared Object

> When the keyword this is used inside of a declared object, the value of this is set to the closest parent object the method is called on

```javascript
var person = {
  first: "John",
  last: "Smith",
  full: function () {
    console.log(this.first + " " + this.last);
  },
  personTwo: {
    first: "Allison",
    last: "Jones",
    full: function () {
      console.log(this.first + " " + this.last);
    },
  },
};
person.full();
// logs => 'John Smith'
person.personTwo.full();
// logs => 'Allison Jones'

var x = 10;
let foo = {
  x: 90,
  getX: function () {
    return this.x;
  },
};

foo.getX(); // prints 90 because “this” refers to user object instead of global object

let xGetter = foo.getX;

xGetter(); // prints 10 because "this" method is invoked as a simple function
```

## The New Keyword

> When the function is invoked as a constructor new keyword, "this" is bound to the new object being created.

```javascript
function Car(make, model) {
  this.make = make;
  this.model = model;
}
var myCar = new Car("Ford", "Escape");
console.log(myCar); // logs => Car {make: "Ford", model: "Escape"}
```

## Call, Bind, Apply

> When we use Call, Bind, Apply the first parameter is what this should be bound to

```javascript
add.call(ten, 3, 4);
// logs => 10
add.apply(ten, [3, 4]);
// logs => 10
```

> Bind return a function

## SetTimeOut

> Invoked callback "function" in settimeout so it refers to outter scope which is global scope

```javascript
var message = "test";
const object = {
  message: "Hello, World!",

  logMessage() {
    console.log(this.message); // What is logged?
  },
  log: () => {
    console.log(this.message);
  },
};
object.logMessage();
object.log();
setTimeout(object.logMessage, 1000);
```
