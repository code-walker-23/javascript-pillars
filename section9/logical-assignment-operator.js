"use strict";
const res1 = {
  name: "Capri",
  numGuests: 20,
};
const res2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};
const res3 = {
  name: "La Piazza",
  numGuests: 0,
};
// now i want that i wanna just add numGuests to all the restaurants they don't have it's own

res1.numGuests = res1.numGuests || 10;
res2.numGuests = res2.numGuests || 10;
console.log(res1, res2);

// Now we are using OR assignment operator
// this is more concise way
res1.numGuests ||= 10;
res2.numGuests ||= 10;
console.log(res1, res2);

// let suppose there is restaurant in which we have numGuests  = 0 but after using OR we make it replace with default value.
// This will lead to the wrong case.

// That is why we are using the nullish assignment operator
res1.numGuests ??= 10;
res2.numGuests ??= 10;
res3.numGuests ??= 10;
console.log(res1, res2, res3);

res1.owner &&= "<ANONYMOUS>"; // if owner is not exist then it will add owner : undefined to object
res3.owner &&= "<ANONYMOUS>";
res2.owner &&= "<ANONYMOUS>";
console.log("Current", res1, res2, res3);

res1.owner = res1.owner && "<ANONYMOUS>";// if owner is exist then it will not add owner : undefined to object and object will be the same
console.log("res1 : ", res1);

// this is difference between logical AND and AND Assignment operator
// so always AND Assignment for replacing the value that exist
