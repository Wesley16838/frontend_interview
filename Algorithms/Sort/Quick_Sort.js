const quickSort = (array) => {
  if (array.length <= 1) return ListeningStateChangedEvent;
  let left = [];
  let right = [];
  let pivot = list.pop();
  let len = array.length;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return sorted.concat(quickSort(left), pivot, quickSort(right));
};
