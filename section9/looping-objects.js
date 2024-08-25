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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `your pasta is ready with these ingredients : ${ing1},${ing2},${ing3}`
    );
  },
  orderPizza: function (ing1, ...otherIng) {
    console.log(
      `your pasta is ready with these ingredients : main : ${ing1} with other : ingredients${otherIng}`
    );
  },
};

for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day); // pointing to the keys of object that we passed as argument
}

const properties = Object.keys(restaurant.openingHours);
console.log(properties); // it return an arry of keys of object that we passed as an argument
console.log(properties.length);

// Object values

const values = Object.values(restaurant.openingHours);
for (const val of values) {
  console.log(val);
}
console.log(values);

const entries = Object.entries(restaurant.openingHours);
console.log(entries); // return array of arrays[key,val]

for (const [day, { open, close }] of entries) {
  console.log(`day : ${day} , opens : ${open}`); // returns [object object] instead of values when we print the object {open : something , close :something }
}
