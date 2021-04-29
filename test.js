function flat(arr, res = []) {
  if (arr.length === 0) return arr;
  for (let i of arr) {
    if (i.constructor === Array) {
      flat(i, res);
    } else {
      res.push(i);
    }
  }
  return res;
}

function flat2(arr) {
  if (arr.length === 0) return arr;
  const newArr = arr.reduce((acc, next) => {
    if (Array.isArray(next)) {
      acc = acc.concat(flat2(next));
    } else {
      acc.push(next);
    }
    return acc;
  }, []);
  return newArr;
}

console.log(flat2([1, [2, [3], 4, [5, 6, [7]]]]));
