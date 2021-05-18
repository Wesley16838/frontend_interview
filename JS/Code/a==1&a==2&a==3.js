const a = {
  i: 1,
  toString: function () {
    return a.i++;
  },
};

if (a == 1 && a == 2 && a == 3) {
  console.log("Hello World!");
}

// a 是個物件的型態。 系列文曾提過，在物件的情況下，會先透過物件的 valueOf() 方法先求得對應的數值，若物件沒有 valueOf() 方法的話，則會透過 toString() 轉型再進行比較。
// When using loose equality, if one of the operands is of a different type than the other, the engine will attempt to convert one to the other.
// In the case of an object on the left and a number on the right, it will attempt to convert the object to a number by first calling valueOf if it is callable, and failing that, it will call toString.
