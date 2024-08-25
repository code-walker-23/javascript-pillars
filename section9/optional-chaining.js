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

// problem is that when we get data from the live Api we don't actually that a property is going to exist in all objects or not so in accessing that property which does not exist then it give undefined and if we access this undefined somehow it give error.

// console.log(restaurant.openingHours.mon); -> undefined
// console.log(restaurant.openingHours.mon.open); -> TypeError -> accessing the undefined

// with loop it becomes like hectic because there lot of properties so we have to the write condition for all of that

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// Using Optional Chaining in ES2020

console.log(restaurant.openingHours.mon?.open); // only mon exist then go for open otherwise if mon is undefined or null return undefined immediately

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// this is printing closed for sat but it open at 0 on sat
for (const day of days) {
  const open = restaurant.openingHours[day]?.open || "closed";
  console.log(open);
}

// using the nullish coalescing operator -> it inteprets 0 and "" as truthy values

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(open);
}

// Methods

// console.log(restaurant.orderPaa("a", "b", "c")); // it gives function doesn't exist

// we can use optional chaing to check whether method is exist or not

console.log(restaurant.orderPaa?.("a", "b", "c") ?? "Method does not exit"); // undefined

console.log(restaurant.orderPasta?.("a", "b", "c") ?? "Method does not exit");

// Arrays

const users = [{ name: "vinay" }];
console.log(users[0]?.name ?? "user does not exst");
console.log(users[1]?.name ?? "user does not exst");

// Optional Chaining does check on the left the value is exist or not if exist then go further inside that otherwise not just return undefined immediately

// Without optionl chaining, we have to use if again and again
