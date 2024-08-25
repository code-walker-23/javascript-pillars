const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`you deposited : ${Math.abs(movement)}`);
  } else {
    console.log(`you withdrew : ${Math.abs(movement)}`);
  }
}
for (const [indx, movement] of movements.entries()) {
  console.log(indx);
  if (movement > 0) {
    console.log(`you deposited : ${Math.abs(movement)}`);
  } else {
    console.log(`you withdrew : ${Math.abs(movement)}`);
  }
}

// For Each method is easier
console.log("\n");
movements.forEach((val) => {
  console.log(
    val > 0
      ? `you deposited : ${Math.abs(val)}`
      : `you withdrew :  ${Math.abs(val)}`
  );
});

// more concise
console.log("\n");
movements.forEach((val) => {
  console.log(`you ${val > 0 ? "deposited" : "withdrew"} : ${Math.abs(val)}`);
});

// in for each loop on each iteration it gives current element ,index, array to callback function as an arguement

console.log("\n");
movements.forEach((val, indx, arr) => {
  // console.log(indx, arr);
  console.log(
    `Movement ${indx + 1} : you ${
      val > 0 ? "deposited" : "withdrew"
    } : ${Math.abs(val)}`
  );
});

// continue and break statement does not work at all in for each loop at all
// Use for-of loop when u want to use break and continue statement
