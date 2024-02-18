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
  2024 - 1999,
  ["Michael", "Elsa", "Danny"],
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

console.log(`


`);
// Now Lets try out something
// lets say we wanna calculate 3 birth years
const birthYear = [1960, 1970, 1999, 2004];

const ages = []; //the empty string where the birth year calculation will be stored
// lets loop
for (let years = 0; years < birthYear.length; years++) {
  ages.push(2023 - birthYear[years]); //now this calculation will print out each of the years one by one
}
console.log(ages);

// Up Next lets try out the Continue and Break statement

//CONTINUE STATEMENT
console.log("--- CONTINUE STATEMENT ---");
for (let i = 0; i < davidData.length; i++) {
  // lets add conditionals
  if (typeof davidData[i] !== "string") continue;

  console.log(davidData[i], typeof davidData[i]);
}

//BREAK STATEMENT
console.log("--- BREAK STATEMENT ---");
//
for (let i = 0; i < davidData.length; i++) {
  // lets add conditionals
  if (typeof davidData[i] === "number") break;
  console.log(davidData[i], typeof davidData[i]);
}

// LOOPING BACKWARD AND LOOP IN LOOP

console.log(`

LOOPING BACKWARD AND LOOP IN LOOP

`);
// so here, instead of the normal way it is read 0,1,2....., it is read backwards 2,1,0
// e.g

for (let i = davidData.length - 1; i >= 0; i--) {
  // Reading from david arrays
  console.log(i, davidData[i], typeof davidData[i]);
}

console.log(`

// LOOPS IN LOOPS

`);
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`__________ Starting exercise ${exercise}__________`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: I am good at football ${rep}`);
  }
}

console.log(`



___________WHILE LOOP____________

`);
// WHILE LOOP
let rep = 1; /*the initial counter repetition value */
while (rep <= 5 /* the condition*/) {
  console.log(`I love to play ${rep} `);

  rep++; //the counter increment
}

// lets take up another example
let dice = Math.trunc(Math.random() * 6 )+ 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);

  if (dice === 6) {
    console.log("Loop is ending....");
  }
}
