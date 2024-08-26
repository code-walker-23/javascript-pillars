const test = () => {
  console.log(this);
};
test(); // window object

function t() {
  this.order = function () {};
}
t.firstName = "Vinay";
console.log(t); // [Function: t] { firstName: 'Vinay' }
t.greet = function () {
  console.log("Hello!");
};
console.log(t);
t.greet();
console.log(t.firstName);
t.order();// we can use this we have make it as instance of t cons func
