const restaurant = {
  name: "Classic Italiano",
  location: "Via Angelo....",
  categories: ["Italian", "Pizzeria", "toto", "poto"],
  startMenu: ["Facoccia", "Garlic", "toto", "poto"],
  mainMenu: ["Pizza", "Pasta", "Risottot"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  oderDelivery: function ({ time = "", address = "" }) {
    // console.log(obj);
    console.log("time : ", time);
    console.log("address : ", address);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `your pasta is ready with these ingredients : ${ing1},${ing2},${ing3}`
    );
  },
  orderPizza: function (ing1, ...otherIng) {
    console.log(
      `your pasta is ready with these ingredients : main : ${ing1} with other : ingredients${otherIng}`
    );
  },
};

/* 
cases of spread operator: 

1. creating new array with existing array 
2. shallow copy of the array 
3. merging two arrays 
4. passing multiple values to a functions

*/

// 1. First use of rest pattern -> Destructuring
// spreade operator -> using it on the right hand side of the assignment

const arr = [1, 2, ...[3, 4]];
console.log(arr);

// using spread operator on the left hand side of the assignment
// ...others -> this is called the rest pattern because it takes all the rest elements of the array
// rest operator -> it is collecting the unused values in destructuring assignment

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(others); // arr = [3,4,5]

const [menu1, menu2, ...otherMenu] = [
  ...restaurant.mainMenu,
  ...restaurant.startMenu,
];

console.log(menu1);
console.log(menu2);
console.log(otherMenu);

// errorr
/* 
const [menu1, menu2, ...otherMenu,menu2] = [
  ...restaurant.mainMenu,
  ...restaurant.startMenu,
];

*/

// objects
// these all are also know as the destructuring assignment
const { sat, ...otherWeekDays } = restaurant.openingHours;
console.log(sat);
console.log(otherWeekDays);

//2. Functions:

// here the problem is that we dont know actually how many arguments we gonna send to add functions.
// to overcome this problem we will use the rest operator to wrap everything
// taking the multiple values and pack them into the array
// ...number -> everything inside number is know as rest parameters

const add = function (...number) {
  console.log(number); // -> [val1,val2,......,valn]
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log("sum", sum);
};

add(2, 3);
add(4, 5, 6);
add(4, 5, 6, 7);
add(4, 5, 6, 7, 8);
const x = [1, 2, 3, 4, 5];
add(...x);

restaurant.orderPizza("pizza", "aa", "ddd", "jhdjsd");
restaurant.orderPizza("pizza");

// objects -> whenever we will use rest operator in objects always wrapped inside {}
const test = function ({ ...obj }) {
  console.log(obj);
};
test({ ...{ v: 34, c: 45 } });

// spread operator -> it is used where we want write values separated by commas
// rest operator -> it is used where we won't to write variable name separated by commas (like function receiving values)
