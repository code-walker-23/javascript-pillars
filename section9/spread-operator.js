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
console.log("new : ", newObject1);

function testCase({ v, c }) {
  console.log(v, c);
}
const o = { v: 23, c: 25 };
// console.log(...o); -> error -> always wrapped in {}
console.log({ ...o });
testCase({ ...o });































/* The spread operator (`...`) in JavaScript is quite versatile when it comes to working with objects. Here are some common scenarios where you can use it:

1. **Merging Objects:**
   You can use the spread operator to combine properties from multiple objects into a single object.

   ```javascript
   const obj1 = { a: 1, b: 2 };
   const obj2 = { b: 3, c: 4 };
   const merged = { ...obj1, ...obj2 };
   console.log(merged); // { a: 1, b: 3, c: 4 }
   ```

   In this example, if there are properties with the same name, the value from the last object (`obj2`) will overwrite the previous one.

2. **Copying Objects:**
   You can create a shallow copy of an object. This is useful for avoiding mutations to the original object when you want to make modifications.

   ```javascript
   const original = { x: 1, y: 2 };
   const copy = { ...original };
   console.log(copy); // { x: 1, y: 2 }
   ```

3. **Updating Object Properties:**
   You can use the spread operator to create a new object with some properties updated while keeping the rest unchanged.

   ```javascript
   const user = { name: 'Alice', age: 25 };
   const updatedUser = { ...user, age: 26 };
   console.log(updatedUser); // { name: 'Alice', age: 26 }
   ```

4. **Destructuring with Rest Properties:**
   You can use the spread operator to capture the remaining properties of an object after destructuring.

   ```javascript
   const person = { name: 'Bob', age: 30, city: 'New York' };
   const { name, ...rest } = person;
   console.log(name); // 'Bob'
   console.log(rest); // { age: 30, city: 'New York' }
   ```

5. **Function Arguments:**
   When dealing with functions that take an object as an argument, you can use the spread operator to pass individual properties of the object as separate arguments.

   ```javascript
   function greet({ name, age }) {
     console.log(`Hello ${name}, you are ${age} years old.`);
   }
   
   const person = { name: 'Eve', age: 28 };
   greet({ ...person }); // 'Hello Eve, you are 28 years old.'
   ```

These uses of the spread operator can help make your code cleaner and more concise by reducing the need for more verbose methods of object manipulation. */
