// High order function -> high order function is a function that takes a function as an argument or returns a function as a result.

function fun(x,fn){
  console.log(x);
  fn();
}

fun(10,function exec(){
  console.log("I am a function passed to a HOF function");
  // console.trace();
});

//eferenceError: Cannot access 'x' before initialization
/* x();
const x = function(){
  console.log("Hello"); 
} */

// it will work fine because of hoisting
/* add(19,45);

function add(a,b){
  return a+b;
} */



// It is not of too much use but it is used in the functional programming.
// It is used in the functional programming to make the code more readable.
// It is used to make the code more modular.
// It is used to make the code more maintainable.
// It is used to make the code more testable.
// It is used to make the code more reusable.
// It is used to make the code more composable.


let arr = [1,10,9,100,1000,11,12,13,14,2,3]
// arr.sort();
arr.sort((a,b) => a-b);
console.log(arr);
/* 
if a-b is negative then a will come first.
if a-b is positive then b will come first.  
if a-b is zero then a and b will remain same. 
*/

// sort() --> it will sort the array in lexicographical order.
/* 
0 -> A
1 -> B
2 -> C
3 -> D
4 -> E
5 -> F
6 -> G
7 -> H
8 -> I
9 -> J

arr = [B, BA, J, BAA, BAAA, BB, BC, BD, BE, C, D]

SORTED ARR = [B, BA, BAA, BAAA, BB, BC, BD, BE, C, D, J];

How to make the sort() method to sort the array in ascending order?
sort will take the comparator function as an argument.That tell the sort method how to sort the array.

sort is a high order function because it takes a function as an argument.

worst sorting technique is generating permutations and then sorting them. it take O(n!) time complexity.
*/









