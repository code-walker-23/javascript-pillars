const arr = ["1", "2", "3", "4"];
// slice method -> Taking the part of the existing array and returns the new array
// it does not mutate the actula array
console.log(arr.slice(1));
console.log(arr.slice(1, 3)); // [1,3)( 1<= index < 3)

// passing the negative index

console.log(arr.slice(-1)); // it is taking the last element
console.log(arr.slice(-2)); // taking the last two elements and order index is preserved means [3,4]

// it extracts the all elements from start parameter and except last one elements
console.log(arr.slice(1, -1)); // 1<=index<-1or3  -> index = 1,2

// it extracts the all elements from start parameter and except last two elements
console.log(arr.slice(1, -2));

// when the last parameter is not there it sets default to size of array and if first parameter is not there it sets to 0th index of the array

console.log(arr.slice());

// shallow copy of the array
console.log(arr.slice());
console.log([...arr]);

// Splice -> it does change the original array
// this won't work in this case [) -> in this first para is start index and then followed by the number of elements that we want to extract including the first element
// In this as we extract the some portion of the array and that is going to removed from the original array.

console.log(arr.splice(1, 2, "Vinay", "Chhabra"));
console.log("original array : ", arr);

const arr1 = [1, 2, 3, 4, 5, 6];

const dummyArray = ["Vinay", "Vinay", "Vinay", "Vinay", "Vinay"];

console.log(arr1.splice(1, 3, ...dummyArray)); // it always return the new array of extracted elements and later removed them from the original array
// we can remove the elements int the from l index to right r index and if you want you can pass the elements to fit at that place or for insertion
console.log(arr1);

// removing the last element

console.log(arr1.splice(-1));
console.log(arr1);

/// Reversing the array

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.reverse()); // it is again mutating the org array
console.log(arr2);

// Concate

const newArray = arr1.concat(arr2); // it does not mutate
console.log("new Array : ", newArray);
console.log(arr1);
console.log(arr2);
console.log([...arr1, ...arr2]);

// Join

console.log(newArray.join("-")); // return string val-val2-val3...-valn
console.log(typeof newArray.join("-"))
