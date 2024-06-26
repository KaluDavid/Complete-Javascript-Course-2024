"use strict";

// lets us the var before calling them to see what happens
// Hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Dhave";
let job = "Programmer";
const year = 1991;

// Hoisting with Functions
console.log(addDecl(2, 5));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 4));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Lst see any wrong practice of using  var

if (!numProducts) deleteChartList();

var numProducts = 10;

function deleteChartList() {
  console.log("All products deleted ");
}

// checking the Global Window Object
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
