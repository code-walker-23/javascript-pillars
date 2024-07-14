/* console.log(1<2<3);
let x = NaN;
console.log(isNaN(x));
if(typeof(x) == 'number' && x !== x){
  console.log('x is NaN');
}else{
  console.log('x is not NaN');
} 
console.log(isNaN("sanket"));
console.log(Number.isNaN("sanket"));
console.log(x!==x); Homework
// This above statement gives false for te following types:
// 1. Number
// 2. boolean
// 3. string
// 4. null and undefined
// 5. array and objects.
// 6. */

let x = -0;
console.log(x === -0);
console.log(x === +0); // Both give true then how to determine the number is -0 or not.
//1. option is to make it string
console.log(x.toString());
console.log(String(x)); // both give zero it will not work we want "-0" as string.
//So there is another way to determine the number is -0 or not.
console.log(Object.is(x,-0)); // it will give true if the number is -0 otherwise false.
console.log(Object.is(x,+0)); 

console.log(Math.sign(-0));
console.log(Math.sign(0));

/* if(Math.sign(x) == -0 && x == 0){
  console.log('x is -0');
}else{
  console.log('x is not -0');
} it is not goig to work */

// The above code is not going to work because the sign of -0 is -0 and the value is also -0 so it will not work.

// wrting a function to determine the number is -0 or not. Homework
function signOfNumber(num){
  if(num == 0){
    if(Object.is(num,-0)){
      return -1;
  }

  else return 1;
  }
  /* else{
    if(num<0) return -1;
    else return 1; 
  } */
 else return Mathsign(num);
}

console.log(signOfNumber(0));

function isNegativeZero(num){
  if(num == 0 && 1/num == -Infinity){
    return true;
  }
  else return false;

}
// There is no problem with +ve non-zero numbers. and -Ve non-zero numbers to identify.
// The problem is to indentify the -0 and +0.
console.log(isNegativeZero(9));
console.log(isNegativeZero(-0));


console.log(String(-0));
console.log(String(-23));




