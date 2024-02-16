"use strict";
// the for loop
for (let rep = 1; rep <= 10; rep++) {
  console.log("I love to code");
}

// LOOPING ARRAYS, BREAKING AND CONTINUING

// so lets create an array
const davidData = [
  "John",
  "David",
  ["Michael", "Elsa", "Danny"],
  1999 - 2024,
  "Programmer",
  "i Love to code....",
];

const types = []; // here the new array types will be based on the davidData array
// its gonna have the same length

for (let i = 0; i < davidData.length; i++) {
  // Reading from david arrays
  console.log(davidData[i], typeof davidData[i]);

  // filling the types arrays
  // types[i] = typeof davidData[i];

  // lets try the .push method
  types.push(davidData[i]);
}
console.log(types);


// Now Lets try out something