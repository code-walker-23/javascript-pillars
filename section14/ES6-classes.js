// class expression

// const Person = class {
//   constructor(firstName, birthYear) {}
// };

// class declaration

class Person {
  constructor(firstName, birthYear) {
    console.log("constructor called off:", this);
    // this is mandatory
    // this is like constructor function whatever the property we add here it is going to copy in every instace
    this.firstName = firstName;
    this.birthYear = birthYear;
    // this.sum = function () {};
  }
  // function calcAge(){} -> this gives an error we can not use the proper function declaration
  // Person here is function and we know function is indeed object as we have seen in the enhanced object literal to add a method like this
  // No formal declaration inside this
  // this methods is going to the proto property

  // use this keyword must inside the methods
  // calcAge function is copied to every instance
  // this is going to to be inside in every object
  // we can add this function as well as inside constructor

  /*  calcAge = function () {
    console.log(`your age is : ${2024 - this.birthYear}`);
  }; */

  // here we can add custom properties and methods to prototype
  // calcSum() {} it is not included in last return Object
  // it is inside the prototype
  // prototype method
  calcSum() {
    console.log("hello", this.firstName);
  }
  static addPrototypeProperty() {
    Person.prototype.species = "Homo sapiens";
  }

  // this.calcAge(){ -> this won't work
}

console.log(typeof Person);
console.dir(Person.__proto__); // anonymous func
console.dir(Person.__proto__.__proto__); // Object.prototype -> we can say that function is indeed an object

// in this case we are adding props to proto in the class itself
Person.addPrototypeProperty();
Person.prototype.style = "Hero";
const vinay = new Person("vinay", 2002);
console.log(vinay);
// vinay.calcAge();
vinay.calcSum();
console.log(vinay);
console.log(vinay.__proto__);
console.log(vinay.__proto__ == Person.prototype);



















/* 
Note : inside the constructor function we have to add a method we hav to always use like this.funName = function(){}


In JavaScript, when you define methods in a class, they can be added either to the instance or to the prototype of the class. Here's a breakdown of the differences between calcAge and calcSum in your Person class:

calcAge Method:

javascript
Copy code
calcAge = function () {
  console.log(`your age is : ${2024 - this.birthYear}`);
};
Definition: This method is defined using a class field. It is not a prototype method; instead, it's an instance method.
Instance Method: This means that calcAge is created anew for every instance of the Person class. Each object will have its own copy of the calcAge function.
Memory Usage: Since each instance has its own copy, this could potentially lead to higher memory usage if many instances are created.
calcSum Method:

javascript
Copy code
calcSum() {
  console.log("hello", this.firstName);
}
Definition: This method is defined using the standard method syntax. It is added to the prototype of the Person class.
Prototype Method: This means that calcSum is shared among all instances of the Person class. There is only one copy of calcSum in memory, regardless of how many instances are created.
Memory Usage: Because it's shared, it is more memory-efficient compared to instance methods like calcAge.

*/
