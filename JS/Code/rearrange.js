function rearrange(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], 1);
    } else {
      map.set(str[i], map.get(str[i]) + 1);
    }
  }
  const mapSorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  console.log(mapSorted);

  let result = "";
  mapSorted.forEach((item) => {
    result += item[0];
  });
  return result;
}

console.log(rearrange("hello world"));
