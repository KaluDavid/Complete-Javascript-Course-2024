'use strict';

// building with Arrays
const friends = ['Dhave', 'Michael', 'Delly', 'Prins'];
console.log(friends); //this is an array 🙂 

// Another way of creating an Array=  new Array();
const dept = new Array('linguistics', 'fine art', 'masscom.');
console.log(dept);


// Getting Arrays out
console.log(friends[0]);//Arrays is zero based
console.log(friends[3]);

// To know the number of values in an array, you use the .length
console.log(friends.length);


// To the last value in the array
console.log(friends[friends.length - 1]);



// To change a value in an Array
friends[2] = 'Jacob';
console.log(friends);



//
// you can't replace the whole Arrays
// friends = 'john', 'peter', 'job', 'jack';
// console.log(friends)


// adding array in another
const goodFriends = [friends[0], friends[3]];
console.log(goodFriends)


// Arrays method

// methods that adds element to the Arrays
//  .push()  adds element at the end of the arrays
friends.push('Delly');
console.log(friends);


//  .unshift()  adds element at the beginning of the arrays
friends.unshift('Ella');
console.log(friends);

// Elements that removes 
// .pop() removes the last array value
friends.pop()
console.log(friends);
// here you  don't need to pass a value


// .shift() removes the last array value
friends.shift()
console.log(friends);


// .indexOf() shows the initial position of the value passed
console.log(friends.indexOf('Dhave'));

// includes();  is an Es6 methods that returns true if the element is in the Array and returns false if the element is not in the array
console.log(friends.includes('Dhave')); //true
console.log(friends.includes('John')) //false

// The .includes() can be used to write conditionals
if (friends.includes('Delly')) {
    console.log('You have a friend called Delly');
} else {
    console.log("You don't have a friend called Delly");
}
// 

// Task
/*
CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.



👋 OPTIONAL: You can watch my solution in video format in the next lecture

*/let bill = 275;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

bill = 40;
tip = bill <=300 && bill >=50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

bill = 430;
tip = bill <=300 && bill >=50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);