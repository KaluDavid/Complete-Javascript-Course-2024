"use strict";

// function scope
function calAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(age);

  function printAge() {
    let outPut = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(outPut);

    //   block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      // var variable is not an Es6, so it can be called outside of the block scope
      var millenial = true;

      // Variable look up only happens when js doesn't find the variable in the current scope. i.e if it doesn't, it won't execute the parent scope
      const firstName = "Kalu";

      // reassigning outer scope variable
      outPut = "New name is Dhave";

      const str = `Oh, and  you're a millenial, ${firstName}`;
      console.log(str);

      // functions are also block scope
      function add(a, b) {
        return a + b;
      }
    }
    console.log(add(2, 3));

    console.log(millenial);
  }
  // calling the add function outside of the block scope won't work
  // console.log(add(2, 3));

  printAge();

  return age;
}

// global Scope
const firstName = "Dhave";
calAge(1991);
