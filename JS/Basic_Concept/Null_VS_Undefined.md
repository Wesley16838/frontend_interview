# Null VS Undefined

1. Undefined means the variable has been declared but hasn't assign value to it; whereas, Null is a value represents 'no value' and can be assign to the variable.
2. Undefide is not valid in JSON while Null is
3. JS sets unassigned variable as Undefined not Null.

## Primitive type conversion

1. In case of arithmetic conversion on NULL, the value determined will be 0.

```javascript
var sum = 111 + null;
console.log(sum);
Output-- > 111;
```

2. In case of undefined, no arithmetic conversion takes place. If we add anything to undefined, result will be NaN or Not-a-Number.

```javascript
var sum = 111 + undefined;
console.log(sum)
Output -> NaN
```

```javascript
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(null === undefined); //fasle
console.log(null == undefined); //true
console.log(null === null); //true
console.log(null == null); //true
console.log(!null); //true
console.log(isNaN(1 + null)); //false
console.log(isNaN(1 + undefined)); //true
```
