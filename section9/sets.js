const orderSet = new Set([1, 2, 2, 3, 3, "vinay", "vinay"]);
console.log(orderSet);
console.log(typeof orderSet); // object Set(4) { 1, 2, 3, 'vinay' }

// converting to array
console.log([...orderSet]); // [ 1, 2, 3, 'vinay' ]
console.log(orderSet.size); // 4
console.log(orderSet.has("vinay")); //true
console.log(orderSet.has("kaku")); // false
console.log(orderSet.add("kaku")); // Set(5) { 1, 2, 3, 'vinay', 'kaku' }
orderSet.add("kaku");
console.log(orderSet);
console.log(orderSet.delete("kaku")); // it return true for finding element and then deletion
// console.log(orderSet.clear());

// we can not use index on set
// console.log(orderSet[0]);

for (const val of orderSet) {
  console.log(val);
}

// it is not working
/* for (const [indx, val] of orderSet.entries()) {
  console.log(indx, val);
} */
