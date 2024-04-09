"use strict";

// Primitive types
let lastName = "Michael";
let oldName = lastName;
lastName = "Andrew";
console.log(lastName, oldName);

// Reference types
const jessica = {
  firstName: "Elvis",
  lastName: "Jonathan",
  age: 30,
};

const marriedJessica = jessica;
marriedJessica.lastName = "David";
console.log("Before Marriage:", jessica);
console.log("Before Marriage:", marriedJessica);

// copying Objects
const jessica2 = {
  firstName: "Elvin",
  lastName: "Jona",
  age: 40,
  family: ["davido", "isaac"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Jack";

jessicaCopy.family.push("Emmanuel");
jessicaCopy.family.push("emerald");

console.log("Before Marriage:", jessica2);
console.log("Before Marriage:", jessicaCopy);

// how to style console.log
const styles = `
padding: 20px;
background-color: red;
color:black;

`;

// console.log("%c Hey bro", styles);

const just = (document.getElementById("just").textContent = `hey bro 
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos explicabo, exercitationem eum, velit iusto tempora, ducimus esse consequatur sunt consectetur fuga voluptatum eos adipisci accusantium voluptatem. Quibusdam, facilis assumenda? Placeat.
`);

just.textContent = styles;
