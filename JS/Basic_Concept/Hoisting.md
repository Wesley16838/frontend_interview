# Hoisting

> Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.

## Function declarations VS expressions

1. Declaration: function declarations hoist the function definitions.Hence, functions declaration can be used before they are declared. Ex. function add(a, b){...}
2. Expression: Initialize value to undefined and undefined is not a function! Ex. var add = function(x, y) {...}

## Var, Let, Const

1. Var: Move varialbe declarations to the top of code and be initialized undefined
2. Let & Const: Hoisted to the top but not initialized due to 'Temporal dead zone// referenceError
