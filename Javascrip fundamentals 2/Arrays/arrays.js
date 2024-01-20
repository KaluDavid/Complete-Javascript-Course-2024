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

// methoda that adds element to the Arrays
//  .push = adds element at the end of the arrays
friends.push('Delly');
console.log(friends);


//  .unshift = adds element at the beginning of the arrays
friends.unshift('Ella');
console.log(friends)