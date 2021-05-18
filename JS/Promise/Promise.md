# Promise

## What is promise?

> In conclusion, Promise is introduced in ES6 to resolve the callback hell issue and handle asynchronous operations. Explain more, a promise represents an operation that hasn't completed yet. A Promise is in one of these three states: pending: initial state, neither fulfilled nor rejected. fulfilled: meaning that the operation was completed successfully. rejected: meaning that the operation failed.

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

```javascript
// Create a promise from scratch
class PromiseSimple {
  constructor(executionFunction) {
    this.promiseChain = [];
    this.handleError = () => {};

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);

    executionFunction(this.onResolve, this.onReject);
  }

  then(handleSuccess) {
    this.promiseChain.push(handleSuccess);

    return this;
  }

  catch(handleError) {
    this.handleError = handleError;

    return this;
  }

  resolve(value) {
    let storedValue = value;

    try {
      this.promiseChain.forEach((nextFunction) => {
        storedValue = nextFunction(storedValue);
      });
    } catch (error) {
      this.promiseChain = [];

      this.onReject(error);
    }
  }

  reject(error) {
    this.handleError(error);
  }
}

let promise = new PromiseSimple((resolver, reject) => {
  if (true) {
    resolver("Success");
  } else {
    reject("Error");
  }
});

promise
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
