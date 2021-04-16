> P.S. The empty object is not undefined. The only falsy values in JS are 0 , false , null , undefined , empty string, and NaN .

## && operator

> The && operator is the logical AND operator and finds the first falsy expression in its operands and returns it.

```javascript
console.log(0 && 1 && "foo"); // return false since 0 is Falsy operand

//conditional rendering:
// true && expression always evaluates to expression, and false && expression always evaluates to false.
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
//Inline If-Else with Conditional Operator :  condition ? true : false.
```

## || operator

> The || operator is the logical OR operator and finds the first truthy expression in its operands and returns it.

```javascript
console.log("" || "foo" || false); // return true since "foo" is truthy operand

// also set default value in JS
function eatFruit (fruit) {
    fruit = fruit || "strawberry";
    ...
}
// or
function eatFruit (fruit = "strawberry") {
    ...
}
```

## + operator

> The + operator converts whatever is after it to a number if it’s placed before an expression. So if we have:

```javascript
console.log(+"1"); //return 1
console.log(+("1" + 2)); //return 12
```

## ! operator

> The ! operator converts the operand to a boolean and negates it. It’ll convert falsy values true and truthy value to false .

```javascript
// return true
console.log(!0);
console.log(!"");
console.log(!false);
console.log(!NaN);
console.log(!undefined);
console.log(!null);

//return false
console.log(!1);
```

## !! operator

> Convert the operand to a boolean value. It’ll convert truthy values to true and falsy values to false .

```javascript
//return false
console.log(!!0);
console.log(!!"");
console.log(!!false);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!null);

//return true
console.log(!!{});
```

## ... rest operator

> Use it to assign objects or array entries that haven’t been assigned during destructuring into a variable with an array of the remaining values.

```javascript
const [one, two, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(rest); // [3, 4, 5, 6]

const { foo, bar, ...rest } = { foo: 1, bar: 2, a: 3, b: 4, c: 5 };
console.log(rest); // {a: 3, b: 4, c: 5}

const foo = (a, b, ...rest) => console.log(rest);
console.log(foo(1, 2, 3, 4, 5)); //[3, 4, 5]
```

## ... spread operator

> Spread an object’s property into another object and spread the array entries into another array.

```javascript
const foo = [1, 2, 3];
const bar = [3, 4, 5];
const baz = [...foo, ...bar];
console.log(baz); //[1, 2, 3, 3, 4, 5]

// It’ll make a shallow copy of an object or merge multiple objects into one
const foo = { a: 1, b: 2, c: 3 };
const bar = { a: 2, d: 4, e: 5 };
const baz = { ...foo, ...bar };
console.log(baz); // {a: 2, b: 2, c: 3, d: 4, e: 5}
```
