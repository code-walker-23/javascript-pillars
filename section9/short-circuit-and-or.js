// Here we will use non-boolean values on lhs and rhs

console.log(3 || "Vinay Chhabra"); // 3
console.log("" || "Vinay Chhabra"); // Vinay Chhabra
console.log(true || "Vinay Chhabra"); // true
console.log(undefined || "Vinay Chhabra"); // Vinay Chhabra
console.log(undefined || null); // both are falsy values but ->it stop at last operand or right most operand
console.log(null || undefined); // undefined

// Practical use

restuarant.orderPizza && restuarant.orderPizza("ing");

// OR -> until it finds truthy value it will continue execute the operands
// AND -> As it finds the falsy value,it will stop execution immediately
