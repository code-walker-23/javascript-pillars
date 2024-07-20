/* let count = 0;
let y = setInterval(function(){
  count++;
  console.log(count);
  if(count>15){
    clearInterval(y);
  }
},2000); */

// The setInterval function is used to execute a function at regular intervals. It is very similar to the setTimeout function, the only difference is that it will keep calling the function until you tell it to stop. The setInterval function takes two arguments: a callback function and a time interval in milliseconds. The callback function will be executed every time the time interval elapses. In this example, we are using the setInterval function to print the value of the count variable every 2 seconds. We are also using the clearInterval function to stop the execution of the setInterval function when the count variable reaches 15. This will prevent the function from running indefinitely.

// The setInterval function is useful when you want to execute a function at regular intervals, such as updating the time on a clock or fetching data from a server every few seconds. It is a powerful tool that can help you create dynamic and interactive web applications.


let count = 0;
let x = setInterval(function(){
  count++;
  console.log(count);
  if(count>20){
    clearInterval(x);
  }
},1000)