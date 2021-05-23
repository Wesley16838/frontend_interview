let Obj = {
  a: 1,
  b: {
    c: 2,
    d: -3,
    e: {
      f: {
        g: -4,
      },
    },
    h: {
      i: 5,
      j: 6,
    },
  },
};
function deepFilter(input, fn) {
  if (!input) return;
  let filteredInput = {};

  for (let key in input) {
    if (typeof input[key] === "object") {
      let filteredChild = deepFilter(input[key], fn);
      if (JSON.stringify(filteredChild) !== "{}") {
        filteredInput[key] = filteredChild;
      }
    } else {
      if (fn(input[key])) {
        // if matches the rule
        filteredInput[key] = input[key]; // add it to the result object
      }
    }
  }

  return filteredInput;
}
console.log(deepFilter(input, (n) => n >= 0));
