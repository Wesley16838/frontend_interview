# Var VS Let VS Const

- var declarations are function scoped while let and const are block scoped.
- var variables can be updated and re-declared; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
- They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
- While var and let can be declared without being initialized, const must be initialized during declaration.

```javascript
//var: function scope
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); // 10

function printing() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}
printing();
console.log(i); // Uncaught ReferenceError: i is not defined

//let: block scope
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); // Uncaught ReferenceError: i is not defined
```

## With Closure

```javascript
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("Value of i : " + i);
  }, 100);
}
// Value of i : 6
// Value of i : 6
// Value of i : 6
// Value of i : 6
// Value of i : 6
// Becuase var is global and due to closure
// Method is use Immediately Invoked Function Expression(IIFE) to create scope each time

// let creates a variable declaration for each loop which is block level declaration. So basically it creates a scope within { }.
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("Value of i : " + i);
  }, 100);
}
```
