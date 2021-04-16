# Arrow Function

> A new feature introduced in ES6

## Benefits

1. Shorter Syntax
2. No (arguement) binding of this: Unlike a regular function, an arrow function does not bind this. Instead, this is bound lexically

## Regular VS Arrow

1. Arrow cannot be used as constructor( no new keyword )

```javascript
let me = {
  name: "Ashutosh Verma",
  thisInArrow: () => {
    console.log("My name is " + this.name); // no 'this' binding here
  },
  thisInRegular() {
    console.log("My name is " + this.name); // 'this' binding works here
  },
};
me.thisInArrow();
me.thisInRegular();
```
