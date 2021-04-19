# Promise

## What is promise?

> A promise represents an operation that hasn't completed yet; Or defined as a proxy for a value that will eventually become available. A Promise is in one of these states: pending: initial state, neither fulfilled nor rejected. fulfilled: meaning that the operation was completed successfully. rejected: meaning that the operation failed.

> Promise is introduced in ES6 to resolve the callback hell issue and handle asynchronous operations

## Create a Promise

```javascript
// const myPromise = new Promise(function(resolve, reject) {});
let done = true;
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = "Here is the thing I built";
    resolve(workDone);
  } else {
    const why = "Still working on something else";
    reject(why);
  }
});

//Consuming a promise: then, catch, finally
const checkIfItsDone = () => {
  isItDoneYet
    .then((ok) => {
      console.log(ok);
    })
    .catch((err) => {
      console.error(err);
    });
};

// or
const somethingWasSuccesful = true;

function someAsynFunction() {
   return new Promise((resolve, reject){
      if (somethingWasSuccesful) {
         resolve();
      } else {
         reject()
      }
   });
}

someAsyncFunction
   .then(runAFunctionIfItResolved(withTheResolvedValue))
   .catch(orARunAfunctionIfItRejected(withTheRejectedValue));
```

## Chaining promises

## Promise.all()

```javascript
const f1 = fetch("/something.json");
const f2 = fetch("/something2.json");

Promise.all([f1, f2])
  .then((res) => {
    console.log("Array of results", res);
  })
  .catch((err) => {
    console.error(err);
  });
```

## Promise.race()

```javascript
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promiseOne, promiseTwo]).then((result) => {
  console.log(result); // 'two'
});
```
