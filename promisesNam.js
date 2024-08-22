/* 

const cart = ["pant", "shirt", "shoes"];
// there is a dependency between the functions to achieve the desired result
// there are two things one is sending the callback function and second is attaching the callback function.

// this is the responsibility of the api object to call the callback function.
api.createOrder(cart, function () {
  api.proceedToPayement(orderId);
}); // we are sending the callback function to the createOrder function.

// attaching the callback function.
// promise is a placeholder for the value that will be available in the future.

const promise = createOrder(cart);

// initially the promise object is in the pending state.

// when the promise object is in the pending state then we can attach the callback function to the promise object.

promise.then(function exec() {
  proceedTopayment(orderId);
});
 */

const GITHUB_API = "https://api.github.com/users/code-walker-23";

const promise = fetch(GITHUB_API);
console.log(promise); // this promise is immutable in nature.

// whatever the data fetch return that will store in the promiseResult variable.

// attching the callback function to the promise object.

promise.then(function exec(promiseResult) {
  console.log(promiseResult);
  promiseResult.json().then((res) => {
    console.log("actual :", res);
  });
  console.log("hello");
});

// promise : placeholder for the value that will be available in the future.

// promise object is immutable in nature.

// promise object is a native piece of code in javascript.

// Promise Chaining:
// consuming the promise object.

/* createOrder(cart)
  .then(function exec(orderId) {
    return proceedToPayment(orderId); // we always return the promise object from the then function.
  })
  .then(function exec(paymentInfo) {
    return showOrderSummary(paymentInfo); // return is mandatory here.
  })
  .then(function exec() {
    return updateWallet();
  });

// promises are eventual completion or failure of an asynchronous operation.

// arrow function
createOrder(cart)
  .then((orderId) => proccedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then(() => updateWallet());

  // now the code is increasing vertically not horizontally. */
