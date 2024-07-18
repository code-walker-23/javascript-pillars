/* var teacher = "Vinay"; //global variable
function fun(){
  var teacher = " Rahul"; //local variable
  console.log(teacher); // Rahul
}

function gun(){
  var teacher = "Sarthak"; //local variable
  console.log(teacher); // Sarthak
}

fun();
gun();
console.log(teacher); // Vinay */

// In the above code, we have a global variable teacher and two functions fun and gun. In fun and gun, we have a local variable teacher. When we call fun and gun, the local variable teacher will be printed. When we call the global variable teacher, it will be printed. The output of the above code will be:

// It actually represents the concept of scope in JavaScript. The scope of a variable is the region of your program in which it is defined. JavaScript has three types of scope:
// 1. Global Scope
// 2. Local Scope
// 3. Block Scope

// Scopes is used for visibility of varibales and functions.
// Global Scope: A variable is said to be of global scope when it is declared outside of all functions. It is visible from any function.
// Local Scope: A variable is said to be of local scope when it is declared within a function. It is visible only within that function.it is also known as function scope.
// Block Scope: A variable is said to be of block scope when it is declared within a block. A block is a pair of curly braces {}. It is visible only within that block. It is also known as Lexical scope.


/* console.log(name);
let name = "Vinay";  Can not access name before initialization

function fun(){
  console.log(name);
}

console.log(name); */

/* // it gives no error in case of var
console.log(name);
var name = "Vinay";

function fun(){
  console.log(name);
}
fun();
console.log(name); */



/* var x = 10;
var x = 20;

function fun (){
  var x = 10;
  var x = 20;
  console.log(x);
} */

/* let y = 10;  It give error of re declaration but var not give error
 let y = 20; */
/* fun();
console.log(x); */

/* 

In JavaScript, using `var` to declare a variable allows you to redeclare the same variable multiple times within the same scope without causing an error. This behavior is due to how `var` works in contrast to `let` and `const`.

Here's why you don't get an error with your example:

```javascript
var x = 10;
var x = 20;
console.log(x); // Output: 20
```

1. **Variable Hoisting**: In JavaScript, `var` declarations are hoisted to the top of their scope. This means that regardless of where a `var` declaration appears within a function or global scope, it is as if it is declared at the beginning of that scope.

2. **No Block Scope**: Unlike `let` and `const`, which have block-level scoping (scoped to the nearest curly braces `{}`), `var` is scoped to the nearest function or, if declared globally, to the global scope. This lack of block-level scoping allows `var` variables to be redeclared multiple times within the same function or global scope without causing an error.

3. **Declaration and Initialization**: When you write `var x = 10;`, you are both declaring and initializing the variable `x`. When you subsequently write `var x = 20;`, you are effectively redeclaring and reinitializing `x`. JavaScript does not throw an error because it interprets this as simply reassigning the value of the existing variable `x`.

4. **Shadowing**: The second `var x = 20;` statement "shadows" the first one, meaning it declares a new variable `x` in the same scope, effectively overriding the previous value.

However, it's important to note that this behavior of `var` can lead to unexpected results and is generally considered a bad practice in modern JavaScript development due to its lack of block-level scoping and potential for variable hoisting issues. Instead, `let` and `const` should be used for more predictable scoping behavior and to avoid accidental redeclarations.

So, while your code does work without throwing an error, it's not something you should rely on or use in modern JavaScript coding practices.

*/
/* 
The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1

*/

/*
The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2


*/

/* var x = "Global Scope"
function fun(){
  var x = "Function Scope"; // function  creates its own scope for x variables
  console.log(x);
}
fun();
console.log(x); */

/* if(true){
  var x = "vinay";
}
console.log(x); // Vinay */


/* if(false){
  var x = "vinay"; // x is var so it is hoisted to the top of the function
}
console.log(x); // undefined */

/* {
  let x = 10;
}

console.log(x); // x is not defined */

/* 

function fun(){
  var y = 10; // function creates its own scope for y variable
}
console.log(y); // y is not defined.

*/


/* 
function fun(){
  var y = 10; // function creates its own scope for y variable
}
function gun(){
  console.log("value is :" + y); // y is not defined.
  var y = 15;
  console.log("value is :" + y); // 15

}

gun(); */



/* console.log(name); // undefined
var name = "Vinay";

function fun(){
  console.log(name); //vinay
}
fun();
console.log(name) // vinay */


// In case of let and const it gives error of cannot access before initialization within a block-scope{} 
// In case of var it gives undefined within a function scope and global scope and block-scope also.
//

/* if(true){
  console.log("Name :" + name); // undefined
  var name = "Vinay";
}
console.log("Name :" + name); // Vinay
 */

