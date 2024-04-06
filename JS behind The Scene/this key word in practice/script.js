"use strict";

console.log(this);

// It is a regular function (check note for info)
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

// using an Arrow function
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // this is the this keyword of the parent scope (the global scope)
};
calcAgeArrow(1980);

// This KEyword inside methods
const elsa = {
  year: 1991,
  calcAge: function () {
    console.log(this);
  console.log(2038 - this.year)},
};

elsa.calcAge();

// method borrowing
const dhave = {
  year: 2001,
};

dhave.calcAge = elsa.calcAge;
dhave.calcAge();
// console.log(dhave.calcAge());
