/* es5 創建一個person 構造函數 */
function person(name, age) {
  this.name = name;
  this.age = age;
}

/* 定義原型鏈上的方法sayholle */
/* 為什麼要將方法定義在原型上，定義在原型上的方法，所有的實例對象都共享 不會出現沒實列一個對象都重新創建一個這個方法 */
person.prototype.sayholle = function () {
  console.log(this.name + " holle" + this.age);
};
let person1 = new person("czcz", "23");
person1.sayholle(); // czcz holle23
/* es6 使用class創建一個對象 */
class personclass {
  /* 實列對象時默認調用的方法 */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  /* 定義一個方法，相對構造上述原型鏈上的方法 */
  sayholle() {
    console.log(this.name + " holle" + this.age);
  }
}
let person2 = new personclass("czcz", "26");
person2.sayholle(); // czcz holle23
