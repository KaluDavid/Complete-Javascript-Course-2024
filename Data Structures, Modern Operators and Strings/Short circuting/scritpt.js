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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


console.log(`
OR Operator
`)
console.log(3 || 'Dhave');
console.log('' || 'Dhave');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || ' ' || 'Hello' || 23 || null);


// restaurant.numGuests = 23;

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10; console.log(guest1)

// using short circuiting
const guest2 = restaurant.numGuests || 10;
console.log(guest2);



console.log(`

AND Operator

`)

console.log(0 && 'Dhave');
console.log(77 && 'Dhave');
console.log('Hello' && 23 && null && 'Dhave');

// More Examples
if (restaurant.orderPizza) {
  restaurant.orderPizza ('mushroom', 'Spinach');
}

// Using the AND Operator
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'Spinach')