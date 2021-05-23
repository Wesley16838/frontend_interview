const obj = { x: [{ y: { z: 100 } }] };
const getValue = (obj, path = "") => {
  let pathReg = /[a-zA-Z0-9]/g;
  let pathObjects = path.match(pathReg);
  console.log(pathObjects);
  while (pathObjects.length) {
    let currentPath = pathObjects.shift();
    obj = obj[currentPath];
  }

  return obj;
};
console.log(getValue(obj, "x[0].y.z")); // 100
