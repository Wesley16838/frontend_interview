const bubbleSort = (arr) => {
  let len = arr.length;
  let tmp = null;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i] > arr[j + 1]) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};
