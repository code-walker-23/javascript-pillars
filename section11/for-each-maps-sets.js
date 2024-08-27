const map = new Map([
  ["name", "Vinay"],
  ["age", 22],
  ["college", "AEC"],
]);

map.forEach((val, key, map) => {
  console.log(`key : ${key} , value : ${val}`);
});

// sets

const set = new Set(["vinay", "Vinay", "kaku", "22", "22", "AEC"]);
set.forEach((val, key, set) => {
  // here key and val is having same the value so we will use the throw away variable that means it is not necessary
  console.log(`key : ${key} , value : ${val}`);
});
