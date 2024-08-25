// nullish coalescing operator -> works like OR in short circuiting
// nullish -> only include null and undefined as falsy (NOT 0 and "")
// as it finds truthy values including(0 and "") keep on executing the operands until it finds null or undefined

const x = 0;

console.log(x ?? 10);
console.log(x ?? 10 ?? "Vinay");

let y;
console.log(y ?? 10); // y = undefined
