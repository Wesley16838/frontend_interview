<div onclick="console.log('div')">
  <p onclick="console.log('p')">Click here!</p>
</div>;

// p div
// By default, event handlers are executed in the bubbling phase (unless you set useCapture to true)

// stopPropagation prevents further propagation of the current event in the capturing and bubbling phases.

// preventDefault prevents the default action the browser makes on that event.
