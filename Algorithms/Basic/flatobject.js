function flatten(arr) {
  const newArr = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
     acc.push(item);
    }

    return acc;
  }, []);

  return newArr;
}

function flatten(arr) {
  return arr.flat(Infinity)
}

function flatten(ary, ret = []) {
    for (const entry of ary) {
        if (Array.isArray(entry)) {
            flatten(entry, ret);
        } else {
            ret.push(entry);
        }
    }
    return ret;
}

const numArr = [1, [2, [3], 4, [5, 6, [7]]]];

flatten(numArr) // [1, 2, 3, 4, 5, 6, 7]