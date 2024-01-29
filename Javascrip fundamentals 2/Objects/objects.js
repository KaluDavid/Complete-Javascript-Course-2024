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
const dhaveData = {
    firstName: 'dhave',
    birthYear: 1970,
    friends: ['michael', 'delly', 'gilbert', 'danny'],
    job: 'software engineer',

    // let's calculate the age
    calAge : function() {
        console.log(this)// the this keyword, points to the object identifier
        return 2024 - this.birthYear;
    }
}

console.log(dhaveData.calAge());

