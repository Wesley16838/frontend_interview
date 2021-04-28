"# frontend_interview"

### Table of Contents

| No.        | Questions                                                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JavaScript |
| 1          | [What is Scope](#what-is-scope)                                                                                                                             |
| 2          | [What is Closure Curry High order function](#what-is-closure-curry-high-order-function)                                                                     |
| 3          | [What is Hoisting](#what-is-hoisting)                                                                                                                       |
| 4          | [What is Prototype](#what-is-prototype)                                                                                                                     |
| 5          | [What is "this"](#what-is-this)                                                                                                                             |
| 6          | [What is Event Loop](#what-is-event-loop)                                                                                                                   |
| 7          | [What is Object](#what-is-object)                                                                                                                           |
| 8          | [What is Array](#what-is-array)                                                                                                                             |
| 9          | [What is Arrow Function](#what-is-arrow-function)                                                                                                           |
| 10         | [What is the difference between let and var and const ](#what-is-the-different-between-let-and-var-const)                                                   |
| 11         | [What are the differences between cookie, local storage and session storage ](#What-are-the-differences-between-cookie-local-storage-and-session-storage)   |
| 12         | [What is Callback Function](#what-is-callback-function)                                                                                                     |
| 13         | [What is Promise](#what-is-promise)                                                                                                                         |
| 14         | [What is Async/Await](#what-is-async-await)                                                                                                                 |
| 15         | [What is the difference between null and undefined](#what-is-the-difference-between-null-and-undefined)                                                     |
| 16         | [What is the difference between window and document](#what-is-the-difference-between-window-and-document)                                                   |
| 17         | [What is an event flow](#what-is-event-flow)                                                                                                                |
| 18         | [What is JSON](#what-is-json)                                                                                                                               |
| 19         | [What are primitive/Non-primituve data types](#what-are-primitive-non-primitive--data-types)                                                                |
| 20         | [What is the difference between reflow and repaint](#what-is-the-difference-between-reflow-and-repaint)                                                     |
| 21         | [What is DOM](#what-is-dom)                                                                                                                                 |
| 22         | [What is AJAX](#what-is-ajax)                                                                                                                               |
| 23         | [What are Debouncing and Throttling](#what-are-Debouncing-and-throttling)                                                                                   |
| 24         | [What is MVC](#what-is-mvc)                                                                                                                                 |
| 25         | [Null vs Undefined](#null-vs-undefined)                                                                                                                     |
| 26         | [== vs ===](#==-vs-===)                                                                                                                                     |
| 27         | [Falsy value](#falsy-value)                                                                                                                                 |
| 28         | [Function expression vs function declaration](#function-expression-vs-function-declaration)                                                                 |
| 29         | ["attribute" and a "property"](#attribute-and-a-property)                                                                                                   |
| 30         | [Spread syntax and Rest syntax](#spread-syntax-and-rest-syntax)                                                                                             |
| 31         | [Describe the difference between `<script>`, `<script async>` and `<script defer>`.](#describe-the-difference-between-script-script-async-and-script-defer) |
| 32         | [What does a `doctype` do?](#what-does-a-doctype-do)                                                                                                        |
| CSS        |
| 33         | [What is CSS selector specificity?](#what-is-css-selector-specificity)                                                                                      |
| 34         | [Describe Floats and Clear and how they work](#describe-floats-and-clear-and-how-they-work)                                                                 |
| 35         | [Describe z-index and position](#describe-z-index-and-position)                                                                                             |
| 36         | [box model](#box-model)                                                                                                                                     |
| 37         | [What is the CSS display property](#what-is-the-CSS-display-property)                                                                                       |
| 38         | [Block element & inline element](#block-element-&-inline-element)                                                                                           |
| 39         | [pseudo class & pseudo element](#pseudo-class-&-pseudo-element)                                                                                             |

1.  ### What is scope

    The scope determines the accessibility of variables. There are two types of scope

    - Local Scope: Variable is declared inside the function become Local to the function
    - Block Scope: Varialbe declared in the if, switch conditions or for/ whole loops with Let or Const and is only visible in the corresponding block
    - Functon Scope: Variables declared inside the function with Var and is only visible in the function
    - Global Scope: Variable is declared outside all of the function, it is accessible from any inner scope
      **[⬆ Back to Top](#table-of-contents)**

2.  ### What is Closure Curry High order function

    A closure is a feature in JavaScript where an inner function has access to the outer function’s variables — Closure has three scope chain.

    - Own Scope where variable defined between its curly brackets
    - Outer Scope which could access to the outer function's variable
    - Global Scope which could access to the global variable

    A curring function is the process of taking a function with multiple arguments and turning it into a sequence of functions which only with a single argument.

    ```javascript
    const multiArgFunction = (a, b, c) => a + b + c;
    const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
    ```

    Higher order function is a function that take another function as an arguement and return it as variable
    **[⬆ Back to Top](#table-of-contents)**

3.  ### What is Hoisting

    It is a JS mechanism that variable and function declarations are moved to the top of their scope.

    - Function Declaration VS. Function expression
      - function declarations hoist the function definitions
      - Function expression define a fhinction insides an expression and are not hoisted. Ex. TypeError: ... is not a funciton
    - var, let, const - var declaration could be hoisted and initialized with undefined - let / const will not be initialized due to Temporal dead zone. let and const cannot be used before initializing! Ex. ReferenceError
      **[⬆ Back to Top](#table-of-contents)**

4.  ### What is prototype

    Prototypes are the mechanism by which JavaScript objects inherit features from one another. All JavaScript objects inherit properties and method from object propertype

    - Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.
    - HasOwnProperty: Returns a Boolean value indicating whether an object has a property with the specified name
      **[⬆ Back to Top](#table-of-contents)**

5.  ### What is this

    Basically, this keyword refers to the object it belongs to. It has different values depending on where it is used. It has different values depending on where it is used:

    - The default this refers to the global object
    - In a function, this refers to the global object, whereas this is undefined in strict mode
    - In a method, this refers to the owner object
    - In HTML event handlers, this refers to the HTML element that receive the event
    - Explicit Function Binding : Using call(), apply(), or bind() to define the value of this for a function. However, call and apply immediately invoke function but bind return a function
      **[⬆ Back to Top](#table-of-contents)**

6.  ### What is Event Loop

    The event loop is a mechanism of JS to monitor the call stack and the callback queue. If call stack is empty, event loop take the first event from callback queue and push it into Call Stack

    - Call Stack: It is where js code gets pushed and executed one by one and gets poped out once execution is done
    - Callback queue: It is where async code waits for the execution
      **[⬆ Back to Top](#table-of-contents)**

7.  ### What is Object

    - Clone Object

    ```javascript
    // shallow clone
    let obj1 = { ...obj };
    let obj2 = Object.assign({}, obj);

    //deep clone
    let obj3 = JSON.parse(JSON.stringify(obj));

    // Recursive
    function deep(obj) {
      if (obj.constructor !== Object) return obj;
      let targetObj = {};
      for (let item in obj) {
        if (item.constructor == Object) {
          targetObj[item] = deep(item);
        } else {
          targetObj[item] = obj[item];
        }
      }
      return targetObj;
    }
    ```

8.  ### What is Array

    - Flat array

    ```javascript
    function flat1(arr, res = []) {
      if (arr.length === 0) return arr;
      for (let i in arr) {
        if (i.contructor === Array) {
          flat1(i, res);
        } else {
          res.push(i);
        }
      }
      return res;
    }

    function flat2(arr) {
      if (arr.length === 0) return arr;
      const newArr = arr.reduce((acc, next) => {
        if (Array.isArray(next)) {
          acc = acc.concat(flat2(next));
        } else {
          acc.push(next);
        }
        return acc;
      }, []);
      return newArr;
    }
    ```

9.  ### What is Arrow Function

          - Arrow vs General function

    |             | Arrow                                     | General                                                       |
    | ----------- | ----------------------------------------- | ------------------------------------------------------------- |
    | arguement   | Don't have arguement binding              | arguement is array-like object                                |
    | Constructor | Cannot be used as a constuctor            | Regular function could construct objects                      |
    | this value  | Arrow function do not bind their own this | "This" is dynamic which depend on how the function is invoked |

    - Global object
    - Object if in the method
    - implicity object binding refers to the first arguement
    - Constructor using new keyword this refers to the new created object|

10. ### What is the difference between let and var and const
