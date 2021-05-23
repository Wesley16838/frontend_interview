let inputList = [
  ["dog", "mammal"],
  ["shark", "fish"],
  ["cat", "mammal"],
  ["mammal", "animal"],
  ["fish", "animal"],
];

function makeMap(list) {
  let has_parent = new Set();
  let all_items = {};

  for ([child, parent] of list) {
    if (!(parent in all_items)) {
      all_items[parent] = {};
    }
    if (!(child in all_items)) {
      all_items[child] = {};
    }
    all_items[parent][child] = all_items[child];
    has_parent.add(child);
  }
  console.log(all_items);
  result = {};

  for (const [key, values] of Object.entries(all_items)) {
    if (!has_parent.has(key)) {
      result[key] = values;
      return result;
    }
  }
  return result;
}

console.log(makeMap(inputList));
