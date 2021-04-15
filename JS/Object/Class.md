# JavaScript ES6: Classes

> A template to create objects. Before ES6, we use constructor function to create object

```javascript
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.makeSound = () =>
      `The ${this.type} named ${this.name} goes ${this.sound}!`;
  }
}
const frog = new Animal("frog", "George", "ribbit");
```

## Constructor, static methods, prototype methods

### Constructor

> The constructor method is a special method of a class for creating and initializing an object of that class.

### static methods

> A static method is a function that is bound to the class, not an object. Static methods are methods that can be called without creating an object from the class using the new keyword A static method cannot be called from an instance of the class

### prototype methods

> JavaScript is a prototype-based language. This means all the basic data types you use come from an existing prototype. It allows you to add new properties to object constructors and also allows you to add new methods to objects constructors!

```javascript
Person.prototype.nationality = "English";

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};
```

## getters and setters.

> Define them with the get and set keywords respectively. Getter is a method that lets us get some data from a class. Setters are methods that gives us the ability to set some fields of the class.

## Inheritance

> uses the "extends" keyword to create a class that inherits properties from a parent (“super”) class.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
}

let rabbit = new Rabbit("John", 5);
```

## Hoisting

> An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:

```javascript
var p = new Rectangle(); // ReferenceError
class Rectangle {}
```

## Class VS. Function

```javascript
// function
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log(this.name);
};

let user = new User("John");
user.sayHi();

//class
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}
```

## this

> The this keyword allows us to access the current object’s properties inside the object, unless you’re using arrow functions.
