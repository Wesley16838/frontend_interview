function test() {
  var count = 0;
  function add() {
    count++;
    console.log(count);
  }
  return add;
}
const a = test();
a();
a();
a();
