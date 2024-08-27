// maps are lot moreuseful than sets
// the diff in maps and object is in map key can have any data types
// ES6
const map = new Map();
/* 
map.set("firstName", "Vinay"); // always return updated map
map.set("lastName", "Chhabra");
map.set(1, [1, 2, 3, 4]);
map.set([1, 2, 3, 4], 2);
map.set({ 1: "map" }, [1, 2, 3, 4]);
map.set("firstName", "kaku"); // updated name 
*/

// console.log(map);

map
  .set("firstName", "Vinay")
  .set("lastName", "Chhabra")
  .set(1, [1, 2, 3, 4])
  .set([1, 2, 3, 4], 2)
  .set({ 1: "map" }, [1, 2, 3, 4])
  .set("firstName", "kaku")
  .set(true, "we are right")
  .set([1, 2, 3, 4], 2); // duplicates because reference equality in maps

console.log(map);

// getting the values from the map

console.log(map.get("firstName"));
console.log(map.get("lastName"));
console.log(map.get(1));
console.log(map.get(true));
console.log(map.get({ 1: "map" })); // undefined
console.log(map.get([1, 2, 3, 4])); // undefined

// checking for the keys

console.log(map.has("firstName"));
console.log(map.delete("firstName")); //  true and then delete
console.log(map.size);
// map.clear();

/* 

When working with Map in JavaScript, understanding the behavior of keys is crucial for correctly retrieving values. Let's break down why "firstName" works as a key but objects or arrays do not, focusing on the difference between primitive values and object references.

Key Concepts:
Primitive Values (e.g., Strings, Numbers)

Primitive values in JavaScript are compared by value. For example, strings and numbers are compared by their actual content.
When you use a string or number as a key in a Map, JavaScript directly compares the content of the strings or numbers, not their references.
Object References (e.g., Objects, Arrays)

Objects and arrays are compared by reference, not by their content. This means that two different objects or arrays, even if they have identical properties or elements, are considered different keys if they refer to different memory locations.

In JavaScript, when using a `Map`, the keys are compared by reference, not by value. This means that two different objects, even if they have the same properties, are considered different keys because they refer to different locations in memory. The same principle applies to arrays.

Here’s why `map.get({ 1: "map" })` and `map.get([1, 2, 3, 4])` return `undefined`:

### Explanation:

1. **Reference Equality in Maps:**
   - In JavaScript `Map` objects, keys are compared by reference. Two keys that are objects or arrays with the same content but different references are considered different keys.
   - This means if you create two different objects with the same properties, they are treated as different keys.

2. **Key Storage in Maps:**
   - When you add a key-value pair to a `Map`, the key is stored by reference. For `map.get(key)` to return a value, the key you use to retrieve it must be the exact same reference as the key used to store the value.

### Example:

Here’s an example to illustrate this:

```javascript
const map = new Map();

// Adding an entry to the map
const keyObject = { 1: "map" };
const keyArray = [1, 2, 3, 4];

map.set(keyObject, "value for object");
map.set(keyArray, "value for array");

// Retrieving with different references
console.log(map.get({ 1: "map" })); // undefined
console.log(map.get([1, 2, 3, 4])); // undefined

// Correctly retrieving with the same references
console.log(map.get(keyObject)); // "value for object"
console.log(map.get(keyArray)); // "value for array"
```

### Why the Output is `undefined`:

- **`map.get({ 1: "map" })`**: The object `{ 1: "map" }` used in `map.get` is a new object with a different reference than `keyObject`. Hence, it does not match the reference used in the `map.set` operation.

- **`map.get([1, 2, 3, 4])`**: The array `[1, 2, 3, 4]` used in `map.get` is a new array with a different reference than `keyArray`. Therefore, it does not match the reference used in the `map.set` operation.

### Key Points:

- **Map Keys Must Match by Reference**: To retrieve a value from a `Map`, the key you provide must be the exact same object or array instance used when setting the value.
- **Objects and Arrays**: Even if two objects or arrays have the same properties or elements, they are treated as different if they are different references.

By understanding this, you can ensure that you use the exact same reference for keys when working with `Map` objects.


*/

console.log({ 1: "key" } == { 1: "key" }); // false -> because of reference inequality

// to avoid reference inequality when we have same content inside array or object always store that array or object inside a variable
const obj = { 1: "key" };
console.log(obj == obj); // reference

const map1 = new Map();
const obj1 = { 1: "key" };
const arr = [1, 2, 3, 4];
map.set(obj1, "object");
map.set(arr, "array");

console.log(map.get(obj1));
console.log(map.get(arr));

const map2 = new Map([
  ["question", "what is the best programming language?"],
  [1, "c"],
  [2, "java"],
  [3, "c++"],
  ["correct", 3],
  [true, "Correct Ans"],
  [false, "Wrong Ans"],
]);
console.log(map2);

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
};

// converting the objects to map
console.log(Object.entries(restaurant.openingHours));

const map3 = new Map(Object.entries(restaurant.openingHours));
console.log(map3);

for (const [key, val] of map2) {
  console.log(`key : ${key} and Value : ${val}`);
}
for (const [key, { open, close }] of map3) {
  console.log(`key : ${key} and Value => open : ${open} and close ${close}`);
}

console.log(map2.get("question"));

// const answer = prompt(map2.get("question"));

// convert map to array

console.log([...map2]);
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
