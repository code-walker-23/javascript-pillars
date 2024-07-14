//use case of symbol:

// Symbol is used to create unique keys in objects.
// Symbol is used to create private properties in objects.
// Symbol is used to hide key in objects.

let mySymbol = Symbol('Description');
console.log(mySymbol);
console.log(typeof mySymbol);


let employee = {};
let email = Symbol();
employee.name = 'Sanket';
employee.age = 25;
employee['email'] = 'test@test.com';

console.log(Object.keys(employee));


