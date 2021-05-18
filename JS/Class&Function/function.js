// Prototype
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName()); // typeError
// In JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself.
// For that reason, we can call Person.getFullName(), but member.getFullName throws a TypeError.

// Use this instead
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Create new Keyword
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
// Person {firstName: "Lydia", lastName: "Hallie"} and undefined
// For sarah, we didn't use the new keyword. When using new, this refers to the new empty object we create.
// However, if you don't add new, this refers to the global object!
