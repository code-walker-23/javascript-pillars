/* function fun(){
  var x = 20;
  function gun(){
    var y = 20;
    console.log(x);
    console.log(y);
  }
  gun();
  console.log();
}
fun(); */

/* https://medium.com/@osmanakar_65575/javascript-lexical-and-dynamic-scoping-72c17e4476dd */

/* var fun = 123;
function fun(){
  return 'fun2';
}
console.log(fun);//123 

If the code is modified to include `var fun = 123;`, it would look like this:

```javascript
var fun = 123;
function fun() {
  return 'fun2';
}
console.log(fun);
```

Here's the step-by-step execution and result:

1. **Variable Declaration and Assignment (`var fun = 123;`)**: 
   - The variable `fun` is declared and assigned the value `123`.

2. **Function Declaration (`function fun() { return 'fun2'; }`)**: 
   - The function `fun` is defined. Function declarations are hoisted to the top of their scope, so the function definition takes precedence over the variable declaration. However, because the variable declaration `var fun` is also hoisted, it will be initialized to `undefined` at the beginning of the execution context. 
   - When the code execution reaches the `var fun = 123;` line, the variable `fun` is assigned the value `123`, overriding the function definition.

3. **Logging the `fun` variable (`console.log(fun);`)**: 
   - The `console.log` statement is executed. At this point, `fun` holds the value `123` due to the variable assignment, and it is no longer referring to the function.

The result of the `console.log(fun);` statement will be:

```javascript
123
```

This output shows that `fun` is now `123` because the variable assignment overwrote the function declaration.

*/
/* 
var fun = 123;
function fun(){
  return 'fun2';
}
console.log(fun()) // fun is not a function */

/* var fun;
function fun(){
  return 'fun2';
}

console.log(fun())

In the given code snippet:

```javascript
var fun;
function fun() {
  return 'fun2';
}
console.log(fun);
```

Here is the step-by-step execution and result:

1. **Variable Declaration (`var fun;`)**: 
   - The variable `fun` is declared but not assigned a value yet. At this point, `fun` is `undefined`.

2. **Function Declaration (`function fun() { return 'fun2'; }`)**: 
   - The function `fun` is defined. In JavaScript, function declarations are hoisted, meaning they are moved to the top of their scope and are available throughout the code. This means that the `fun` identifier now refers to this function.

3. **Logging the `fun` variable (`console.log(fun);`)**: 
   - The `console.log` statement is executed. At this point, `fun` refers to the function itself, not the variable declared earlier, because the function declaration takes precedence. So, `console.log(fun)` will log the function definition.

The result of the `console.log(fun);` statement will be:

```javascript
[Function: fun]
```

This output shows that `fun` is a function, and it prints the function's definition.



*/

function fun(){
  return 'fun1';
}
var fun;
console.log(fun); // [Function: fun] , if there is no assignment to fun variable then it will be function