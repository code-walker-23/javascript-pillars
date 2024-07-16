// JavaScript is a synchronous language, meaning it will execute your code line by line. However, there are some exceptions to this rule. For example, when you make a request to a server, JavaScript will not wait for the server to respond before moving on to the next line of code. This is known as asynchronous programming.

// JavaScript is single threaded language which means it can execute only one command at a time. But using callbacks, we can run asynchronous functions as well. Let’s understand this with the help of a code:

console.log("Hi we are starting here");
for(let i = 0; i < 1000000000; i++){ // javascript will time to execute and then move to the next line
  // console.log(i);
}
console.log("Hi we are ending here");

// Synchronous nature of JavaScript is valid only for valid javascript code that is written by the developer. But when we are dealing with the external resources like API calls, file system, database, etc. then the synchronous nature of JavaScript is not valid. In such cases, JavaScript will not wait for the response from the external resources and will move to the next line of code. This is known as Asynchronous nature of JavaScript.

// There is a mechanism that is responsible to handle the asynchronous nature of JavaScript. This mechanism is known as the Event Loop. The Event Loop: It is a mechanism that makes sure that the code runs in a non-blocking way. It is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

// Callbacks: Callbacks are the functions that are passed as arguments to another function. Callbacks are used to handle the asynchronous nature of JavaScript. Callbacks are used to make sure that a function is not executed before the completion of another function. Callbacks are used to make sure that a function is executed only after the completion of another function.

// Callback Hell: Callback Hell is a situation where multiple callbacks are nested inside each other. It makes the code difficult to read and maintain. It is also known as Pyramid of Doom. Callback Hell is a situation where multiple callbacks are nested inside each other. It makes the code difficult to read and maintain. It is also known as Pyramid of Doom.

