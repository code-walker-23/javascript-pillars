// ES6
const openingHour = {
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
};
const restaurant = {
  name: "Classic Italiano",
  location: "Via Angelo....",
  categories: ["Italian", "Pizzeria", "toto", "poto"],
  startMenu: ["Facoccia", "Garlic", "toto", "poto"],
  mainMenu: ["Pizza", "Pasta", "Risottot"],
  // openingHour: openingHour,
  openingHour, // it works same but it will create the key of the object name nad just embed the object
  // oderDelivery: function ({ time = "", address = "" }) {
  //   // console.log(obj);
  //   console.log("time : ", time);
  //   console.log("address : ", address);
  // },
  oderDelivery({ time = "", address = "" }) {
    // it will create the key as the name of the funtion and assign the function
    // console.log(obj);
    console.log("time : ", time);
    console.log("address : ", address);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `your pasta is ready with these ingredients : ${ing1},${ing2},${ing3}`
    );
  },
};
console.log(restaurant);

// now the problem is that : we just put out the nested object inside the restuarant and using ES6 notation
// In ES6 we dont need create a key and just assign a function , we will use the ES6 notation
restaurant.oderDelivery({});
