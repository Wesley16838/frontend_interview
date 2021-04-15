const linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return `value found at index ${array[i]}`;
    }
  }
  return "Value not found";
};
