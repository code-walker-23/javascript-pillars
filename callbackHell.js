const cart = ["shoes", "shirts", "pants"];
// there is a dependency between the functions to achieve the desired result
api.createOrder(cart, function (orderId) {
  api.proceedToPayment(orderId, function (paymentInfo) {
    api.showOderSummary(paymentInfo, function () {
      api.updateWallet();
    });
  });
});

// this becomes a problem when we have to add more functions to the chain

setTimeout(() => {
  console.log("1st function");
}, 1000);

// when your code start increasing horizontally then it is called as callback hell.

// kyle simpson said that the callback hell is not the problem of callbacks, it is the problem of the way we are using callbacks.

// when we loose control over the code then it is called as inversion of control.

// Inversion of control is a design principle in which the control of object creation is transferred to a container or framework.

// importance of the callback function:
// 1. Callbacks are used to handle the asynchronous code.
// 2. Callbacks are used to handle the events.
// 3. Callbacks are used to handle the user interaction.
// 4. Callbacks are used to handle the data.
// 5. Callbacks are used to handle the errors.
