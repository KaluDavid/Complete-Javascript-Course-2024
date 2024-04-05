"use strict";

console.log(this);

// It is a regular function (check note for info)
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

// using an Arrow function
