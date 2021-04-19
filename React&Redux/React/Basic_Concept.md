# What is Virtual DOM

# What are the different phases of React component lifecycle?

# Is setState() is async? Why is setState() in React Async instead of Sync?

> React may batch multiple setState() calls into a single update for performance. This means that accessing the state immediately after call setState can possibly return the old value. The purpose is to avoid performance issue related to re-render
> Ex. if we only call setState, it will immediately update state, but if we put setState in Event Handler such as onClick, onChange, it will only be execute one time

- Using updater function could get old state value [Counter](https://codesandbox.io/s/counter-ub21y)

# Why use bind in React

> It bases on how 'this' works in JavaScript. 'this' reference inside functions can be bound to different objects depending on where the function is being called.

1. This is a plain function call. The value of this inside the display() method is bound to the window or global and if in strict mode, it is undefined!

```javascript
function display() {
  console.log(this); // 'this' will point to the global object
}

display();
```

2. Implicit binding
   > When we call a function in this object, the this value inside display() is bound to obj.

```javascript
var obj = {
  name: "Saurabh",
  display: function () {
    console.log(this.name); // 'this' points to obj
  },
};

obj.display(); // Saurabh
```

> But when we assign this function reference to some other variable and invoke the function using this new function reference, we get a different value of this inside display().

```javascript
var name = "uh oh! global";
var outerDisplay = obj.display;
outerDisplay(); // uh oh! global
```

> In the above example, when we call outerDisplay(), we don’t specify a context object. It is a plain function call without an owner object. In this case, the value of this inside display() falls back to default binding. It points to the global object or undefined if the function being invoked uses strict mode.

3. Explicit Hard Binding
   > we can explicitly hard bind the this value to a function by using the bind() method.

```javascript
var name = "uh oh! global";
obj.display = obj.display.bind(obj);
var outerDisplay = obj.display;
outerDisplay();

// Saurabh
```

```javascript
class Foo {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log(this.name);
  }
}

var foo = new Foo("Saurabh");
foo.display(); // Saurabh

// The assignment operation below simulates loss of context
// similar to passing the handler as a callback in the actual
// React Component
var display = foo.display;
display(); // TypeError: this is undefined
// The bodies of class declarations and class expressions are executed in strict mode
```

# Why don’t we need to bind ‘this’ for Arrow functions?

> The value of the this keyword doesn’t get rebound, but it’s inherited from the parent’s scope (this is called lexical scoping). In the case of the public class fields syntax example, the arrow function is enclosed inside the Foo class — or constructor function — so the context is the component instance, which is what we want.

# What does useEffect do?
> useEffect lets you perform side effects in function components. Side effects are all the operations that affect your component and can’t be done during rendering,  things like fetching data, subscriptions or manually changing the DOM .
useEffect() hook accepts 2 arguments
# What is Redux AND how does it work?

# What are controlled components?

# What are the differences between a class component and functional component?

# What is PureComponent? When to use PureComponent over Component?

# What is a higher order component?

# What is Redux? (Explain the components of Redux.)

# What is Redux Thunk used for?

# How Virtual-DOM is more efficient than Dirty checking?

# What are controlled and uncontrolled components in React?

# What is React.cloneElement? And the difference with this.props.children? (What is the difference between createElement and cloneElement?)