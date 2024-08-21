// map -> it is a function that takes a single argument and returns an array.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double = (x) => {
  return x * x;
};
const output = arr.map(double); // these are the higher order functions that consumes the function as an argument.
console.log(output);

const binary = (x) => {
  return x.toString(2);
};
const output1 = arr.map(binary);
console.log(output1);

// filter -> it is a function that takes a single argument and returns an array.

const filterEven = arr.filter((val) => val % 2 == 0);
console.log(filterEven);

function isOdd(x) {
  return x % 2 != 0;
}
const filterOdd = arr.filter(isOdd);
console.log(filterOdd);

// reduce -> it uses when you are taking all the elements of an array and comes out with single value
// sum or max or min inside the array

// if we don't use the reduce then

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log("sum : ", sum(arr));

// now we are using reduce function and curr will keep track of the current value
const fun = (acc, curr) => {
  acc = acc + curr;
  return acc;
};
const result = arr.reduce(fun, 0); // second parameter will be the initial value of the accumulator
console.log(result);

// writing the maximum value

const fun1 = (acc,curr)=>{
  if(acc < curr){
    acc = curr;
  }
  return acc;
}
const maxValue = arr.reduce(fun1,-1);
console.log(maxValue);
