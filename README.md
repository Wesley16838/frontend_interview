"# frontend_interview"

### Table of Contents

| No.        | Questions                                                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JavaScript |
| 1          | [What is Scope](#what-is-scope)                                                                                                                             |
| 2          | [What is Closure](#what-is-closure)                                                                                                                         |
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
| Basic      |
|            | [Way to improve web performance](#way-to-improve-performance)                                                                                             |


| Slice                                        | Splice                                          |
| -------------------------------------------- | ----------------------------------------------- |
| Doesn't modify the original array(immutable) | Modifies the original array(mutable)            |
| Returns the subset of original array         | Returns the deleted elements as array           |
| Used to pick the elements from array         | Used to insert or delete elements to/from array |

1. ### What is scope

   There are many ways to create objects in javascript as below

   1. **Object constructor:**

      ```javascript
      var object = new Object();
      ```

      **[⬆ Back to Top](#table-of-contents)**
