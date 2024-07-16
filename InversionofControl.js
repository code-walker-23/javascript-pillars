function fun(fn,x){
  // Let suppose there is team A which is working on the function fun.
  // Team A has to implement the logic of fun function.
  // Team A can use the callback function in any way.
  // That might affect the business logic of the fun function.
  fun(x*x);
}

fun(function exec(num){
  console.log("The Value is :" + num); // due to the callaback functions, I am passing the control of how function exec should be executed to fun.
},8);

// Inversion of control -> it is a design principle in which the control of the execution of the code is passed to the callback function.

// Promises are the solution to the callback hell.


/* In this blog, we will explore the problems addressed by promises and delve into the issues associated with callbacks. Now before understanding callbacks, we need to understand that javascript functions are First Class Citizen, because they can be treated as variables, and when a function that is passed to another function as a parameter is a callback function. We know that javascript is a synchronous single threaded language which means javascript executes one command at a time(single threaded) in a specific order (synchronous), but using callbacks, we can run asynchronous functions as well. Let’s understand this with the help of a code:

console.log('Understanding Callbacks');
 // Passing callback function and it will be executed after 5000 ms
setTimeout(function () {
console.log('Inversion of Control');
},5000)
console.("Callback Hell");
Output:

Understanding Callbacks
Callback Hell
Inversion of Control
Here, the Inversion of Control will be printed after 5000ms, but other 2 statements doesn’t waits for anything and get printed as soon as the code gets executed.

So, we see callbacks are useful for asynchronous functions, but we have some disadvantages of callbacks, we will understand the problems using an example. Suppose we have an e-commerce website and in which we have added some items in the cart:

const cart = ["shoes","jeans","watch"];
Now to complete this order we may need multiple APIs, the first one is to create an order, one is to complete the payment, another one is to show the order summary and the next one is to update the wallet.

api.createOrder(cart, function () {
  api.proceedToPayment( function() {
    api.showOrderSummary( function() {
      api.updateWallet();
    }
  }
}
So, we see there can be multiple callbacks inside a callback function. Here Callback Hell comes into picture, means when a code grows horizontally and not vertically. This makes the code unmaintainable. This is also known as Pyramid of doom, looks like: 

Let’s discuss another problem that we face because of multiple callbacks. When we pass one function to another function as a callback, we are giving the called function the control of whether to even call it or not, maybe call it in a wrong context. For example, a success callback is called when an error occurs inside a called function, this type of giving up of control over our function is known as Inversion of Control.

To overcome above mentioned issues, promises comes into picture.

https://medium.com/@antarakundu08/callback-hell-inversion-of-control-bc9f1de85abc#:~:text=For%20example%2C%20a%20success%20callback,promises%20in%20our%20next%20blog!

*/

