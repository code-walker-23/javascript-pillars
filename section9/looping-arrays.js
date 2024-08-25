// for-of loop introduced in ES6

const arr = ["123", "vinay", "chhabra", "kaku", "Chhabra"];
for (const val of arr) console.log(val);

// we can also mutate the array elements

// for (let val of arr) console.log((val = "Vinay"));

// issues is that we don't know the indices
for (const val of arr.entries()) console.log(val);
console.log(arr.entries()); // Object [Array Iterator] {}

console.log(...arr.entries());

// here val is an array -> [index,element] so we will destructure this
for (const [indx, elem] of arr.entries()) console.log(`${indx + 1}: ${elem}`);


