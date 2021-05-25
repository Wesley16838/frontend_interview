"# frontend_interview"

### Table of Contents

| No.        | Questions                                                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JavaScript |
| 1          | [What is Scope](#what-is-scope)                                                                                                                                                   |
| 2          | [What is Closure Curry High order function](#what-is-closure-curry-high-order-function)                                                                                           |
| 3          | [What is Hoisting](#what-is-hoisting)                                                                                                                                             |
| 4          | [What is Prototype](#what-is-prototype)                                                                                                                                           |
| 5          | [What is "this"](#what-is-this)                                                                                                                                                   |
| 6          | [What is Event Loop](#what-is-event-loop)                                                                                                                                         |
| 7          | [What is Object](#what-is-object)                                                                                                                                                 |
| 8          | [What is Array](#what-is-array)                                                                                                                                                   |
| 9          | [What is Arrow Function](#what-is-arrow-function)                                                                                                                                 |
| 10         | [What is the difference between let and var and const ](#what-is-the-different-between-let-and-var-const)                                                                         |
| 11         | [What are the differences between cookie, local storage and session storage ](#What-are-the-differences-between-cookie-local-storage-and-session-storage)                         |
| 12         | [What is Callback Function](#what-is-callback-function)                                                                                                                           |
| 13         | [What is Promise](#what-is-promise)                                                                                                                                               |
| 14         | [What is Async/Await](#what-is-async-await)                                                                                                                                       |
| 15         | [What is the difference between null and undefined](#what-is-the-difference-between-null-and-undefined)                                                                           |
| 16         | [What is the difference between window and document](#what-is-the-difference-between-window-and-document)                                                                         |
| 17         | [What is DOM](#what-is-dom)                                                                                                                                                       |
| 18         | [What is difference between virtual DOM and real DOM](#what-is-difference-between-virtual-dom-and-real-dom)                                                                       |
| 19         | [What is JSON](#what-is-json)                                                                                                                                                     |
| 20         | [What are primitive/Non-primituve data types](#what-are-primitive-non-primitive--data-types)                                                                                      |
| 21         | [What is the difference between reflow and repaint](#what-is-the-difference-between-reflow-and-repaint)                                                                           |
| 22         | [What is an Event Propagation](#what-is-event-propagation)                                                                                                                        |
| 23         | [What is AJAX](#what-is-ajax)                                                                                                                                                     |
| 24         | [What are Debouncing and Throttling](#what-are-Debouncing-and-throttling)                                                                                                         |
| 25         | [What is MVC](#what-is-mvc)                                                                                                                                                       |
| 26         | [Way to improve performance](#way-to-improve-performance)                                                                                                                         |
| 27         | [== vs ===](#==-vs-===)                                                                                                                                                           |
| 28         | [Falsy value](#falsy-value)                                                                                                                                                       |
| 29         | [Function expression vs function declaration](#function-expression-vs-function-declaration)                                                                                       |
| 30         | ["attribute" and a "property"](#attribute-and-a-property)                                                                                                                         |
| 31         | [CORS](#cors)                                                                                                                                                                     |
| 32         | [Describe the difference between script script async and script defer](#describe-the-difference-between-script-script-async-and-script-defer)                                     |
| 33         | [What does a `doctype` do?](#what-does-a-doctype-do)                                                                                                                              |
| CSS        |
| 34         | [What is CSS selector specificity?](#what-is-css-selector-specificity)                                                                                                            |
| 35         | [Describe Floats and Clear and how they work](#describe-floats-and-clear-and-how-they-work)                                                                                       |
| 36         | [Describe z-index and position](#describe-z-index-and-position)                                                                                                                   |
| 37         | [box model](#box-model)                                                                                                                                                           |
| 38         | [What is the CSS display property](#what-is-the-CSS-display-property)                                                                                                             |
| 39         | [Block element & inline element](#block-element-&-inline-element)                                                                                                                 |
| 40         | [pseudo class & pseudo element](#pseudo-class-&-pseudo-element)                                                                                                                   |
| 41         | [Comparison Angular vs. React vs. Vue](#comparison-angular-vs-react-vs-vue)                                                                                                       |
| 42         | [Nullish coalescing operator and logical OR operator and unary plus](#nullish-coalescing-operator-and-logical-or-operator-and-unary-plus)                                         |
| 43         | [CSS Selector](#css-selector)                                                                                                                                                     |
| 44         | [What is http](#what-is-http)                                                                                                                                                     |
| 45         | [Why and what is Redux](#why-and-what-is-redux)                                                                                                                                   |
| 46         | [React LifeCycle](#react-lifecycle)                                                                                                                                               |
| 47         | [Differences between functional and class-Components](#Differences-between-functional-and-class-Components)                                                                       |
| 48         | [Spread vs rest operators](#Spread-vs-rest-operators)                                                                                                                             |
| 49         | [Class vs Function](#Class-vs-Function)                                                                                                                                           |
| 50         | [useEffect](#useeffect)                                                                                                                                                           |
| 51         | [What are Higher-Order components](#What-are-Higher-Order-components)                                                                                                             |
| 52         | [What are refs used for in React](#What-are-refs-used-for-in-React)                                                                                                               |
| 53         | [What is the difference between state and props](#What-is-the-difference-between-state-and-props)                                                                                 |
| 54         | [What is the purpose of using super constructor with props argument](#What-is-the-purpose-of-using-super-constructor-with-props-argument)                                         |
| 55         | [What is the difference between a Controlled component and an Uncontrolled one in React](#What-is-the-difference-between-a-Controlled-component-and-an-Uncontrolled-one-in-React) |
| 56         | [Hooks vs React](#Hooks-vs-React)                                                                                                                                                 |
| 57         | [Why use bind in React](#Why-use-bind-in-React)                                                                                                                                   |
| 58         | [Presentational vs Container](#Presentational-vs-Container)                                                                                                                       |
| Bonus      |
| 1          | [Difference between Methods and Functions](#difference-between-methods-and-functions)                                                                                             |
| 2          | [How to optimize React](#How-to-optimize-React)                                                                                                                                   |
| 3          | [Fix 0.1 + 0.2 = 0.300000004 in JavaScript](#Fix-0.1-+-0.2-=-0.300000004-in-JavaScript)                                                                                           |
| 4          | [Advantages of JavaScript ES6 over ES5](#Advantages-of-JavaScript-ES6-over-ES5)                                                                                                   |
| 5          | [Difference Between Window onload and document ready](#Difference-Between-Window-onload-and-document-ready)                                                                       |
| 6          | [Axios VS Fetch](#Axios-vs-fetch)                                                                                                                                                 |
| 7          | [JSX](#JSX)                                                                                                                                                                       |
| 8          | [Choose framework](#Choose-framework)                                                                                                                                             |
| 9          | [SSR VS CSR](#SSR-VS-CSR)                                                                                                                                                         |

1.  ### What is scope

    The scope determines the accessibility of variables. There are two types of scope(變數在程式中可以被存取的範圍)

    - Local Scope: Variable is declared inside the function become Local to the function

      - Block Scope: Variables (let,const) declared within a block such as if condition, switch of for loop can only be access within it.

      - Functon Scope: Variables declared inside the function with Var and is accessible inside that function but not outside of it

    - Global Scope: Variable is declared outside all of the function, it is accessible from any inner scope
      > Scope Chain: If a variable does not exist in the current scope it look ups and searches for a variable in the outer scope and if does not exist again it looks up again until it reaches the global scope if the variable exists then we can use it if not it throws an error. It searches for the nearest variable and it stops searching or looking up once it finds it. This is called Scope Chain.
          **[⬆ Back to Top](#table-of-contents)**

2.  ### What is Closure Curry High order function

    - A closure is a feature in JavaScript where an inner function has access to the outer function’s variables. (閉包是由函式引用其周邊狀態(詞法環境)綁在一起形成的(封裝)組合結構。在 JavaScript 中，閉包在每個函式被建立時形成。實際上，由於閉包與它的詞法環境綁在一起，因此閉包讓我們能夠從一個函式內部訪問其外部函式的作用域。)

      - The scope manages the accessibility of variables. There can be a function or a block scope.

      - The lexical scope allows a function scope to access statically the variables from the outer scopes.

      - Finally, a closure is a function that captures variables from its lexical scope. In simple words, the closure remembers the variables from the place where it is defined, no matter where it is executed.

    - A curring function is the process of taking a function with multiple arguments and turning it into a sequence of functions which only with a single argument.

    ```javascript
    const multiArgFunction = (a, b, c) => a + b + c;
    const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
    ```

    - Higher order function is a function that take another function as an arguement and return it as variable
      **[⬆ Back to Top](#table-of-contents)**

3.  ### What is Hoisting

    It is a JS mechanism that variable and function declarations are moved to the top of their scope and give them a default value of undefiend during compile time. To explain more, we need to know the Execution Context is the environment of code that is currently executing and it has two phases: Compilation and Execution.

    1. Compilation: in this phase it gets all the function declaration and hoists them up to the top of their Scope and give them a default value of undefiend.
    2. Execution: In this phase, it assigns the value to the variable which was hoisted earlier and executes the function

    - Function Declaration VS. Function expression

      1. Function declarations:

      - Hoist the function definitions
      - Lifecycle: Cannot be removed once be declared

      2. Function expression:

      - Define a function(anonymous function) insides an expression and are not hoisted. Ex. TypeError: ... is not a funciton
      - Closure
      - IIFE(Immediately Invoked Function Expressions)
        - A JavaScript immediately invoked function expression is a function defined as an expression and executed immediately after creation.
        - The reasons use IIFE is "prevent the functions and variables from polluting the global object" because "Function and variable defined in IIFE cannot be accessed outside the IIFE block
        - Helps us manage memory in an efficient manner
          - A function Instance is created.
          - Function is Executed.
          - Function created is discarded.
      - Pass as an arguement
      - Lifecycle: Can be removed after be declared
      - Does not pollute the global namespace

      3. Conclusion
         > use function declarations when you want to create a function on the global scope and make it available throughout your code. Use function expressions to limit where the function is available, keep your global scope light, and maintain clean syntax.

    - var, let, const - var declaration could be hoisted and initialized with undefined - let / const will not be initialized due to Temporal dead zone. let and const cannot be used before initializing! Ex. ReferenceError
      **[⬆ Back to Top](#table-of-contents)**

4.  ### What is prototype

    Prototypes are the mechanism by which JavaScript objects inherit features from one another. All JavaScript objects inherit properties and method from object propertype(es5 vs es6 Inheritance)

    - Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.
    - HasOwnProperty: Returns a Boolean value indicating whether an object has a property with the specified name
      **[⬆ Back to Top](#table-of-contents)**

5.  ### What is this

    Basically, Depends on how the function is called and this keyword refers to the object it belongs to. It has different values depending on where it is used. It has different values depending on where it is used:

    - The default this refers to the global object
    - In a function, this refers to the global object, whereas this is undefined in strict mode
    - Within methods on objects, this refers to the owner object
    - Within an object that has been constructed, this refers to the object that has been constructed
    - Explicit Function Binding : A function invoked with .call, .apply, or bind, this can refer this to any object. However, call and apply immediately invoke function but bind return a function
    - In HTML event handlers, this refers to the HTML element that receive the event

    ```javascript
    var myObject = {
      property: this,
      regularFunction: function () {
        return this;
      },
      arrowFunction: () => {
        return this;
      },
      iife: (function () {
        return this;
      })(),
    };
    myObject.regularFunction(); // myObject
    myObject["regularFunction"](); // my Object

    myObject.property; // NOT myObject; lexical `this`
    myObject.arrowFunction(); // NOT myObject; lexical `this`
    myObject.iife; // NOT myObject; lexical `this`
    const regularFunction = myObject.regularFunction;
    regularFunction(); // NOT myObject; lexical `this`
    ```

    **[⬆ Back to Top](#table-of-contents)**

6.  ### What is Event Loop

    The event loop is a mechanism of JS to monitor the call stack and the event queue. Altough JS executes operations on a single thread, Event loop makes JS looks like multiple thread.
    To explain more, I would like to explain how each part works in the event loop first.

    - Call Stack: It is the place Operations are pushed in and executed one by one and once be finished, it will be poped out from the stack.
    - Browser API: It is a container to store async action such as HTTP request or settimeout. The async actions will be added to the event queue once be trigger.
    - Event queue: It is where async code waits for the execution

    When executing the event, it will be pushed into call Stack, and if this event is async, it will be added to web API and enqueue to event queue once be triggered.If call stack is empty, event loop take the first event from callback queue and push it into Call Stack

    > Priority: Tasks -> microtasks 如 promise -> queues 非同步事件如 click、setTimeout、ajax
    > **[⬆ Back to Top](#table-of-contents)**

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

    **[⬆ Back to Top](#table-of-contents)**

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

    **[⬆ Back to Top](#table-of-contents)**

9.  ### What is Arrow Function

            - Arrow vs General function

              |             | Arrow                                     | General                                                       |
              | ----------- | ----------------------------------------- | ------------------------------------------------------------- |
              | arguement   | Don't have arguement binding              | arguement is array-like object                                |
              | Constructor | Cannot be used as a constuctor            | Regular function could construct objects                      |
              | this value  | Arrow function do not bind their own this | "This" is dynamic which depend on how the function is invoked |

            > Arrow functions can be called with multiple arguments, but they don’t have their own arguments pseudo-parameter

            ```javascript
              let sum = () => {
                console.log(arguments.length + " arguments");
              }
              sum(1,2,3); //arguments is not defined

              // use rest parameter syntax
              let sum = (...args) => {
                console.log(args.length + " arguments");
              }
              sum(1,2,3); //3 arguments

            ```

    **[⬆ Back to Top](#table-of-contents)**

10. ### What is the difference between let and var and const

        | Var                                             | Let                         | Const                              |
        | ----------------------------------------------- | --------------------------- | ---------------------------------- |
        | Function Scope                                  | Block Scope                 | Block Scope                        |
        | Declaration hoisted and initialize as undefined | Hoisted but not initialized | oisted but not initialized         |
        | updated and re-declared                         | updated but not re-declared | neither be updated nor re-declared |

    **[⬆ Back to Top](#table-of-contents)**

11. ### What are the differences between cookie, local storage and session storage

        | cookie                                                           | local storage         | session storage                             |
        | ---------------------------------------------------------------- | --------------------- | ------------------------------------------- |
        | Has different expiration dates                                   | No expiration date    | Data is gone when you close the browser tab |
        | The Client can't access the Cookies if the HttpOnly flag is true | Client only           | Client only                                 |
        | Smallest                                                         | Maximum Storage limit | Larger then cookie                          |

    **[⬆ Back to Top](#table-of-contents)**

12. ### What is Callback Function
    > A callback is a function passed into another function as an argument and will be executed after finish outer function. Ex. Fetching data from database, making API request.

- callback in callback: When callback becomes more nested , the code will becomes more difficult. We call it callback hell.

```javascript
function func1(x) {
  console.log(x);
}
var arr = [1, 2, 3, 4, 5];
function func2(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback(arr);
}

func2(arr, func1);
```

**[⬆ Back to Top](#table-of-contents)**

13. ### What is Promise
    > Promise was introduced in ES6 to resolve the callback hell issue and handle async operation. It is an object that will be available in the future.(Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值)

Promise has three different states: 1. Fulfilled 2. Rejected 3. Pending

- FulFilled: operation was completed successfully
- Rejected: operation failed
- Pending: initial state

We usually use .then, .catch, .finally promise method to implement promise chain

- Promise.all(): returns a single promise that resolves when all of the passed-in promises have resolved. It rejects if one of the promises is rejected.
- Promise.race(): returns a promise that resolves or rejects as soon as one of the promises resolves or rejects.

- Print A,B,C in the order

```javascript
// callback
function printString(string, callback) {
  setTimeout(
    () => {
      console.log(string);
      callback();
    },
    1 * 1000 // 1s
  );
}

function printAll() {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
}

// Promise
function printString(string) {
  let promise = new Promise((res, rej) => {
    setTimeOut(() => {
      console.log(string);
      res();
    }, 1000);
  });
  return promise;
}

function printString(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, 1 * 1000);
  });
}

function printAll() {
  printString("A")
    .then(() => printString("B"))
    .then(() => printString("C"));
}

//Promise
function add(para) {
  return new Promise((resolve, reject) => {
    resolve(para + para);
  });
}
run(2)
  .then((a) => run(a))
  .then((b) => run(b));

// Async&Await
async function add(para) {
  return para + para;
}
(async () => {
  let a = await add(2);
  let b = await add(a);
  let c = await add(b);
  return c;
})();
```

**[⬆ Back to Top](#table-of-contents)**

14. ### What is Async/Await

    > Basically, async and await make promises easier to write. async makes a function return a Promise. await makes a function wait for a Promise. We use try and catch to handle error

    - Synchronous means each operation must wait for the previous one to complete.
    - Asynchronous means an operation can occur while another operation is still being processed.
      **[⬆ Back to Top](#table-of-contents)**

15. ### What is the difference between null and undefined

    > Undefined means the variable has been declared but hasn't assign value to it; whereas, Null is a value represents 'no value'
    > **[⬆ Back to Top](#table-of-contents)**

16. ### What is the difference between window and document

- window is actual global object which means It is the root level element in any web page and all global variables are defined on window object such as alert() methods
- document is where the DOM is and direct child of the window and can be accessed via window.document
  **[⬆ Back to Top](#table-of-contents)**

17. ### What is DOM

    > It is short for Document object Model and be created When a web page is loaded. It is constructed as a tree of object! JavaScript ccould access and change all HTML elements and attribute via DOM.

    ```javascript
    // traverse parent node
    var el = document.getElementById("..."); // start element
    var a = findUpTag(el, "A"); // search <a ...>
    if (a) console.log(a.id);

    function findUpTag(el, tag) {
      while (el.parentNode) {
        el = el.parentNode;
        if (el.tagName === tag) return el;
      }
      return null;
    }
    //travers children nodes // recursive!
    const list = document.querySelector("#list");
    const children = list.childNodes;
    const len = children.length;
    for (let i = 0; i < len; i++) {
      if (children[i].id === "three") {
        // remove the item with id="three"
        children[i].parentNode.removeChild(children[i]);
      }
      console.log(children[i].nodeName);
    }
    ```

**[⬆ Back to Top](#table-of-contents)**

18. ### What is difference between virtual DOM and real DOM
    | Real                    | Virtual                        |
    | ----------------------- | ------------------------------ |
    | Directly update ALL DOM | Cannot directly update all dom |
    ｜ Update slow because repaint and reflow the UI ｜ Using diffing algo to compare current and prev dom and virtual DOM calculates the best possible method to make these changes to the real DOM ｜

> Shallow vs Virtual
> Virtual DOM is creating a copy of the whole DOM object, and Shadow DOM creates small pieces of the DOM object which has their own, isolated scope for the element they represent.
> **[⬆ Back to Top](#table-of-contents)**

19. ### What is JSON

    > JSON is a syntax for storing and exchanging data.
    > When exchanging data between a browser and a server, the data can only be text.
    > JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.
    > We can also convert any JSON received from the server into JavaScript objects.

    ```javascript
    JSON.stringify();
    JSON.parse();
    ```

20. ### What are primitive/Non-primituve data types
    > Primitive data types are number, string, boolean, NULL, Infinity and symbol. Non-primitive data types is the object. The JavaScript arrays and functions are also objects.
    > Pass by value & Reference

- Pass by value: b = a => "a" create location in memory to store info and points the varialbe to that address. When we assign "a" to "b", it will create another address to store copy of 'a' value.
- Pass by variable: b = a => a will be pointed to the address just created in memory and b will also be assign to the same address.
  **[⬆ Back to Top](#table-of-contents)**

21. ### What is the difference between reflow and repaint
    How browser render data:

- Build Dom tree
- Build CSS tree
- Combine to rendertree
- reflow: compute the layout for each visible element
- repaint: paint the renfertree to the screen

  > A repaint occurs when changes are made which affect the visibility of an element. For examples , visibility, or background color.
  > Reflow means re-calculating the positions of elements in the document. The Reflow happens when changes affect the layout of the partial or whole page

- How to minimize them?
  - Change classname rather than changing style
  - Use fragment to hold temp changes
    **[⬆ Back to Top](#table-of-contents)**

22. ### What is an Event Propagation
    Event Propagation(事件傳遞機制) is the process when event is invoked
    There are three phase of event flow:

- Event Capturing : Event goes down to the element from outer event handlers!
- Target Phase : Target element! (End of the capturing and the beginning of the bubbling)
- Event Bubbling : Event bubble up from the element! (When event was trigger, it first run the handler on the target, and then its parent and all the way up to the other ancestor.)

- Event Delegation: Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. That event listener analyses bubbled events to find the specific child element.

```javascript
<ul id="list">
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
</ul>
// Before using delegated event
let elements = document.querySelectorAll('ul > li > a');
for (let elem of elements) {
    elem.addEventListener('click', function(e){
       console.log(e.target)
      // to something
    })
}

// Attach a delegated event handler
document.getElementById('list').addEventListener('click', function(e){
    if (e.target.tagName == 'a'){
      console.log(e.target)
      // to something
    }
}
```

**[⬆ Back to Top](#table-of-contents)**

23. ### What is AJAX
    AJAX stands for Asynchronous JavaScript and XML. It allows web pages to be updated asynchronously. In other words, it sends and retrieves data without reloading the web page.

- sync vs async
  For Synchronous, each statement waits for the previous statement to finish before running. Asynchronous code doesn't have to wait. In other works, Synchronous request blocks the user until a response is retrieved whereas asynchronous doesn't block the user
  **[⬆ Back to Top](#table-of-contents)**

24. ### What are Debouncing and Throttling

    Throttling: is a technique that no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.
    Debouncing: it a technique that no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event
    **[⬆ Back to Top](#table-of-contents)**

25. ### What is MVC
    MVC stands for Model-View-Controller. It is a design pattern which composed of three components.

- Model: Managing the data for an application
- View: View display model data to the user and also enables them to modify them
- Controller: The controller handles the user request and updates the model and returns the appropriate view as a response

- MVC vs FLUX vs REDUX
  ｜ MVC ｜ FLUX(Flux is an application architecture) ｜ REDUX ｜
  |-----|-----|-----|
  |Three layer architecture: Model/ Controller/ View | Store/ Action/ View/ Dispatcher| Action/ Reducer/ Store|
  ||view creates actions -> send it to the dispatcher -> dispatches the action result to the store -> update to the view.||
  |two way|One-way|One way|
  |No store|Multiple stores| Single store|
  |Controller handle logic|Store handles logic|Reducer handle all logic|

- SPA
  **[⬆ Back to Top](#table-of-contents)**

26. ### Way to improve performance

- CSS Sprites
- Load JavaScript asyncly(defer)
- Lazy Loading
- Minimize image size
- Reduce the number of HTTP requests
- Reduce the times of reflows. Ex. Update element by changing classname except change style one by one
- Do not use inline JavaScript because Script will need to be downloaded each time when loading page
  **[⬆ Back to Top](#table-of-contents)**

27. ### == vs ===
    > “==” is used to compare values whereas, “ === “ is used to compare both value and types.
    > **[⬆ Back to Top](#table-of-contents)**
28. ### Falsy value

    > !! is not an operator, it's just the ! operator twice(Converts Object to boolean)

29. ### Function expression vs function declaration

- Function Declaration VS. Function expression

  1. Function declarations:

  - Hoist the function definitions
  - Lifecycle: Cannot be removed once be declared

  2. Function expression:

  - Define a function(anonymous function) insides an expression and are not hoisted. Ex. TypeError: ... is not a funciton
  - Closure
  - IIFE(Immediately Invoked Function Expressions)
    - A JavaScript immediately invoked function expression is a function defined as an expression and executed immediately after creation.
    - The reasons use IIFE is "prevent the functions and variables from polluting the global object" because "Function and variable defined in IIFE cannot be accessed outside the IIFE block
    - Helps us manage memory in an efficient manner
      - A function Instance is created.
      - Function is Executed.
      - Function created is discarded.
  - Pass as an arguement
  - Lifecycle: Can be removed after be declared
  - Does not pollute the global namespace

  3. Conclusion
     > use function declarations when you want to create a function on the global scope and make it available throughout your code. Use function expressions to limit where the function is available, keep your global scope light, and maintain clean syntax.

30. ### "attribute" and a "property"

- The Attributes are defined by HTML whereas the properties are defined by the DOM.
- The attribute’s main role is to initializes the DOM properties. So, once the DOM initialization complete, the attributes job is done.
- Property values can change, whereas the attribute values can never be changed.
  **[⬆ Back to Top](#table-of-contents)**

31. ### CORS

    CORS stand for Cross-Origin Resource Sharing which allows you to make requests from one domain to another domain. For security reasons, browsers restrict cross-origin HTTP requests due to Same-origin policy and it’s a security mechanism to protect users. Basically we enable cross origin access on the serverby set Access-Control-Allow-Origin to \*(all)

32. ### Describe the difference between script script async and script defer

- Basic
  - HTML page is parsed by the browser
  - Parser encounters the Script tag
  - Parsing of the HTML is paused
  - Go fetch external Js file
  - JavaScript is executed
  - HTML parsing is resumed
- Async
  - the file gets downloaded asynchronously
  - Once it has been fetched, HTML parsing is stopped
  - JavaScript is executed
  - HTML parsing is resumed
- With defer, the file gets downloaded asynchronously, but executed only when the document parsing is completed.
  - Scripts with defer never block the page.
  - Scripts with defer always execute when the DOM is ready
- The difference between async and defer is that async scripts will not execute in order
  **[⬆ Back to Top](#table-of-contents)**

33. ### What does a `doctype` do?

Doctype stands for Document Type Declaration. It informs the web browser about the type and version of HTML used in building the web document. This helps the browser to handle and load it properly.

**[⬆ Back to Top](#table-of-contents)**

34. ### What is CSS selector specificity?
    Specificity means decide which CSS property are the most relevant to the element and then applied (決定你的元素優先吃哪一個樣式)

- !important
- Inline Style
- ID Selector
- Class Selector
- Type Selector

**[⬆ Back to Top](#table-of-contents)**

35. ### Describe Floats and Clear and how they work

- The float CSS property places an element on the left or right side of its container
- The clear property specifies what element shouldn't be floated or should be floated

  **[⬆ Back to Top](#table-of-contents)**

36. ### Describe z-index and position

- The z-index property specifies the stack order of an element. z-index only works on positioned elements
- Static: Elements are positioned static by default which means not affected by the top, bottom, left, and right properties.
- relative: means be positioned relative to its normal position
- fixed: is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.
- absolute: Be positioned relative to the nearest element's parent. If it has no positioned ancestors, it will be positioned relative to the document body \
- sticky: Toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place.

  **[⬆ Back to Top](#table-of-contents)**

37. ### What is the CSS display property

- Inline: like inline element so any height and width properties will have no effect.
- Block: like block element and start on a new line and could set up width, and height.
- flex: Display element as a block-level flex containter
- grid: Display element as a block-level grid containter
- Flex vs Grid
  Grid is Container-Based, Flexbox is Content-Based( Grid good for layout and glex good for small area content) - In flexbox, size of item is defined inside the flex-item itself, whereas the size of items in grid layout is defined in grid container

  - Grid Has a “Gap” Property, Flexbox Doesn’t
  - Flexbox is One Dimensional, Grid is Two Dimensional
    - Flexbox need to decide row-based or column-base(flex-direction), whereas grid work column and row together!(grid-template-rows/columns)
  - CSS grid is for layout, Flexbox is for alignment, Grid help us build more complicated layout due to two dimention

    - Using flexbox when
      1.  Small design to implement with few rows and columns
      2.  You need to align elements
      3.  You need a content-first design
    - Using grid when
      1.  Complex design to implement
      2.  have a gap between block elements
      3.  Overlap elements
      4.  A layout-first design

    **[⬆ Back to Top](#table-of-contents)**

38. ### pseudo class & pseudo element

- A CSS pseudo-element is used to style specified parts of an element.
- A pseudo-class is used to define a special state of an element.
  **[⬆ Back to Top](#table-of-contents)**

39. ### Block element & inline element
    > HTML element has a default display value, depending on what type of element it is. There are two display values: block and inline.

- Block Element: A block-level element always starts on a new line. Can add width, height, padding and margin
  - Ex. <div>, <footer>, <form>, <h1>-<h6>, <header>, <hr>, <ul>&<li>&<ol>, <p>
- Inline Element: An inline element does not start on a new line. You can add space to the left and right on an inline element, but you cannot add height/ line-height or padding or margin of an inline element.
  - Ex. <Span>, <a>, <img>, <label>,
- Inline-Block Element: Inline-block elements are similar to inline elements(not start on a new line), except they can have padding and margins added on all four sides.
  - Ex. <input>, <button>, <select>, <textarea>
    **[⬆ Back to Top](#table-of-contents)**

40. ### pseudo class & pseudo element

- A CSS pseudo-element is used to style specified parts of an element.
- A pseudo-class is used to define a special state of an element.
  **[⬆ Back to Top](#table-of-contents)**

41. ### Comparison Angular vs. React vs. Vue

    |           | Angular    | React               | Vue                          |
    | --------- | ---------- | ------------------- | ---------------------------- |
    | Language  | TypeScript | JavaScript XML(JSX) | HTML template and JavaScript |
    | Model     | MVC        | Virtial DOM         | Virtial DOM                  |
    | Data Flow | Two-Way    | One-Way             | Both                         |

**[⬆ Back to Top](#table-of-contents)**

42. ### Nullish coalescing operator and logical OR operator and unary plus

        - logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.
        - The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
        - In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., '' or 0).
        - The unary plus tries to convert an operand to a number. true is 1, and false is 0.

    **[⬆ Back to Top](#table-of-contents)**

43. ### CSS Selector
    - div, p: Selects all <div> elements and all <p> elements
    - div p: Selects all <p> elements inside <div> elements
    - div > p: Selects all <p> elements where the parent is a <div> element
    - div + p: Selects the first <p> element that is placed immediately after <div> elements
    - p.intro(.class1.class2): Selects all <p> elements with class="intro"(Selects all elements with both name1 and name2 set within the class attribute)
    - div ~ p: Select element2 that are preceded by element1. Both elements must have the same parent, but element2 does not have to be immediately preceded by element1.
      **[⬆ Back to Top](#table-of-contents)**
44. ### What is http
    > HTTP stands for Hyper Text Transfer Protocol. Communication between client computers and web servers is done by sending HTTP Requests and receiving HTTP Responses

- GET: Retrieves data from the server
- POST: Sends data to the server for a new entity
- PUT: Similar to POST, but used to replace an existing entity
- PATCH: Similar to PUT, but used to update only certain fields within an existing entity
- DELETE: Removes data from the server

  **[⬆ Back to Top](#table-of-contents)**

45. ### Why and what is Redux
    > Redux is a state management container. It can easily manage the states between the components. There are three building part of Redux below:

- store: Store is the object which holds the state of the application (Basically using mapStateToProps, mapDispatchToProps and connect React component to Redux Store)

```javascript
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" }),
  };
};
```

- action: Action is an event object that contains action type and payload. Using Dispacth to call action anywhere in the app
- reducer: Reducer takes current state and incoming action then return the new state to update the store
  - createStore
  - dispatch(action)
  - getState
- Middleware: Redux Thunk/ Debug
  **[⬆ Back to Top](#table-of-contents)**

46. ### React LifeCycle

- Mounting

  - constructor(initialize state and bind event handlers methods, call super(props) to get props from parent)
  - getDerivedStateFromProps
  - render: render elements to the DOM
  - componentDidMount: After render is called, the component is mounted to the DOM
    - Grab a DOM node from the component tree
    - Set up subscription such as addeventlistener
    - Fetch data

- Updating

  - getDerivedStateFromProps(static function ,replace componentWillReceiveProps and update state or null based on the changes of props)
  - shouldComonentUpdate: Return a boolean  —  true or false to control whether the component should be rerendered or not
    - nextProps.value !== this.props.value
  - Render
  - getSnapshotBeforeUpdate: The getSnapshotBeforeUpdatelifecycle method stores the previous values of the state after the DOM is updated

  - ComponentDidUpdate: Receives the previous props and state
    - call api
    - set State
    - Wrap in the condition such as this.props.name !== prevProps.name or it will cause an infinite loop

- unMounting

  - componentWillUnmount: Clearing up timers, cancelling network requests, or cleaning up any subscriptions that were created in componentDidMount()

- Order of lifecycle between parent and child
  - Mounting: parent(from contructor to render) -> child(mounting) -> parent(componentDidMount)
  - Updating: parent(from getDerived to render) -> child(from getDerived to getSnapshotBeforeUpdate) -> parent(getSnapshotBeforeUpdate) -> child(componentDidUpdate) -> parent(componentDidUpdate)
  - unmounting: parent(componentWillUnmount) -> child(componentWillUnmount)
    **[⬆ Back to Top](#table-of-contents)**

47. ### Differences between functional and class-Components

- Syntax
  - A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.
  - A class component requires you to extend from React.Component and create a render function which returns a React element.
- State
  - cannot use setState() because functional component is a plain JavaScript function
- Life Cycle
  - All lifecycle are coming from the React.Component which you extend from in class components.
- Size
  - If compare them using ES5, the size of class component file will much bigger than stateless component file(functional)
    **[⬆ Back to Top](#table-of-contents)**

48. ### Spread vs rest operators

- Rest parameter: collects all remaining elements into an array
- Spread operator: allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements.
  **[⬆ Back to Top](#table-of-contents)**

49. ### Class vs Function

- function

  - hoisted
  - can be redeclared
  - hoisted to the global

- class
  - not hoisted
  - cannot be redeclared
  - block scope
    **[⬆ Back to Top](#table-of-contents)**

50. ### useEffect

    > useEffect lets you implement side effects in function component includea fetching data, subscriptions. useEffect conbines three component lifecycle includes ComponentDidMount, ComponentDidUpdate, ComponentWillUnmout.

    - Second arguement: React compares the current value of dependency and the value on previous render. If they are not the same, effect is invoked.(Dependecies are value defined outside useeffect but are being used inside useeffect) If you ignore it, effect will be executed after every render. If you want effect to be executed only on first render, you can pass an empty array.
      > **[⬆ Back to Top](#table-of-contents)**

51. ### What are Higher-Order components
    > A higher-order component (HOC) is a function that takes a component and returns a new component which allow to reuse component logic.
    - HOC called connect to map store state to props.
      > **[⬆ Back to Top](#table-of-contents)**
52. ### What are refs used for in React
    > Allow you to get direct access to a DOM element
    ```javascript
    //hooks
    const elementRef = useRef();
    const divElement = elementRef.current;
    return <div ref={elementRef}>I'm an element</div>;
    //class
    this.myRef = React.createRef();
    const node = this.myRef.current;
    render() {
    return <div ref={this.myRef} />;
    }
    ```
    **[⬆ Back to Top](#table-of-contents)**
53. ### What is the difference between state and props

- Props is an object get passed to the component from parent to child
- State is the data managed within the component
  **[⬆ Back to Top](#table-of-contents)**

54. ### What is the purpose of using super constructor with props argument
    > A child class constructor cannot make use of this reference until super() method has been called.And The main reason of passing props parameter to super() call is to access this.props in your child constructors
    > **[⬆ Back to Top](#table-of-contents)**
55. ### What is the difference between a Controlled component and an Uncontrolled one in React

- Controlled component: The form data is handled by the state within the component
- Uncontroller component: The data for each input element is stored in the DOM, not in the component.
  **[⬆ Back to Top](#table-of-contents)**

56. ### Hooks vs React

- Advantages of using React Hooks
  - Could control react state and life-cycle features inside function components
  - Syntax easier
  - No more method bindings
  - No worry about “this”
    - Binding ‘this’ to the class methods enables us to access props and state for the component with this.props and this.state.
      **[⬆ Back to Top](#table-of-contents)**

57. ### Why use bind in React
    > It bases on how 'this' works in JavaScript. 'this' reference inside functions can be bound to different objects depending on where the function is called.
    > If we don’t bind the method. the value inside the method will points to the global object or undefined becasue it is a plain function call without an owner object. Thus, we can explicitly hard bind the this value to a function by using the bind() method.

- Why arrow not bind?

  - The value of the this keyword inherited from the parent’s scope (this is called lexical scoping) which is class.

**[⬆ Back to Top](#table-of-contents)**

58. ### Presentational vs Container

- Presentational Component
  - Concerned with how things look
  - Receive data and callbacks using props
- Container Component
  - Concerned with how things work(Managing data )
  - Call actions and provide these as callbacks to the presentational components.
  - They often pass data to child components
    **[⬆ Back to Top](#table-of-contents)**

# Bunus

1. ### Difference between Methods and Functions

- Method: JavaScript method is a property of an object that contains a function definition.
- Function: A function is a block of code written to perform some specific set of tasks.
  **[⬆ Back to Top](#table-of-contents)**

2. ### How to optimize React

- Class component: shouldComponentUpdate, PureComponent(state shadow compare)
- Functional component: React.memo
- React Hooks: useMemo
  **[⬆ Back to Top](#table-of-contents)**

3. ### Fix "0.1 + 0.2 = 0.300000004" in JavaScript
   > In short, due to computers working in Base 2 while decimal is Base 10.
   > A simple solution to this problem is:

```javascript
+(0.1 + 0.2).toFixed(1); // 0.3
```

**[⬆ Back to Top](#table-of-contents)**

4. ### Advantages of JavaScript ES6 over ES5

- Arrow function
- Classes
- Block Scoping
- Promise
  **[⬆ Back to Top](#table-of-contents)**

5. ### Difference Between Window onload and document ready
   > In short, use window.onload when your script contains operations on the content. Otherwise, use \$(document).ready().

- Window Onload
  - The window load event is fired when the whole web page has completed loading. It waits for all the elements and the contents
  ```javascript
  window.addEventListener("load", (event) => {
    // insert code here
  });
  window.onload = (event) => {
    // insert code here
  };
  ```
- Document Ready
  - The ready event is fired when the DOM has completed loading. However, it does not wait for the contents such as images or videos
  ```javascript
  $(document).ready(function () {
    //insert code here
  });
  ```
  **[⬆ Back to Top](#table-of-contents)**

6. ### Axios VS Fetch

- Axios vs Fetch

  - Synctax
    - Axios uses the data property, and Fetch uses the body property.
    - Axios data contains the object, and Fetch’s body has to be stringified.
    - Axios Automatically converts a response to JSON but Fetch not
    - Axios supports much more browser.
    - Axios has url in request object, Fetch has no url in request object.
    - Axios could set Response timeout
    - Axios has HTTP interceptors

  ```javascript
  // axios
  axios({
    method: "post",
    url: "/login",
    data: {
      firstName: "shedrack",
      lastName: "akintayo",
    },
  });
  axios.get(apiUrl).then((repos) => {
    const allRepos = repos.data;
    setAppState({ loading: false, repos: allRepos });
  });

  // fetch
  fetch("https://api.github.com/gists", {
    method: "post",
    body: JSON.stringify(opts),
  }).then(function (response) {
    return response.json();
  });
  ```

  **[⬆ Back to Top](#table-of-contents)**

7. ### JSX
   > it is a syntax extension to JavaScript And allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
   > **[⬆ Back to Top](#table-of-contents)**
8. ### Choose framework

- Choose Angular when:
  - You are about to develop a very large and complex project becasue it has a complete development environment(Built-in module system)
  - You need easy and reliable scalability
  - You can afford some time for learning TypeScript before the project starts
- Choose React when:
  - Your project can accept reusable components
  - Your project’s front-end is not too complex
- Choose Vue.js when:
  - Your project scope is on the small side
  - You need high performance
  - You do not have much time to learn a new technology
    **[⬆ Back to Top](#table-of-contents)**

9. ### SSR VS CSR
   > The main difference between CSR and SSR is where the page is rendered

- SEO!!!
  **[⬆ Back to Top](#table-of-contents)**
