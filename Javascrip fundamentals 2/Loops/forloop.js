"use strict";
// // the for loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log("I love to code");
// }

// // LOOPING ARRAYS, BREAKING AND CONTINUING

// // so lets create an array
// const davidData = [
//   "John",
//   "David",
//   2024 - 1999,
//   ["Michael", "Elsa", "Danny"],
//   "Programmer",
//   "i Love to code....",
// ];

// const types = []; // here the new array types will be based on the davidData array
// // its gonna have the same length

// for (let i = 0; i < davidData.length; i++) {
//   // Reading from david arrays
//   console.log(davidData[i], typeof davidData[i]);

//   // filling the types arrays
//   // types[i] = typeof davidData[i];

//   // lets try the .push method
//   types.push(davidData[i]);
// }
// console.log(types);

// console.log(`

// `);
// // Now Lets try out something
// // lets say we wanna calculate 3 birth years
// const birthYear = [1960, 1970, 1999, 2004];

// const ages = []; //the empty string where the birth year calculation will be stored
// // lets loop
// for (let years = 0; years < birthYear.length; years++) {
//   ages.push(2023 - birthYear[years]); //now this calculation will print out each of the years one by one
// }
// console.log(ages);

// // Up Next lets try out the Continue and Break statement

// //CONTINUE STATEMENT
// console.log("--- CONTINUE STATEMENT ---");
// for (let i = 0; i < davidData.length; i++) {
//   // lets add conditionals
//   if (typeof davidData[i] !== "string") continue;

//   console.log(davidData[i], typeof davidData[i]);
// }

// //BREAK STATEMENT
// console.log("--- BREAK STATEMENT ---");
// //
// for (let i = 0; i < davidData.length; i++) {
//   // lets add conditionals
//   if (typeof davidData[i] === "number") break;
//   console.log(davidData[i], typeof davidData[i]);
// }

// // LOOPING BACKWARD AND LOOP IN LOOP

// console.log(`

// LOOPING BACKWARD AND LOOP IN LOOP

// `);
// // so here, instead of the normal way it is read 0,1,2....., it is read backwards 2,1,0
// // e.g

// for (let i = davidData.length - 1; i >= 0; i--) {
//   // Reading from david arrays
//   console.log(i, davidData[i], typeof davidData[i]);
// }

// console.log(`

// // LOOPS IN LOOPS

// `);
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`__________ Starting exercise ${exercise}__________`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: I am good at football ${rep}`);
//   }
// }

// console.log(`

// ___________WHILE LOOP____________

// `);
// // WHILE LOOP
// let rep = 1; /*the initial counter repetition value */
// while (rep <= 5 /* the condition*/) {
//   console.log(`I love to play ${rep} `);

//   rep++; //the counter increment
// }

// // lets take up another example
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);

//   if (dice === 6) {
//     console.log("Loop is ending....");
//   }
// }

// // Problem Solving

// //We Work for a company building a smart home thermometer. Our most risked task is this: Given an Array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// // solution
// //1) Understand the problem
// // -- What is the temperature amplitude? Answer: Difference between highest and lowest temp
// //-- How to compute max and min temperatures
// //-- WHat's a sensor error and what to do when the problem occur

// // 2) Break the problems into smaller bit
// // -- How to ignore errors?
// // -- Find max value in temperature array
// // -- Find Min value
// // -- Subtract min from Max (amplitude) then return it
// //

// // Lets start building

// const calTemAmplitudeNew = function (t1, t2) {
//   const temp = t1.concat(t2);
//   console.log(temp);

//   let max = temp[0];
//   let min = temp[0];

//   for (let i = 0; i < temp.length; i++) {
//     const curTemp = temp[i];
//     if (typeof curTemp !== "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calTemAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);
// // This is how it works
// // In the beginning, before we start the array, the max (let max) will be the first element of the array (3)
// // max = 3
// // Then the loops starts the first position
// // the we ask // is temp[i] > max
// // is 3 greater than 3 (thats a no, nothing happens)
// // then in the next iteration: is 7 greater than 3 (yes)
// // Max = 7
// // then in the next iteration: is 4 greater than 7 (no, nothing happens)
// // Therefore, we're done
// // Then the result in the end is  Max = 7

// // Problem 2
// // Function should now recieve 2 arrays of temps

// // 1) Understanding the problem
// // -- With 2 arrays, should w implement functionality twice? NO! just merge two arrays

// // 2) Breaking the problems
// // -- How to merge two arrays?p0

// Lets debug
// The smart thermometer we were working on before
// We need a do some measurement in a unit called Kelvin which is the absolute temperature
// all wwe have to do here is add 273 to the temperature in decree celsius

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: " celsius",

//     //3) FIX the Bug
//     value: Number(prompt("Degree Celsius:")),
//   };

//   //2) FINDING the Bug
//   console.table(measurement);
//   //   console.error(measurement.value);
//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);

//   const Kelvin = measurement.value + 273;

//   return Kelvin;
// };
// //1) Identify the Bug
// console.log(measureKelvin());

// making a bigger bug
const calTemAmplitudeBug = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);

  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calTemAmplitudeBug([3, 5, 1], [9, 0, 5]);
console.log(amplitudeBug);