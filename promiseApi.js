// promise.all

// usecase of Promise.all
// 1. Fetching multiple data from different sources
// 2. Fetching multiple data from different sources

// promise.all([promise1, promise2, promise3])

// max time taken by promise.all is the time taken by the longest promise

// let suppose we have 3 promises promise1, promise2, promise3
// promise1 takes 2 seconds
// promise2 takes 3 seconds
// promise3 takes 5 seconds

// then promise.all will take 5 seconds to resolve
// promise.all  is like fail fast
// if any promise is rejected then promise.all will be rejected and throw the error of the first rejected promise

// this problem can be solved by using promise.allSettled

// promise.allSettled will wait for all promises to be settled and then return the result of all promises

// promise.allSettled([promise1, promise2, promise3])

// after the max time taken by the promise, it will return the result of all promises

// if any promise is rejected then also it will return the result of all promises

// promise.allSettled will return the result in the form of an array of objects
// let suppose promise 2 is rejected then the result will be like this
// [val2,error2,val3]

// promise.race -> it will return the result of the first settled promise whether it is resolved or rejected

// promise.any -> it will return the result of the first resolved promise
// if all promises are rejected then it will throw an error
// it will for the first successful promise
// if all the promises are rejected then it will throw an error like this
// AggregateError: All promises were rejected : [error1, error2, error3] after the max time taken by the promise, it will return the result of all promises whether it is resolved or rejected

// code for promiose.all

/* const p1 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    resolve("p1 is successful");
  }, 3000);
});

const p2 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    resolve("p2 is successful");
  }, 3000);
});

const p3 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    resolve("p3 is successful");
  }, 3000);
});

const res = Promise.all([p1, p2, p3]);
console.log(res);

Promise.all([p1, p2, p3]).then(function (values) {
  console.log(values);
}); */


// case of rejection

/* const p1 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    resolve("p1 is successful");
  }, 3000);
});

const p2 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    reject("p2 is failed");
  }, 1000); // if any promise is rejected it will shwo the error of the first rejected promise if the time is same for all rejected promises then it will show the error of the first rejected promise

});

const p3 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    resolve("p3 is successful");
  }, 3000);
});

const res = Promise.all([p1, p2, p3]);
console.log(res);

Promise.all([p1, p2, p3])
  .then(function (values) {
    console.log(values);
  })
  .catch(function (error) {
    console.log(error);
  }); */

// always catch your error not show the uncaught error in browser

// allSettled -> success

/* const p1 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    resolve("p1 is successful");
  }, 3000);
});

const p2 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    resolve("p2 is successful");
  }, 3000);
});

const p3 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    resolve("p3 is successful");
  }, 3000);
});

const res = Promise.all([p1, p2, p3]);
console.log(res);

Promise.allSettled([p1, p2, p3]).then(function (values) {
  console.log(values);
}); */

// allSettled -> failure
// if all the promises are rejected then also it will return the result of all promises and the status of single returned promise will be fulfilled

/* const p1 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    reject("p1 is failed");
  }, 3000);
});

const p2 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    reject("p2 is failed");
  }, 1000);
});

const p3 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    reject("p3 is successful");
  }, 3000);
});

const res = Promise.allSettled([p1, p2, p3]);
console.log(res);

Promise.allSettled([p1, p2, p3])
  .then(function (values) {
    console.log(values);
  })
  .catch(function (error) {
    console.log(error);
  }); */

// promise.race

// IN THIS CASE THE RESULT OF THE FIRST SETTLED PROMISE WILL BE RETURNED WHETHER IT IS RESOLVED OR REJECTED and the promise status will be the same as the first settled promise and same for the value
/*   const p1 = new Promise(function exec(resolve, reject) {
    setTimeout(() => {
      reject("p1 is failed");
    }, 3000);
  });
  
  const p2 = new Promise(function exec(resolve, reject) {
    setTimeout(() => {
      resolve("p2 is successful");
    }, 1000);
  });
  
  const p3 = new Promise(function exec(resolve, reject) {
    setTimeout(() => {
      resolve("p3 is successful");
    }, 3000);
  });
  
  const res = Promise.race([p1, p2, p3]);
  console.log(res);
  
  Promise.race([p1, p2, p3])
    .then(function (values) {
      console.log(values);
    })
    .catch(function (error) {
      console.log(error);
    }); */


// promise.any

/* const p1 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    reject("p1 is failed");
  }, 3000);
});

const p2 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    reject("p2 is failed");
  }, 1000);
});

const p3 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    resolve("p3 is successful");
  }, 3000);
});

const res = Promise.any([p1, p2, p3]);
console.log(res);

Promise.any([p1, p2, p3])
  .then(function (values) {
    console.log(values);
  })
  .catch(function (error) {
    console.log(error);
  }); */

// promise.any -> all promises are rejected

/* const p1 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    reject("p1 is successful");
  }, 3000);
});

const p2 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    reject("p2 is failed");
  }, 1000);
});

const p3 = new Promise(function exec(resolve, reject) {
  setTimeout(() => {
    reject("p3 is successful");
  }, 3000);
});

const res = Promise.any([p1, p2, p3]);
console.log(res);

Promise.any([p1, p2, p3])
  .then(function (values) {
    console.log(values);
  })
  .catch(function (error) {
    console.log(error,"error");
    console.log(error.errors,"errors");
  }); */
