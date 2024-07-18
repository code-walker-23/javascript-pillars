// snippet: async.js



/* 

console.log("Hi we are starting here");
setTimeout(function exec(){
  console.log("It is a callback function");
},0);
console.log("Hi we are ending here");

 */



// Any aysnchronous feature is not going to hamper your core synchronous execution. 



/* 

console.log("Hi we are starting here");
for(let i = 0; i < 3; i++){
  setTimeout(function exec(){
    console.log("It is a callback function");
  },10);
}
for(let i = 0; i < 1000000000; i++){ 
  // DURING THE EXECUTION OF THIS LOOP MANY CALLBACK FUCTIONS ARE READY TO EXECUTE BUT JAVASCRIPT WILL NOT HAMPER THE MAIN FLOW OF EXECUTION
}
console.log("Hi we are ending here");


*/







