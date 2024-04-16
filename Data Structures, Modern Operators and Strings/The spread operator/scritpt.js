"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // check notes for examples explanation
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3} `
    );
  },
};

// Order pasta
// const ingredients = [prompt("Let's make pasta!, Ingredient 1"), prompt('ingredient 2'), prompt('ingredient 3')]; //the prompts gets the individual ingredients
// restaurant.orderPasta(...ingredients);
// console.log(ingredients);

// How it works
const arr = [7, 8, 9];

// Manual way add arrays to another arrays
const badArr = [5, 6, arr[0], arr[1], arr[2]];
console.log(badArr);

// With spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);
// to get the individual elements in th newArr
console.log(...newArr);

const newMenue = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenue);

// join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// the spread Operator on Strings
const str = "Dhave";
const letters = [...str, "", "D"];
console.log(letters);
// expanding the string
console.log(...arr);
console.log(...str);

// The spread operator on objects
// check notes for examples explanation
const newRestaurant = { foundedIn: 1992, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

// shallow copies of Object
const restaurantCopy = {...restaurant};
console.log(restaurantCopy.name);