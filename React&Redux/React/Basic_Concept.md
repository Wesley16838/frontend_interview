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

> useEffect lets you perform(implement) side effects in function components. Side effects are all the operations that affect your component and can’t be done during rendering, things like fetching data, subscriptions or manually changing the DOM. useEffect conbines three component lifecycle includes

1. ComponentDidMount

```javascript
useEffect(() => {
  /* ComponentDidMount code */
}, []);
```

2. ComponentDidUpdate

```javascript
useEffect(() => {
  /* componentDidUpdate code */
}, [var1, var2]);
```

3. ComponentWillUnmout

```javascript
useEffect(() => {
  return () => {
    /* componentWillUnmount code */
  };
}, []);
```

## Second argument to useEffect

> It is an array of dependencies and if you want to control when useeffect is to be executed after mounting, then pass the array as second argument. (Dependecies are value defined outside useeffect but are being used inside useeffect) React compares the current value of dependency and the value on previous render. If they are not the same, effect is invoked. If you ignore it, effect will be executed after every render. If you want effect to be executed only on first render, you can pass an empty array.

### Passing a function as a dependency

> It is not recommended to define a function outside and invoke it inside effect. Bellow case leads to fetchData being invoked on every render because the dependency passed is a function and functions are objects. React will compare fetchData for previous and current render and the two will not be the same hence triggering a call to effect.

```javascript
function App(props) {
  const [data, setData] = useState(null);
  const fetchData = () => {
    //fetch some data
  };
  useEffect(() => {
    fetchData(); //Invoked inside useEffect
  }, [fetchData]);
}
```

# What is Redux AND how does it work?

> Redux is a state management container and it follows one-way binding data flow. The main concepts of Redux are Store, Action and Reducer

- Create an Action with Type and Data which are payload
- An action is dispatched when the user interact with app
- The reducer take the current state and an action as arguemens and return new state to store into store
- View will be re-render if the view use updated state in the store

```javascript
connect;
mapStateToProps;
mapDispatchToProps;
View;
```

# What are controlled components?

# What are the differences between a class component and functional component?

# What is PureComponent? When to use PureComponent over Component?

# What is a higher order component?

> A higher-order component is a function that takes a component and returns a new component.

# What is Redux Thunk used for?

# How Virtual-DOM is more efficient than Dirty checking?

> By using virtual DOM, we can find out what is changed and with that, we can apply only those changes to real DOM instead of replacing entire DOM

# What are controlled and uncontrolled components in React?

# What is React.cloneElement? And the difference with this.props.children? (What is the difference between createElement and cloneElement?)
