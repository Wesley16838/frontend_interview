```javascript
// print a,b,c in the order
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

printAll();

//promise
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

printAll();

//async&await
async function printAll() {
  await printString("A");
  await printString("B");
  await printString("C");
}

printAll();
```

```javascript
// print [a,b,c] in the order
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
  const arr = ["A", "B", "C"];

  let index = -1;
  printString(arr[++index], () => {
    printString(arr[++index], () => {
      printString(arr[++index], () => {});
    });
  });
}

printAll();
```
