// Boxing is used to conver the primitive data type to object data type.

// console.log(1.toString()); // it will give error because it is not able to convert the number to string.
console.log((1).toString()); // 1 is get converted into Number object and then it is able to convert it into string.
console.log("abc".toString()); // it is able to convert the string into object and then it is able to convert it into string.
console.log(Number(1).toString()); // it is able to convert the number into object and then it is able to convert it into string.

/* In JavaScript and other languages, primitives values don’t have methods or properties, so if you want to use them, you need to use a wrapper.

Primitives are the simplest elements of a programming language. JavaScript has six primitive types: string, Number, boolean, null, undefined, and symbol, and everything else are objects.
Index

    AutoBoxing
    Manual Boxing and Gotchas
    Unboxing
    Conclusion

AutoBoxing

Boxing is wrapping a primitive value in an Object. When you treat a primitive type like if it were an object, e.g., calling to the toLowerCase function, JavaScript would wrap the primitive type into the corresponding object. This new object is then linked to the related built-in <.prototype>, so you can use prototype methods on primitive types.

As you can see here when you try to use a method on a primitive value JavaScript automatically does the boxing, and in consequence, you can use the different methods of the String object:

//String primitive name
const name = "KESK";name.toLowerCase();//kesk
name.substring(1);//ESK

Auto-boxing is an essential feature because it enables ease-of-access to Standard Library methods.
Manual Boxing and Gotchas

In general, using the boxed object wrapper directly isn’t usually a good idea because there are some gotchas related to him, and you have to be careful if you don’t want unexpected results.

Consider the following examples:

const a = new Boolean(true)
if(a) console.log("it's true")// it's true

const b = new Boolean(false)
if(!b) console.log("never runs");// objects are “truthy.“

const c = Object(false)
if(!c) console.log("never runs"); // objects are “truthy.“

The problem here is that you are creating an object wrapper around a false value, but objects are “truthy.” So, if you want to box a primitive value manually, be careful.

const b = Boolean(false)
if(!b.valueOf()) console.log("its false"); // its false

In general, it is better to let implicitly boxing because browsers are optimized to do this, so if you try to do this manually, your code will probably go slower. Also, when using object wrappers directly is easy to make mistakes. Prefer using primitive values like, for example, the string ‘abc’ vs. the equivalent wrapping Object.
Unboxing

The easiest way to obtain the underlying primitive value from an object wrapper is to use the valueOf() method:

const a = Object(false);
a == false; //true
a === false //falsea.valueOf() == false //true
a.valueOf() === false //true

Unboxing can also be done implicitly (coercion):

a == false; //true

Conclusion

Boxing and unboxing are regular practices, but depending on the language and implementation, the use of wrappers can be slower and use more memory than just using primitive values. On the other hand, it allows you to use higher-level data structures or methods and achieve higher flexibility in your code.

If you use manual boxing, be careful with the Wrapper Gotchas; also, in general, it is better to let implicitly boxing because browsers engines are optimized to do that.

Thanks for reading me! */

/* const a = new Boolean(true)
console.log(a);
if(a) console.log("it's true")// it's true

let b = new Boolean(false)
console.log(b);

if(!b) console.log("never runs");// objects are “truthy.“

const c = Object(false)
console.log(c);

if(!c) console.log("never runs"); // objects are “truthy.““

b = Boolean(false)
if(!b.valueOf()) console.log("its false"); // its false */

// Gotchas : an instance of catching someone out or exposing them to ridicule.

// Unboxing
const a = Object(false);
console.log(a == false); //true -> a -> ToNumber(a) -> ToPrimitive(a) -> ToBoolean(a) -> false -> false == false -> true
console.log(a === false) //false 
console.log(a.valueOf() == false) //true
console.log(a.valueOf() === false) //true

/* In JavaScript, the comparison `a == false` evaluates to `true` because of how abstract comparison operations are handled by the language's rules.

Let's break down what happens step by step:

1. **Object Creation**: 
   ```javascript
   const a = Object(false);
   ```
   Here, `Object(false)` is creating a wrapper object around the primitive value `false`. This is done using the `Object` constructor, which can create an object wrapper for any given value.

2. **Abstract Equality Comparison (`==`)**:
   In JavaScript, the abstract equality comparison (`==`) checks for equality after attempting to convert both operands to a common type. Here’s how it works with `a == false`:
   
   - **ToPrimitive Conversion**: The `ToPrimitive` operation is applied to `a` to convert it to a primitive value. For objects, this involves calling the object's `valueOf` and `toString` methods in that order, until a primitive is obtained.
   
   - **valueOf Method**: The `valueOf` method of the object `a` (which was created using `Object(false)`) returns the wrapped primitive value (`false` in this case).

   - **Comparison**: Now, the comparison becomes `false == false`.

3. **Comparison Result**:
   Since both sides of the comparison are now the same primitive value (`false`), the comparison `false == false` evaluates to `true`.

So, the reason `console.log(a == false)` outputs `true` is because the abstract equality operator (`==`) converts the object `a` (which wraps the primitive `false`) into its underlying primitive value (`false`), and then compares it to the boolean `false`, resulting in a true comparison. 

This behavior demonstrates how JavaScript's abstract equality comparison works with objects and primitives, converting as needed before performing the comparison. */



/* let x = {Boolen:false};
undefined
x.valueOf();
Object { Boolen: false } it returns whole object

const a = new Boolean(false) it creates different wrapper object that tovalueOf false.
undefined
a.valueOf()
false
a
Boolean { false }
a.toString()
"false" 
 */


let x = 10;
console.log(x.valueOf()); 
console.log(x.toString());
console.log(Object(x));// wrapper object -> []

// Normal object

let x1 = {x:10};
console.log(x1.valueOf()); // it will give error because valueOf is not defined.
console.log(x1.toString());
console.log(Object(x1));  {}

// There is differnce between the normal object and the primitive object.