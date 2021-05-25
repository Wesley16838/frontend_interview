function printString(string) {
  let promise = new Promise((res, rej) => {
    setTimeout(() => {
      console.log(string);
      res();
    }, 1000);
  });
  return promise;
}

function printAll() {
  printString("A")
    .then(() => printString("B"))
    .then(() => printString("C"));
}

printAll();
