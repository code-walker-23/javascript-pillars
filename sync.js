// JavaScript is a synchronous language, meaning it will execute your code line by line. However, there are some exceptions to this rule. For example, when you make a request to a server, JavaScript will not wait for the server to respond before moving on to the next line of code. This is known as asynchronous programming.

// JavaScript is single threaded language which means it can execute only one command at a time. But using callbacks, we can run asynchronous functions as well. Let’s understand this with the help of a code:

/* console.log("Hi we are starting here");
for(let i = 0; i < 1000000000; i++){ // javascript will time to execute and then move to the next line
  // console.log(i);
}
console.log("Hi we are ending here"); */

// Synchronous nature of JavaScript is valid only for valid javascript code that is written by the developer. But when we are dealing with the external resources like API calls, file system, database, etc. then the synchronous nature of JavaScript is not valid. In such cases, JavaScript will not wait for the response from the external resources and will move to the next line of code. This is known as Asynchronous nature of JavaScript.

// There is a mechanism that is responsible to handle the asynchronous nature of JavaScript. This mechanism is known as the Event Loop. The Event Loop: It is a mechanism that makes sure that the code runs in a non-blocking way. It is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

// Callbacks: Callbacks are the functions that are passed as arguments to another function. Callbacks are used to handle the asynchronous nature of JavaScript. Callbacks are used to make sure that a function is not executed before the completion of another function. Callbacks are used to make sure that a function is executed only after the completion of another function.

// Callback Hell: Callback Hell is a situation where multiple callbacks are nested inside each other. It makes the code difficult to read and maintain. It is also known as Pyramid of Doom. Callback Hell is a situation where multiple callbacks are nested inside each other. It makes the code difficult to read and maintain. It is also known as Pyramid of Doom.



//https://medium.com/@gemma.croad/understanding-the-javascript-runtime-environment-4dd8f52f6fca


/* 

function timeConsumingByLoop(){
  console.log("loop starts");
  for(let i = 0; i < 1000000; i++){
    // some implementation
  }
  console.log("loop ends")
}

function timeConsumingByRuntimeFeature(){``
  console.log("starting timer!");
  setTimeout(function(){
    console.log("completed the timer!");
  },0) // same output for any  millisecond(including zerovalue) 
}

console.log("hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();
for(let i = 0; i < 1000000000; i++){

}
console.log("bye");


 */


// Understanding the xecution of the above code:

// 1. The first console.log() will be executed and the output will be “hi”.

// 2. The timeConsumingByLoop() function will be executed. It will print “loop starts” and then it will run the loop for 1000000 times. After that, it will print “loop ends”.

// 3. The timeConsumingByRuntimeFeature() function will be executed. It will print “starting timer!”. Then it will set a timer for 1000 milliseconds or any milliseconds. After 1000 milliseconds, it will print “completed the timer!”.

//But the javascript says to runtime hey there is a timer set for 0 milliseconds so please execute it after the current execution of the code.when timer completes ,runtime says to the javascript that my timer is complete and execute my callback function then Javascript says i am execuitng my native piece of code and after that i will execute your callback function.Until then push this into the event queue or callback queue

// There is a conecept event loop that constantly checks the call stack and the callback queue. If the call stack is empty then it will check the callback queue and if there is any callback function in the callback queue then it will push that callback function into the call stack and execute it.


// But remember before pushing the callback function into the callback queue there is no global piece of code left to execute. If there is any global piece of code left to execute then the callback function will not be pushed into the callback queue. It will be pushed into the callback queue only when there is no global piece of code left to execute.

/* 

Whenever runtime completes it's task it will check the call stack and if the call stack is empty then it will check the callback queue and if there is any callback function in the callback queue then it will push that callback function into the call stack and execute it.

runtime activities: low priority
javascript activities: high priority


*/


/* 

function timeConsumingByLoop(){
  console.log("loop starts");
  for(let i = 0; i < 1000000; i++){
    // some implementation
  }
  console.log("loop ends")
}

function timeConsumingByRuntimeFeature0(){``
  console.log("starting timer0");
  setTimeout(function exec0(){
    console.log("completed the timer0");
    for(let i = 0; i < 100000000; i++){}
  },5000) 
}


function timeConsumingByRuntimeFeature1(){``
  console.log("starting timer1");
  setTimeout(function exec1(){
    console.log("completed the time1");
  },0) 
}


function timeConsumingByRuntimeFeature2(){``
  console.log("starting timer2");
  setTimeout(function exec2(){
    console.log("completed the timer2");
  },200)
}


console.log("hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("bye"); 

// Output 👍:
// hi
// loop starts
// loop ends
// starting timer0
// starting timer1
// starting timer2
// loop starts
// loop ends
// bye
// completed the time1
// completed the timer2
// completed the timer0




*/




// Nested Callbcks

function timeConsumingByLoop(){
  console.log("loop starts");
  for(let i = 0; i < 1000000; i++){
    // some implementation
  }
  console.log("loop ends")
}

function timeConsumingByRuntimeFeature0(){``
  console.log("starting timer0");
  setTimeout(function exec0(){
    console.log("completed the timer0");
    for(let i = 0; i < 100000000; i++){}
  },5000) 
}


function timeConsumingByRuntimeFeature1(){``
  console.log("starting timer1");
  setTimeout(function exec1(){
    console.log("completed the time1");
    setTimeout(function exec1_1(){
      console.log("completed the time1_1");
    },0) // This nested callback function directly push to the queue wheneever it's timeout is completed , Depending on the timeout value
    // of this nested callback nested function , output will change for 0 timeout it will execute directly after the completion of the current execution of the code
    // for 300ms it will execute after exec2 callback function.
    // for 6000ms it will execute after exec0 callback function.
  },0) 
}


function timeConsumingByRuntimeFeature2(){``
  console.log("starting timer2");
  setTimeout(function exec2(){
    console.log("completed the timer2");
  },200)
}


console.log("hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("bye"); 