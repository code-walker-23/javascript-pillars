// producing a promise

const cart = ["apple", "banana", "mango"];
// consumer part
// createOrder(cart)
//   .then((orderId) => proceedOrderToPayment(orderId))
//   .then((paymentInfo) => showOrderSummary(paymentInfo))
//   .then(() => updateWallet());

// producer part
function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    // validate the cart
    if (!validateCart()) {
      const err = new Error("Invalid cart");
      reject(err);
    }
    // createOrder logic
    const orderId = "1234";

    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return promise;
}

function validateCart() {
  return false; // false
}
const promise = createOrder(cart);
console.log(promise);

promise
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch(function (err) {
    console.log(err);
  });
