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
| 17         | [What is DOM](#what-is-dom)                                                                                                                                 |
| 18         | [What is difference between virtual DOM and real DOM](#what-is-difference-between-virtual-dom-and-real-dom)                                                 |
| 19         | [What is JSON](#what-is-json)                                                                                                                               |
| 20         | [What are primitive/Non-primituve data types](#what-are-primitive-non-primitive--data-types)                                                                |
| 21         | [What is the difference between reflow and repaint](#what-is-the-difference-between-reflow-and-repaint)                                                     |
| 22         | [What is an event flow](#what-is-event-flow)                                                                                                                |
| 23         | [What is AJAX](#what-is-ajax)                                                                                                                               |
| 24         | [What are Debouncing and Throttling](#what-are-Debouncing-and-throttling)                                                                                   |
| 25         | [What is MVC](#what-is-mvc)                                                                                                                                 |
| 26         | [Way to improve performance](#way-to-improve-performance)                                                                                                   |
| 27         | [== vs ===](#==-vs-===)                                                                                                                                     |
| 28         | [Falsy value](#falsy-value)                                                                                                                                 |
| 29         | [Function expression vs function declaration](#function-expression-vs-function-declaration)                                                                 |
| 30         | ["attribute" and a "property"](#attribute-and-a-property)                                                                                                   |
| 31         | [Spread syntax and Rest syntax](#spread-syntax-and-rest-syntax)                                                                                             |
| 32         | [Describe the difference between `<script>`, `<script async>` and `<script defer>`.](#describe-the-difference-between-script-script-async-and-script-defer) |
| 33         | [What does a `doctype` do?](#what-does-a-doctype-do)                                                                                                        |
| CSS        |
| 34         | [What is CSS selector specificity?](#what-is-css-selector-specificity)                                                                                      |
| 35         | [Describe Floats and Clear and how they work](#describe-floats-and-clear-and-how-they-work)                                                                 |
| 36         | [Describe z-index and position](#describe-z-index-and-position)                                                                                             |
| 37         | [box model](#box-model)                                                                                                                                     |
| 38         | [What is the CSS display property](#what-is-the-CSS-display-property)                                                                                       |
| 39         | [Block element & inline element](#block-element-&-inline-element)                                                                                           |
| 40         | [pseudo class & pseudo element](#pseudo-class-&-pseudo-element)                                                                                             |
| 41         | [Comparison Angular vs. React vs. Vue](#comparison-angular-vs-react-vs-vue)                                                                                 |
| 42         | [?? vs                                                                                                                                                      |  | ](#??_vs_ |  | ) |

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

        - Global object
        - Object if in the method
        - implicity object binding refers to the first arguement
        - Constructor using new keyword this refers to the new created object|

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
  **[⬆ Back to Top](#table-of-contents)**

13. ### What is Promise
    > Promise was introduced in ES6 to resolve the callback hell issue and handle async operation. It is an object that will be available in the future.

Promise has three different states: 1. Fulfilled 2. Rejected 3. Pending

- FulFilled: operation was completed successfully
- Rejected: operation failed
- Pending: initial state
- Print A,B,C in the order

```javascript
// callback
function printAll() {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
}

//Promise
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
    .then(() => {
      return printString("B");
    })
    .then(() => {
      return printString("C");
    });
}

//async/await

async function printAll() {
  await printString("A");
  await printString("B");
  await printString("C");
}
```

**[⬆ Back to Top](#table-of-contents)**

14. ### What is Async/Await

    > Basically, async and await make promises easier to write. async makes a function return a Promise. await makes a function wait for a Promise. We use try and catch to handle error
    > **[⬆ Back to Top](#table-of-contents)**

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

22. ### What is an event flow
    Event flow is the process when event is invoked
    There are three phase of event flow:

- Event Capturing : Event goes down to the element from outer event handlers!
- Target Phase : Target element! (End of the capturing and the beginning of the bubbling)
- Event Bubbling : Event bubble up from the element! (When event was trigger, it first run the handler on the target, and then its parent and all the way up to the other ancestor.)
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
- View: Displays the model in the UI
- Controller: Serves as an interface between view & model. It is responsible for updating the model when the user manipulates the view

- MVC vs FLUX vs REDUX
  ｜ MVC ｜ FLUX ｜ REDUX ｜
  |-----|-----|-----|
  |Three layer architecture: Model/ Controller/ View | Store/ Action/ View/ Dispatcher| Action/ Reducer/ Store|
  ||view creates actions -> send it to the dispatcher -> dispatches the action result to the store -> update to the view.||
  |two way|One-way|One way|
  |No store|Multiple stores| Single store|
  |Controller handle logic|Store handles logic|Reducer handle all logic|
  **[⬆ Back to Top](#table-of-contents)**

26. ### Way to improve performance

- CSS Sprites
- Load JavaScript asyncly
- Lazy Loading
- Minimize image size
- Reduce the number of HTTP requests
- Reduce the times of reflows. Ex. Update element by changing classname except change style one by one
  **[⬆ Back to Top](#table-of-contents)**

30. ### "attribute" and a "property"

- The Attributes are defined by HTML whereas the properties are defined by the DOM.
- The attribute’s main role is to initializes the DOM properties. So, once the DOM initialization complete, the attributes job is done.
- Property values can change, whereas the attribute values can never be changed.
  **[⬆ Back to Top](#table-of-contents)**

33. ### What does a `doctype` do?

Doctype stands for Document Type Declaration. It informs the web browser about the type and version of HTML used in building the web document. This helps the browser to handle and load it properly.

**[⬆ Back to Top](#table-of-contents)**

34. ### What is CSS selector specificity?
    Specificity means decide which CSS property are the most relevant to the element and then applied (決定你的元素優先吃哪一個樣式)

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

41. ### Comparison Angular vs. React vs. Vue

    |           | Angular    | React               | Vue                          |
    | --------- | ---------- | ------------------- | ---------------------------- |
    | Language  | TypeScript | JavaScript XML(JSX) | HTML template and JavaScript |
    | Model     | MVC        | Virtial DOM         | Virtial DOM                  |
    | Data Flow | Two-Way    | One-Way             | Both                         |

        **[⬆ Back to Top](#table-of-contents)**

42. ### ?? vs ||
    > logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined.
    > The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
    > In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., '' or 0).
