//It will throw an error because console.lo is not a function. It should be console.log and it gives error in execution phase after printing "hi".
/* console.log("hi");
console.lo("Hello");
console.log("Bye"); */


// It will work fine because we have defined console.lo function.
/* console.log("hi");
console.lo = function(str){
  console.log(str);
}
console.lo("Hello");
console.log("Bye");
 */

/* console.log("hi");
console.log(10..toString()); // it will work beacuse 10 is primitive value and it is not an object. and auto boxinfg takes place.

console..log("BYE"); // It will give error in parsing beacuse console is alreadcy an object and it is not a valid syntax. */



/* 
10.toString()
Uncaught SyntaxError: identifier starts immediately after numeric literal
debugger eval code:1:4
(10).toString()
"10"
10..toString()
"10" 

(10.).toString()
"10" 

10.23.toString()
"10.23" 

*/


/* In JavaScript, `10.toString()` throws an error because the JavaScript parser interprets the dot (`.`) after `10` as a decimal point. When you write `10.toString()`, the parser expects a number with a fractional part after the dot, which leads to a syntax error.

On the other hand, `100toString` would also throw an error because `toString` is not a valid identifier or keyword following a number. It appears there's a misunderstanding in your example. 

The correct way to call `toString` on a number in JavaScript is by using parentheses to avoid confusion with the dot operator:

```javascript
(10).toString(); // "10"
(100).toString(); // "100"
```

Alternatively, you can use another dot to distinguish the method call:

```javascript
10..toString(); // "10"
100..toString(); // "100"
```

In these examples, the parentheses or double dots clarify that you are calling the `toString` method on the number.

(10.)toString() parser interprets like this and it will missing a member access operator after the number. So it will give an error.

*/

