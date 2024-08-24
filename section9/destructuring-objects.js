// In destructuring the object , we have to write the actual name of the property that we want to extract otherwise there is no way knowing tht what we want
const restaurant = {
  name: "Classic Italiano",
  location: "Via Angelo....",
  categories: ["Italian", "Pizzeria", "toto", "poto"],
  startMenu: ["Facoccia", "Garlic", "toto", "poto"],
  mainMenu: ["Pizza", "Pasta", "Risottot"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  oderDelivery: function ({ time = "", address = "" }) {
    // console.log(obj);
    console.log("time : ", time);
    console.log("address : ", address);
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Naming the properties according to us during destructuring

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// we are trying to access the property which is not defined
// here let suppose we are fetching objects from live api and we do not know actually which property is defined or not so we have to put default values for all the properties so it becomes hectic so we have concept of optional chaining to pervent the failure of undefined.

const { menu = [], startMenu: starters = [] } = restaurant;
console.log(menu, starters);

// overrideing the values

let a = 88;
let b = 99;
console.log("before", a, b);
const obj = { a: 23, b: 7, c: 27 };
// we can not use const and let here
// {a,b} = obj -> uncaught syntax error because as we wight {} javascript understand this like a block and we can not assign something to the block

({ a, b } = obj); // it makes an different scope
console.log("after", a, b);

// nested objects

const { fri } = openingHours;
console.log(fri);

/// further destructure it

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// mutating inside this

const {
  fri: { open: start, close: end },
} = openingHours;
console.log(start, end);

// there is another probelem : let suppose if we are passing the 10 or more arguments to a function and function should recieve that as a parameters in the order that we send otherwise it makes the function vulnerable so the problem's solution is just wrap all the arguments inside the object and send it to the function and we will recieve this object as parameter and we can just destructure this object according to our order and use this in the code and if we want few parameters then we destructure few parameters and then use it.

restaurant.oderDelivery({ time: "13:56", address: "Palika Nagar" });
