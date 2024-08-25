const obj = {
  vinay: "Hello",
  "Vinay": "Yoo",
};
console.log(obj.Vinay); // key with double quoutes or without can access like this
// console.log(obj."Vinay"); error
console.log(obj["vinay"]);
console.log(obj["Vinay"]); // this is good for dynamic keys name that we can not do in dot notation
// But in bracket notation always use an expression like string
