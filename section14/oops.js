"use strict";
/* 
1. Object-oriented programming (oops) is a programming paradigm(style of code,"how" we write and organize the code) based on the concept of objects.
2. We use objects to model(describe) real-world or abstract features
3. Objects may contain data(properties) and code(methods).By using objects, we pack the data and corresponding behaviour into the one block.
3. In OOP, objects are self-contained pieces/ blocks of code.
4. Objects are the building blocks of the application ,and interact with one and another
5. Interactions happen through the public interface API's : methods that the code outside the object can acess and use to communicate with the objects
Why OOP exist? : OOP was developed with the goal of organize code, to make it more flexible and easier to maintain (avoid "spaghetti code")  
Spaghetti code is a term used to describe computer source code that is difficult to understand and maintain because it lacks structure
spaghetti is an italian dish
OOP and Functional Programming overcomes this problem by structuring the code and organizing well and make it more flexible


User{
user
passowrd
email 
login(){}
sendMessage(){}
}

Just a representation not a js sytax it is like a mental for all the objects
class is just conceptual thing that does not conatin the real world data
instance is an real-world object that contains the real-world data

How do we actually design classes? How do we model the real-world data into the classes?
sol : We have four fundamental priciples
1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorpshism

Objects are instantiated from a class,which functions like a blueprint.

Prototypes : Objects are linked to a prototype object and prototype contains methods or behaviours.

Prototypal Inheritance/Delegation : The prototype conatins the methods or behaviours that are accessible to all the linked objects to that prototype.
Prototypal Inheritance is different from classical inheritance because in classical inheritance we are just inheriting the properties from one class to another class whereas in prototypal inheritance the instance or object inherits the properties from a class 

Behaviour is delegated to the linked prototype object
Objects delegates their behaviour to the prototype object on the other hand in the classical oops, the method or behaviour is copied from class to all objects of that class.

Array.prototype map()
Array.prototype.lastIndexOf()
Array.prototype.keys()
Array.prototype is prototype of all the arrays objects we create in the javascript.
That is why all arrays have same set of methods that is inherited from the Array.prototype

for eg, we can say that array delegated the map method from Array.prototype


How do we actually create prototypes? And how we link objects to the prototypes?
How we can create the new objects , without having the classes?

1. Constructor functions
(a) Technique to create objects form a function
(b) This is how built-in objects like Arrays,Maps etc are actually implemented

2. ES6 Classes
(a) Modern alternative to constructor function syntax
(b) "Syntactic Sugar" : Behind the scene ES6 classes works exactly the same like  Constructor functions
(c) ES6 classes does not behaves like classes in classical oops

3. object.create()
(a) The most easiest and straightforward way of linking an object to a prototype object.

But the 4 pillar of OOPs is still valid in prototypes oops in js

*/
// arrow function does not work as contructor function because it doest have it's own this keyword
// constructor function(function dec or expression) is always follow a naming convention of pascal casing
// the only difference between constructor function and normal function is that we call constructor function with new keyword

// constructor is not feature of javascript it's like way creating an object that many developer chooses

const Person = function (firstName, birthYear) {
  console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this -> Because if we are creating thousands of objects then creating a lot of copies of this function might affect the performance of the code.
  // Use protoype
  /*  this.calcAge = function () {
    console.log(2024 - this.birthYear); // works fine without this keyword also
  }; */
};

const vinay = new Person("Vinay", 2002);
console.log(vinay);
// vinay.calcAge();
// 1. New {} is created
// 2. function is called , this = {}
// 3. {} linked to prototype.
// 4. function automatically returns {} object that we are creating

const kaku = new Person("kaku", 2003);
console.log(kaku);
// kaku.calcAge();

// Js does not have classes in consideration classical oops so what we are actually doing here we are creating the objects from the constructor function
const taku = 0;
console.log(vinay instanceof Person);
console.log(kaku instanceof Person);
console.log(taku instanceof Person);

// Prototypes

// Prototype property of constructor function -> it we set some set of methods to the prototype property of constructor function then all the instaces that we create using that constructor function can access all methods that is defined in prototype property of constructor function because during object creation it gets linked to that protyotpe

// here it will create only one copy of the calcAge fun and every object uses that
Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};
vinay.calcAge();
kaku.calcAge();

// you can add methods to prototype after the instance creation but always remember to call that function after adding to the prototype only.
// otherwise it will thrwo an error

// every object has property of ___proto__

console.log(vinay.__proto__); // this proto properties comes from third step of creating an object
console.log(kaku.__proto__);
console.log(vinay.__proto__ == Person.prototype); // it says that prototype property of vinay is equals to prototype property of Person constructor function
console.log(kaku.__proto__ == Person.prototype);
console.log(Person.prototype.isPrototypeOf(kaku)); // prototype of constructor function is prototype of object kaku and vinay
console.log(Person.prototype.isPrototypeOf(vinay));
console.log(Person.prototype.isPrototypeOf(Person)); // confusion arises beacuse of bad naming

// confusion Person.prototype -> it actually means that here .prototype is not prototype of Person
//it should be like Person.prototypeOfLinkedObject
//because as we write Person.prototype we think that this is the protoype of Person but it is actually Person.prototypeOfLinkedObject

// console.log(Person.prototype.isPrototypeOf(Person)); // false ->  this lines demonstrate that actual prototype of Person is not Person.prototype so the naming should be like Person.prototypeOfLinkedObject not the Person.prototype.
// Person.prototype is prototype of linked object that we attached to the constructor function

console.log(Person.__proto__);

console.log(kaku);
/* 
Person {firstName: 'kaku', birthYear: 2003}
birthYear
: 
2003
firstName
: 
"kaku"
[[Prototype]]
: 
Object
calcAge
: 
ƒ ()
length
: 
0
name
: 
""
prototype
: 
{}
arguments
: 
(...)
caller
: 
(...)
[[FunctionLocation]]
: 
oops.js:113
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[2]
constructor
: 
ƒ (firstName, birthYear)
[[Prototype]]
: 
Object

*/

// we can ad properties to prototype

Person.prototype.species = "Human";
console.log(vinay.species);

// Both will be the same thing
console.log(vinay.__proto__);
console.log(Person.prototype); // remember it is a prototype of all linked objects to the constructor functions but not the prototype of Person

console.log(vinay.hasOwnProperty("firstName"));
console.log(vinay.hasOwnProperty("species")); // this is not in constructor function , it is in the prototype of the constructor function

// Prototypal Inheritance and Prototype Chain


