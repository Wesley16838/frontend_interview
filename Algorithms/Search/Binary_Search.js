const binarySearcb = (array, value) => {
  let min = 0; //index
  let max = array.length - 1;
  let mid = Math.floor((min + max) / 2);
  while (array[mid] !== value && min < max) {
    if (value < array[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
    mid = Math.floor((min + max) / 2);
  }
  if (array[mid] === value) {
    return array(mid);
  } else {
    return false;
  }
};
