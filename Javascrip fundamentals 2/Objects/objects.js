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
// run the sentence without hard coding it
// The the values "danny" "3 friends" and "michael from the object"

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




// Objects Method
const david = {
    firstName: 'dhave',
    birthYear: 1970,
    friends: ['michael', 'delly', 'gilbert', 'danny'],
    job: 'software engineer',

    // let's calculate the age
    calage: function () {
        console.log(this)// the this keyword, points to the object identifier
        return 2024 - this.birthYear;
    }
}

console.log(david.calage());

// David is a 46 year olf teacher and he has a drivers license

/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

};

const John = {
    fullName: 'John Smith',
   mass: 92,
   height: 1.

};

