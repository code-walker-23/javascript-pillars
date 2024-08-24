"use strict";
//this is an ES6 feature for unpacking the values from array and objects
const restaurant = {
  name: "Classic Italiano",
  location: "Via Angelo....",
  categories: ["Italian", "Pizzeria", "toto", "poto"],
  startMenu: ["Facoccia", "Garlic", "toto", "poto"],
  mainMenu: ["Pizza", "Pasta", "Risottot"],
  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// breaking the complex data structure into the smaller ones
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// destructuring the array
// original array is not affected
const [x, y, z] = arr;
console.log(x, y, z);

/* const [first, second] = restaurant.categories;
console.log(first, second); */

// skiping the element

/* const [first, , third] = restaurant.categories;
console.log(first, third); */

// swaping the main and secondary with common logic

/* let [main, secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;

console.log(main, secondary); */

// swaping the main and secondary with destructuring logic

// simply just create two variables array that we want to swap
// it is quite easy

/* let [main, secondary] = restaurant.categories; //must be let here
[main, secondary] = [secondary, main];
console.log(main, secondary); */

// using the fucntion and then destructuring

const [starter, main] = restaurant.order(0, 2);
console.log(starter, main);

// nested arrays and nested destructuring

const nested = [1, 2, [3, 4]];
const [i, j, [k, l]] = nested;
console.log(i, j, k, l);

// default values

/* const [p, q, r] = [8, 0];
console.log(p, q, r); // r = undefined */

const [p = 1, q = 1, r = 1] = [8, 0]; // p = 8 , q = 0, r = 1;
console.log(p, q, r);
