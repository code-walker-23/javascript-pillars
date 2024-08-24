// spread operator is used to expand all the eements of data structure
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
};

const arr = [4, 5, 6];

// now if want to make an new array and i want all the elements of the arr array in the new array at the last or at anyother position

const newArray = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log("without spread operator", newArray);

// but with spread operator we can expand all the elements of arr array and write all the elements individually.

const newArray1 = [1, 2, 3, ...arr];
console.log("with spread operator", newArray1);

// whenver we need the elements of an array individually then use spread operator

console.log(...newArray1);
console.log(1, 2, 3, 4, 5, 6);

const newMenu = [...restaurant.mainMenu, "added1", "added2", "added3"];
console.log(newMenu);

// two important usecases of spread operator :
//1. shallow copies of arrays.
//2. merge two arrays together.

// 1. shallow copy of the array

const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy of ...restaurant.mainMenu
console.log(mainMenuCopy);

const menu = [...restaurant.startMenu, ...restaurant.mainMenu];
console.log("combined menu : ", menu);

// iterables in javascript : arrays,strings,maps,sets...etc
// all the built-in data structure in js is iterable except objects. -> confusing line
// https://medium.com/@adityakashyap_36551/iterators-and-iterables-in-javascript-44eb007e498

// we can use spread on only iterables
// so we also use in string

const vinay = "Vinay";
const letters = [...vinay, "c", "h", "h", "a", "b", "r", "a"];
console.log(letters);

// both are samething
console.log(...vinay);
console.log("V", "i", "n", "a", "y", "c", "h", "h", "a", "b", "r", "a");

// const a = ...vinay; -> error it should be wrapped in []
// console.log(`${...vinay}`) -> error because ${it does not expect the value separted by commas, it expect the variable}

/* const ingredients = [
  prompt("Let's make pasta: Ingredients 1?"),
  //prompt('Let\'s make pasta: Ingredients 1?'),
  prompt("Ingredients 2?"),
  prompt("Ingredients 3?"),
];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// we can do this very easily
restaurant.orderPasta(...ingredients); // ES6 */

// we can also use the spread on objects

const newRestaurant = {
  ...restaurant,
  newMenu: "updated",
};
console.log("new restaurant : ", newRestaurant);

// create a shallow copy of object

const newObject = { ...restaurant };
console.log("new object : ", newObject);

// merge

const newObject1 = { ...newObject, ...restaurant };
console.log("new : ",newObject1);
