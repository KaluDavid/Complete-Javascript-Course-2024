"use strict";

const restaurant = {
  name: "Cripsy Chicken",
  location: "20 Atimbo Rd. opp Kuda, Calabar, Nigeria",
  categories: ["Italian", "vegetarian", "Pizzeria", "Soup"],
  staterMenu: ["Hot dog", "fruit salad", "Ish-ewu", "Shawarma"],
  mainMenu: ["Afang Soup", "Pizza", "Fried Rice"],

  order: function (starterIndex, mainIndex) {
    return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
console.log(restaurant);

// testing Destructuring
const arr = [2, 3, 4];

// normal getting values out from an array
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// destructuring
const [x, y, z] = arr;
console.log(x, y, z);

console.log(`

`);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching Variables

// normal getting values out from an array
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

console.log(`

`);

// destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(`

`);

// Receive 2 return values from a function
const [starterOrder, mainOrder] = restaurant.order(2, 0);
console.log(starterOrder, mainOrder);

console.log(`

`);

//NEsted destructuring
const nested = [1, 2, [3, 5]];

// const [i, , j] = nested;
// console.log(i, j);

// Destructuring inside  Destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

console.log(`

`);

// Default Values
// const [e, f, g] = [8, 9];

const [e = 1, f = 1, g = 1] = [8, 9];
console.log(e, f, g);
