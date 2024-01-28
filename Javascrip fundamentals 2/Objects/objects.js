'use strict';


// Creating an object
// e.g
// give the details of Danny
const danny = {
    firstName: 'Danny',
    lastName: 'Fred',
    age: 2023 - 2000,
    friends: ['Dhave', 'Winny', 'Michael']
}//fundamental way of creating an object

// task 
// danny has 3 friends, and his best friend is called michael

console.log(`${danny['firstName']} has ${danny.friends.length} friends, and his best friend is ${danny.friends[2]}`);

console.log(danny);


// DOT VS BRACKETS NOTATION
// Getting properties out of an object

// Dot notation
console.log(danny.firstName);

// Brackets Notation
console.log(danny['firstName']);


// Writing a user input expression
// const dannyInput = prompt(`Do you wish to know more information about Danny, choose the following.
// > firstName
// > lastName
// > age
// > friends`);

// if (danny[dannyInput]) {
//     console.log(danny[dannyInput]);
// }else{
//     console.log("Invalid input!");
// }