'use strict';
// the for loop
for (let rep = 1; rep <= 10; rep++) {
  console.log("I love to code");
}

// LOOPING ARRAYS, BREAKING AND CONTINUING

// so lets create an array
const dhave = [
  "programmer",
  "Student",
  2024 - 2000,
  ["michael", "Danny", "Joy Girlie", "GodsWill"],
];

// looping the array
for (let i = 0; dhave.length; i++) {
  console.log(dhave[i], typeof dhave[i]);
}


// Up next is creating a new array that has all this type of each of the element. So basically, typeof dhave[i];

// create an empty var
const type = [];