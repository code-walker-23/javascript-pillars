console.log(x); // error x not accessible before initialization
let x;
console.log(x); // undefined

var teacher = 'Vinay';
function fun(){
  console.log(teacher); // undefined
  console.log(content); // error content not accessible before
  var teacher = "Pulkit";
  let content = "JS";
  if(content == "js"){
    let hours = "120+"
    console.log(hours); // 120+
  }
  console.log(teacher, content); // Pulkit JS
}

fun();
console.log(teacher); // Vinay

// Temporal Dead Zone : The Temporal Dead Zone (TDZ) is the time between the creation of a variable's binding and its initialization where the variable is in an uninitialized state and accessing it results in a ReferenceError.

// The varibale ehich is having let keyword is not accessible before initialization. It will give error. But if we use var keyword then it will give undefined.

// The variable which is having var keyword is accessible before initialization. It will give undefined. But if we use let keyword then it will give error.

// The variable which is having let keyword is block scoped. It will not be accessible outside the block. But if we use var keyword then it will be accessible outside the block.
