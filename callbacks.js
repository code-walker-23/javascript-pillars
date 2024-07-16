function fun(x,fn){
  for(let i = 0; i < x; i++){
    console.log(i);
  }
  fn();
}

fun(10,function ex(){
  console.log("This is Callback function!");
})
// Callback function is a function that is passed as an argument to another function.
// HOF consumes the function as an argument that function is called as a callback function.
// Callback function is called inside the HOF function.
// In sort function the camparator function is called as a callback function.


// setTimeout(x,4000); // x can not access before initialization.
setTimeout(fun,6000); // fun is function declaration. and it can be used before the declaration.

function fun(){
  console.log("I am a function");
}
const x = function fun(){
  console.log("I am a function");
}
// exec is callback function. and setTimeout is HOF function.

// Callbacks hell -> when we have to use multiple callbacks inside the callback function then it is called as callback hell.
// In the callback hell the code becomes more complex and difficult to understand.
// In the callback hell the code becomes more difficult to maintain.
// In the callback hell the code becomes more difficult to test.

// http://callbackhell.com/

// Problems with callbacks:
// 1. Inversion of control.
// 2. callabck hell -> readability of code will be decreased.
// 3. Callbacks are not reusable.