// This process is called hoisting in JavaScript. Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

// Hoisting is JavaScript's default behavior of moving declarations to the top. JavaScript only hoists declarations, not initializations.

// This process is takes place in parsing phase of JavaScript.

// In case of let and const it gives error of cannot access before initialization within a block-scope{}











/* var name  = "Vinay";
function fun(){
  var name  = "KaKu";
  content = 'JS'; // if content is not assigned then it will give error of content is not defined content; -> it will not come in asignment phase and that's it will not check for scope
  console.log(name);
}
function gun(){
 var name  = "Sanket";
  console.log(name);
}
// console.log(content); ReferenceError: content is not defined
fun();
console.log(content); // It gives output as JS During the execution phase of the code, the variable content is assigned a value of JS. Since the variable content is not declared using var, let, or const, it becomes a global variable. Hence, we can access the variable content outside the function fun. But fun should be called before accessing the variable content. If we try to access the variable content before calling the function fun, it will throw a ReferenceError. It is also know as autoglobals.
//It will not consider in parsing phase but it will consider in execution phase and it becomes global varibale in execution phase.
gun();
console.log(name);

// In the above code, we have a global variable name and two functions fun and gun. In fun and gun, we have a local variable name. When we call fun and gun, the local variable name will be printed. When we call the global variable name, it will be printed. The output of the above code will be:
// KakU
// Sanket
// Vinay

// In the pasrsing phase we only care about formal declaration of the variable and function. We don't care about the value

content  = 'JS' // It is not a formal declaration
console.log(content);

// In parsing phase , Scope resolution takes place.
// In execution phase, value assignment takes place.
 */


/* console.log(content); // content is not defined
content = "js"; //  */



console.log(name); 
if(true){
  console.log(name); // undefined
  var name = "vinay";
}
console.log(name); 

// let's try to understant the above code 👍
// if block will try to scope var name buit it couldn't and it is considered as the global variable and hoisted to the top of the code in global scope and difference is that if we will access before initialization then it will give undefined and if we will access after initialization then it will give the value of the variable. 


/* function fun(){
  console.log(content); // it will give error of content is not defined
  content = "js";
  console.log(content);
}
fun(); */

/* content;
function fun(){
  console.log(content); // it will give error of content is not defined
}
fun(); */

// The problem is that all non-formal declarations are not considered at the parsing phase and when the execution phase starts it starts assigning the values and it will ask that this variable belongs to which scope and which must be defined in parsing phase and it didn't come in parsing phase.

// So the conclusion is , all the non-formal declarations must be initialized such that it will come in the execution and try to find the scope of the variable and it will start and go out of the scopes unitl it finds the scope of the varibale and if it didn't find the scope then it will consider it as a global variable and hoisted to the top of the code.

/* console.log(content); //it must be used after the initialization of the variable.
function fun(){
  content = "JS"; 
} */

// we must call the function after the initialization of the variable. 


console.log("first is : " + a());

var a = function(){
  console.log("Hello");
}

function a(){
  console.log("Hi");
}

console.log("second is : " + a());



/* 

Let's break down the JavaScript code step by step to understand its working:

javascript

console.log("first is : " + a());

var a = function(){
  console.log("Hello");
}

function a(){
  console.log("Hi");
}

console.log("second is : " + a());

Step-by-Step Execution

    Function Declarations and Hoisting:
        Function declarations in JavaScript are hoisted to the top of their scope. This means that the function a() declared with function a() { ... } is known to the entire script from the start.
        Variable declarations (var a) are also hoisted, but their assignments are not. This means that the variable a is known from the start, but it is undefined until it is assigned.

    Function Declarations First:
        The function declaration function a() { console.log("Hi"); } is hoisted and takes precedence over the variable declaration var a. Initially, a is a function that logs "Hi".

    First console.log:
        At this point, a is still the function that logs "Hi" because the var a = function() { console.log("Hello"); } assignment hasn't been executed yet.
        So, a() is called, logging "Hi".
        The string concatenation is done, resulting in console.log("first is : " + a());, which logs Hi and then first is : undefined. This happens because a() returns undefined, so the concatenation with "first is : " results in undefined.

    Variable Assignment:
        After the first console.log, the line var a = function() { console.log("Hello"); } is executed. Now, a is reassigned to the new function that logs "Hello".

    Second console.log:
        Now a refers to the function that logs "Hello".
        a() is called, logging "Hello".
        The string concatenation is done, resulting in console.log("second is : " + a());, which logs Hello and then second is : undefined. This happens because a() returns undefined, so the concatenation with "second is : " results in undefined.

Output

Based on the above explanation, the output will be:

csharp

Hi
first is : undefined
Hello
second is : undefined

*/