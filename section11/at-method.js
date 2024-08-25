// ES2022 = ES13

const arr = [1, 2, 3, 4];
console.log(arr[0]);
console.log(arr.at(0));

// last array element 👍

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // it allows -ve indexing
