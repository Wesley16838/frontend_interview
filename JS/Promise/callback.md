# Callback

> A callback is a function that will be executed after another function gets executed.
> We can also set callback as a parameter of another function and then return callback after finishing function

```javascript
const body = document.getElementsByTagName("body")[0];

function callback() {
  console.log("Hello");
}

body.addEventListener("click", callback);
```

## Callback hell

```javascript
loadScript("/my/script.js", function (script) {
  loadScript("/my/script2.js", function (script) {
    loadScript("/my/script3.js", function (script) {
      // ...continue after all scripts are loaded
    });
  });
});
```
