/* function fun(){
  
} */
/* 
let f = function gun(){

} */

/* let a = function(){

} */

(function x(t) {
  console.log("Hi", t); // eefi -> immediately invoked function expression
})("Vinay");

/* let y = () => {

}
 */

/* 

Function expressions in JavaScript can take several forms. Here are a few examples:

### 1. Named Function Expression
A named function expression defines a function with a name. This name is local to the function body and can be used for recursion or debugging purposes.

```javascript
const namedFunction = function myFunction() {
  console.log("This is a named function expression.");
};

namedFunction(); // Outputs: This is a named function expression.
```

### 2. Anonymous Function Expression
An anonymous function expression defines a function without a name. This is commonly used in callback functions.

```javascript
const anonymousFunction = function() {
  console.log("This is an anonymous function expression.");
};

anonymousFunction(); // Outputs: This is an anonymous function expression.
```

### 3. Immediately Invoked Function Expression (IIFE)
An IIFE is a function that is executed immediately after it is defined.

```javascript
(function() {
  console.log("This is an IIFE.");
})(); // Outputs: This is an IIFE.
```

### 4. Arrow Function Expression
Arrow functions provide a shorter syntax and do not have their own `this`, `arguments`, `super`, or `new.target`.

```javascript
const arrowFunction = () => {
  console.log("This is an arrow function expression.");
};

arrowFunction(); // Outputs: This is an arrow function expression.
```

### 5. Function Expression as a Callback
Function expressions are often used as arguments to other functions, such as event handlers or array methods.

```javascript
setTimeout(function() {
  console.log("This is a callback function expression.");
}, 1000); // Outputs: This is a callback function expression. (after 1 second)
```

### 6. Function Expression as a Property of an Object
Function expressions can be used as properties of objects.

```javascript
const obj = {
  propertyFunction: function() {
    console.log("This is a function expression as an object property.");
  }
};

obj.propertyFunction(); // Outputs: This is a function expression as an object property.
```

### 7. Function Expression in a Conditional
You can define a function expression conditionally.

```javascript
let conditionalFunction;
if (true) {
  conditionalFunction = function() {
    console.log("This function was defined conditionally.");
  };
}

conditionalFunction(); // Outputs: This function was defined conditionally.
```

These examples showcase different ways to use function expressions in JavaScript. Each form has its own use case and benefits depending on the context in which it is used.

*/

// Use case of named function expression
// Named Function Expression

/* function fun(fn){
  console.log("Hi How are you");
  fn();
}

fun(function askingAboutYou(){
  console.log("I am fine and you?");
}); */

// The only use case of named function expression is that readability of code will be increased.
// Good naming of function will help in debugging and understanding the code.

/* 

callee is a property of the arguments object. It can be used to refer to the currently executing function inside the function body of that function. This is useful when the name of the function is unknown, such as within a function expression with no name (also called "anonymous functions").

(The text below is largely adapted from a Stack Overflow answer by olliej)

Early versions of JavaScript did not allow named function expressions, and for this reason you could not make a recursive function expression.

For example, this syntax worked:

JS
Copy to Clipboard
function factorial(n) {
  return n <= 1 ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);
but:

JS
Copy to Clipboard
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 :  what goes here?  (n - 1) * n;
});
did not. To get around this arguments.callee was added so you could do

JS
Copy to Clipboard
[1, 2, 3, 4, 5].map(function (n) {
  return n <= 1 ? 1 : arguments.callee(n - 1) * n;
});
However, the design of arguments.callee has multiple issues. The first problem is that the recursive call will get a different this value

*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee#description

// The arguments.callee property contains the currently executing function. This is useful for anonymous functions, such as those employed in recursive algorithms.

// Use case of named function expression

// In case of production levelcode, we should always use named function expression. It will help in debugging and understanding the code.

// console.trace will give the stack trace of the code. and there is log of all the functions which are called. and enginner can easily debug the code.
// But if the function is anonymous then it will not give the name of the function. So, it is always good to use named function expression.

function fun(fn) {
  console.log("Hi How are you");
  fn();
}

fun(function askingAboutYou() {
  console.log("I am fine and you?");
  console.trace(); // it will give the stack trace of the code. and show the name of the function.if there is no name of the function then it will show anonymous , then it will be hard to debug the code.
});

// Usecase of iife
// IIFE is used to execute the function immediately after defining it. It is used to create the private scope.
// It is used to avoid the global scope pollution.
// It is used to avoid the variable name collision.
// It is used to avoid the variable name overriding.
// It is used to avoid the variable name redeclaration.
// It is used to avoid the variable name shadowing.
// It is used to avoid the variable name hoisting.

// if someone new come in the project then he will not be able to understand the code. So, it is always good to use the IIFE.

function x() {
  console.log("Hi");
}

(function x(t) {
  console.log("Hi", t); // eefi -> immediately invoked function expression
})("Vinay");
x();
// But it is not a good practice to use IIFE in the code. It is always good to use the named function expression.
// use only for small code snippet.

// Use case of arrow function expression
// Arrow function expression is used to write the function in a short form.
// It is used to avoid the function keyword.
// It is used to avoid the return keyword.
// It is used to avoid the curly braces.
// It is used to avoid the function name.
