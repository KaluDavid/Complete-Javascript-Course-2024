"use strict";

/*
// lets manipulate some html content
console.log(document.querySelector(".message").textContent);
// lets change the content
document.querySelector(".message").textContent = "✨😃Correct Winner";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

// manipulating the input tag
document.querySelector(".guess").value = 10;
console.log((document.querySelector(".guess").value = 10));

*/

// lets now work on the project
document.querySelector(".check").addEventListener("click", function () {
  // let put it in a var
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // // lets change the text once the value is inputed
  // document.querySelector(".message").textContent = "✨😃Correct Winner";

  // lets write some logical operators, just
  if(!guess){
    document.querySelector(".message").textContent = "🚫 No Number!";
  }
});
