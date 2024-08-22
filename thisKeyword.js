"use strict";
// this keyword in global space

console.log(this); // window object

/* 
  In the global space, this refers to the global object, which is window in the browser.

  In the browser, this refers to the window object, which is the global object in client-side JavaScript.

  Because javascript is executed on many runtime environments, the value of this can be different depending on where the code is executed.

  In the browser, this refers to the window object, which is the global object in client-side JavaScript.

  In Node.js, this refers to the global object, which is the global object in server-side JavaScript.


*/

// this keyword in function

// function printThis() {
//   console.log(this);
// }

// printThis(); // window object

/* 
The differnce between this in global space and this in function is that in global space this refers to the global object, but in function this refers to the object that called the function.

But if we use strict mode, this in function will be undefined.

why this is undefined in strict mode?

Because in non-strict-mode , if the value of this keyword is undefined or null and this keyword replaced with global object, but in strict mode this keyword will not be replaced with global object. 
Inside the function, value is depend on strict mode, if strict mode is enabled, this will be undefined, otherwise it will be global object.

This is possible because of this substitution rule in non-strict mode.

*/

// value of this keyword depends on how the function is called

/* 
Even in the strict mode if the function is called as a method of an object, this will refer to the object that called the function.

pribntThis(); // undefined
window.printThis(); // window object

*/
// window.printThis(); // window object

// this keyword in object

// difference between function and method -> method is a function that is a property of an object and called using dot notation.

const student1 = {
  name: "Vinay Chhabra",
  printName: function () {
    console.log(this);
    //console.log(this.name); // Vinay Chhabra
  },
};

student1.printName(); // Vinay Chhabra
/* 
as we can see, this refers to the object that called the function, in this case, the object student1 called the function printName, so this refers to the object student1.

*/

// we want to use printName function of student1 object in another object for that we have to override he value of this keyword inside the student1 object.

const student2 = {
  name: "Rahul",
};

// console.log(student2); // {name: "Rahul"}
student1.printName.call(student2); // {name: "Rahul"}

/* 

this all comes under the call method, call method is used to call a function with a given this value and arguments provided individually.

In the above example, we are calling the printName function of student1 object with student2 object as this value.

there is call bind and share method in javascript.

call method is used to call a function with a given this value and arguments provided individually.

bind method is used to create a new function that, when called, has its this keyword set to the provided value.

apply method is used to call a function with a given this value and arguments provided as an array.


*/

// this keyword in arrow function

// arrow function does not have its own this keyword, it uses the this value of the enclosing lexical context.

const obj = {
  name: "Vinay",
  printName: () => {
    console.log(this); // here this behaves like normal variable, it refers to the global object
  },
};

obj.printName(); // window object

/* 
here this refers to the global object because the arrow function does not have its own this keyword, it uses the this value of the enclosing lexical context, which is the global object in this case.

Here the enclosing lexical context is the global space, so this refers to the global object.

*/

// little tricky example

const obj1 = {
  name: "Vinay",
  printName: function () {
    // this is the enclosing lexical context of the arrow function
    const printName2 = () => {
      console.log(this); // obj1 object
    };
    printName2();
  },
};

obj1.printName(); // obj1 object

/*  

here this refers to the obj1 object because the arrow function printName2 does not have its own this keyword, it uses the this value of the enclosing lexical context, which is the function printName in this case.
so it will behaves like that it is not inside the arrow function. it behaves like inside the function printName.

arrow function don't provide their own this binding and they use the this value of the enclosing lexical context.


*/

// this keyword in DOM
/* 

 <button onClick="alert(this.tagName)">Click Me</button>

In the above example, this refers to the button element that called the function.

button element is the object that called the function, so this refers to the button element.


*/

// this behaves in class and constructor
