/* 


Promises : Promises are a way to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

Promises are the ideal choice for handling asynchronous operations in the simplest manner. They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.

Promises significance: 
1. Callbacks are not enough for handling asynchronous operations.
2. Callbacks are not easy to manage when dealing with multiple asynchronous operations.
3. Callbacks can create callback hell leading to unmanageable code.
4. Promises are the ideal choice for handling asynchronous operations in the simplest manner.
5. Promises can handle multiple asynchronous operations easily.
6. Promises provide better error handling than callbacks and events.


Problems solved by promises:
1. Callback hell =->importance of promises.
2. Readability
3. Maintainability
4. Error handling
5. Multiple asynchronous operations
6. Better control flow
7. Better handling of asynchronous operations
8. Inversion of control : Promises invert the inversion of control introduced by callbacks.(Inversion of control is a design principle in which the control of objects or portions of a program is transferred to a container or framework.) => imp



*/

/* 


promises are objects that represent the eventual completion or failure of an asynchronous operation.

promises are the simple javascript objects that get returned immediately when we make an asynchronous call.

promise can act as a placeholder for the data that we hope to get back in the future.

In promises objects we can attach some functionalities to it, like what to do when the promise is fulfilled or what to do when the promise is rejected.

In promises eg: 
x = fetch("https://www.xyz.com") -> it will return a promise object.

and later in the code we can attach some functionalities to it.

In callback based fucntions eg:

fun(function exec(){
    console.log("hello");
},fetch("https://www.xyz.com")) -> we are attaching the functionality to the fetch function here not later in the code somewhere.

and here we are giving the control of exec() to fun function.

*/


/* 

How to create a promise?

Creation of promise object is synchronous in nature beacuse promise object is native piece of code in javascript.

States of promises:
1. Pending : initial state, neither fulfilled nor rejected.
2. Fulfilled : meaning that the operation completed successfully.
3. Rejected : meaning that the operation failed.

It can migrate the state from pending to either fulfilled or rejected. 

Creating promises:

let promise = new Promise(function(resolve,reject){
// time taking task synchronous or asynchronous
// any time in the code we can call resolve or reject.
// if we call resolve then the promise will be fulfilled.
// if we call reject then the promise will be rejected. 
// if we dont call resolve or reject then the promise will be in pending state.
along with the state there is value associated with the promise object.
value is undefined if the promise is in pending state.
with whateever value we call resolve or reject that value will be associated with the promise object.
}}

irony is : to create a promise we need to create a callback function and that callback function will have two arguments resolve and reject.

resolve and reject are the functions that are provided by the promise object itself.

sometimes this callback function is called as executor function.


*/




function getRandomInt(max){
  return Math.floor((Math.random()*max));
  
}

// when this piece of code is executed it will return a promise object when the entire executor function is executed because in the executor function there is only valid piece of  js code is present.

// it leads to the blocking of the code execution.
 

function createPromiseWithLoop(){
  return new Promise(function executor (resolve,reject){
      for(let i = 0; i < 10000000000; i++){}
          let num = getRandomInt(10);
          if(num%2 == 0){
              resolve(num);
          }
          else{
              reject(num);
          }
  });
}
let x = createPromiseWithLoop();
console.log(x);

// In this piece of code we are creating a promise object and returning it immediately when the executor function is executed because there is asynchronous code present in the executor function.

// it will trigger the asynchronous code to the run time and return the promise object immediately.  



function createPromiseWithSetTimeout(){
  return new Promise(function executor (resolve,reject){
      setTimeout(function(){
          let num = getRandomInt(10);
          if(num%2 == 0){
              resolve(num);
          }
          else{
              reject(num);
          }

      } , 5000);
  });
}

let y = createPromiseWithSetTimeout();
console.log(y);

// it will always print promise{<pending>} because the promise object is returned immediately when the executor function is executed and the executor function is not yet executed because it is asynchronous in nature. if even there is 0 millisec in setTimeout.

// The first callback executor is executed if there is valid piece of code indside the executor function it will take complete time to execute and then return create promise object and return.

// if there is asynchronous code inside the executor function then it will return the promise object immediately and the asynchronous code will be executed in the run time.

// That's why console.log(y) prints pending state always so practice it on the dev tool

// In the resolve function  we can pass multiple values but it will only consider the first one as promise value and the rest of the values will be ignored.





// Try this code in the dev tool.
/* 

function createPromiseWithSetTimeout(){
    return new Promise(function executor (resolve,reject){
        setTimeout(function(){
            let num = getRandomInt(10);
            if(num%2 == 0){
                console.log("Fulfilling");
                return num;
            }
            else{
                console.log("Rejected");
                return (num);
            }

        } , 10000);
    });
}

*/



/* 

function createPromiseWithSetTimeout(){
    return new Promise(function executor (resolve,reject){
        setTimeout(function(){
            let num = getRandomInt(10);
            if(num%2 == 0){
                console.log("Fulfilling");
                resolve(num);
                console.log("Completed Fulfilling");
                return num;
            }
            else{
                console.log("Rejected");
                reject(num);
                console.log("Completed Rejecting");
                return (num);
            }

        } , 10000);
    });
}

retun makes no sense here it is optional in this case.

*/

/* 

function createPromiseWithSetTimeout(){
    return new Promise(function executor (resolve,reject){
        setTimeout(function(){
            let num = getRandomInt(10);
            if(num%2 == 0){
                console.log("Fulfilling");
                resolve(num);
                console.log("Completed Fulfilling");
                resolve(8);
                console.log("Completed Fulfilling");
                
            }
            else{
                console.log("Rejected");
                reject(num);
                console.log("Completed Rejecting");
                reject(11);
                console.log("One Again Completed Rejecting");
                
            }

        } , 10000);
    });
}

This piece of code illustrating here : That once you call resolve function with some value it set that value as promise result or promise value if you hit again resolve function with some another value it isn't going to update that promise value.
 

*/



/* 

 function createPromiseWithSetTimeout(){
    return new Promise(function executor (resolve,reject){
        setTimeout(function(){
            let num = getRandomInt(10);
            console.log("Fulfilling");
            resolve(num);
            console.log("Reject");
            reject(num);
            console.log("Default");
                
        } , 10000);
    });
}
undefined
 y = createPromiseWithSetTimeout();
Promise {<pending>}
VM2648:5 Fulfilling
VM2648:7 Reject
VM2648:9 Default
y
Promise {<fulfilled>: 9}


1. Executing whole block of code after calling resolve or reject.
2. we first call resolve so it's get fulfilled


*/




