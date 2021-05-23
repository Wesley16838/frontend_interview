let Foo = function (a) {
  function bar() {
    return a;
  }
  this.baz = function () {
    return a;
  };
  //   this.a = a;
  //     this.bar = function() {
  //         return this.a;
  //     }
  //     this.baz = function() {
  //         return this.a;
  //     };
};
Foo.prototype = {
  biz: function (a) {
    return a;
  },
  //   biz: function () {
  //     return this.a;
  //   },
};

let f = new Foo(7);
// what will be the output?
// f.bar();
console.log(f.baz());
console.log(f.biz());
