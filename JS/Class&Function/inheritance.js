// ES5
// Base constructor.
var Person = function (name, age) {
  this.name = name;
  this.age = age;
};

// Base prototype.
Person.prototype = {
  haveBirthday: function () {
    this.age++;
  },
};

// Derived constructor.
var Student = function (name, age, subject) {
  Person.call(this, name, age); //改變this的指向，執行父類建構函式並傳參到父類
  this.subject = subject;
};

// Set the derived prototype to be the same object as the base prototype,
// and reset that derived prototype so that it uses the correct constructor.
Student.prototype = new Person(); //將Student的prototype基底類別指向Person物件
Student.prototype.constructor = Student; //上一行程式碼讓Student.prototype.constructor消失，此行將Student.prototype.constructor修正回正確的constructor

// es6

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  haveBirthday() {
    this.age++;
  }
}

class Student extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}
