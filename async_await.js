// async function -> this is a function that returns a promise
// let suppose if it is returning a value then it will be wrapped in a promise and value will be resolved and the value may be anything like string, number, object, array, etc

// the difference between the async function and the normal function is that the async function will always return a promise whether it is returning a value or not
// the normal function will return the value only
// async function will always return the promise

/* const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 2000);
  setTimeout(() => {
    reject("rejected"); // it will execute first
  }, 1000);
});

async function asyncFunction() {
  // if we return nothing then it will return the undefined in promiseResult
  // return "hello world";
  return promise;
}

asyncFunction()
  .then((promiseResult) => {
    console.log(promiseResult);
  })
  .catch((err) => {
    console.log(err);
  });
 */
// if we return a promise from the async function then it will return the promise

// aysnc await is the syntactic sugar over the promises
// it makes the code more readable and easy to understand
// it makes the code more synchronous
// they both are used to handle the promises

// async await is used to handle the promises in a more synchronous way
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved"); // if we use reject then it will go to the catch block
  }, 3000);
});

// function getData() {
//   p.then((res) => console.log(res)).catch((err) => console.log(err));
// }

// getData();

// this is how we are handling promises using async await
/* async function getData() {
  try {
    console.log("hello world"); // it will execute first
    const res = await p;
    console.log("hello world"); // at this js engine will wait for the promise to be resolved
    console.log(res); // line 55 and 56 execute after 3 seconds simultaneously
  } catch (error) {
    console.log(error);
  }
}
getData(); */

// console.log(getData()); // it will return the promise because async function always return the promise with the value undefined

// await -> it will wait for the promise to be resolved
// await can only be used inside the async function
// await will not work outside the async function

// if we not use await
// function getData() {
//   // it will not wait for the promise to be resolved
//  p.then((res)=>console.log(res)).catch((err)=>console.log(err));
//  console.log("hello world");// it will execute first
// }

// getData();

// lets make it harder

/* async function getData() {
  try {
    const res1 = await p;
    console.log("hello world"); // at this js engine will wait for the promise to be resolved
    console.log(res1); // line 55 and 56 execute after 3 seconds simultaneously
    const res2 = await p;
    console.log("hello world"); // at this js engine will wait for the promise to be resolved
    console.log(res2); // line 55 and 56 execute after 3 seconds simultaneously
  } catch (error) {
    console.log(error);
  }
}
getData();
// // result 
// hello world
// async_await.js:85 Promise resolved
// async_await.js:87 hello world
// async_await.js:88 Promise resolved */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved"); // if we use reject then it will go to the catch block
  }, 5000);
});

async function getData() {
  try {
    const res1 = await p; //1. it will wait for 3 seconds and it will excute first
    console.log("hello world"); //2.
    console.log(res1); //3.
    const res2 = await p1; // 4. it will take 2 more seconds
    console.log("hello world");
    console.log(res2);
  } catch (error) {
    console.log(error);
  }
}
getData();
