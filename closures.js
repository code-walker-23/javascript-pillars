// a function binds together with it's lexical environment
// function along with it's lexical scope forms a closure
/* 
function x() {
  var a = 7;
  function y() {
    console.log(a); // add debugger -> the function y is bind to the variable of x that forms a closure
  }
  y();
}

x(); 
*/

function x() {
  var a = 7;
  function y() {
    console.log(a); // add debugger -> the function y is bind to the variable of x that forms a closure
  }
  return y; // it return y with it's lexical environment that makes it a closure
}

x()(); // it is valid x() == y => x()() == y()
// here it prints the 7 still but in js after the call of function x everything is going to vanish all the vartibale inside x .
// const z = x();
// but as we print z it prints the whole y function inside this function we have a variable a but the variable is not inside the
// y function scope or in the global function scope but it still show the 7.
// that is why when we return the y from x we are not only returning the y but also with their lexical environment that is why it preserve with a

// this is same returning the functions
function x() {
  var a = 7;
  return function y() {
    console.log(a); // add debugger -> the function y is bind to the variable of x that forms a closure
  };
  // it return y with it's lexical environment that makes it a closure
}

// closure comes with lot of gotchas
// one more point inside the y function a is not refer the vlaue but a is referencing the memory location of a so as we update the value of inside x anywhere if we print so the updated value will be print because a referencing to the memory address  
function x() {
  var a = 7;
  function y() {
    console.log(a); // add debugger -> the function y is bind to the variable of x that forms a closure
  }
  a = 100;
  return y; // it return y with it's lexical environment that makes it a closure
}
const z = x();
z();
