"use strict";

let lastName = "Michael";
let oldName = lastName;
lastName = "Andrew";
console.log(lastName, oldName);

// object
const jessica = {
  firstName: "Elvis",
  lastName: "Jonathan",
  age: 30,
};

const marriedJessica = jessica;
marriedJessica.lastName = "David";
console.log("Before Marriage:", jessica);
console.log("Before Marriage:", marriedJessica);
