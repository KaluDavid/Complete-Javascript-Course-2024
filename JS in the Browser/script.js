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

// so here, basically we need to a secret number btw 0-20
const computerGuess = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = computerGuess;

let score = 20;

// here is for the score
document.querySelector(".check").addEventListener("click", function () {
  // let put it in a var
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // // lets change the text once the value is inputed
  // document.querySelector(".message").textContent = "✨😃Correct Winner";

  // lets write some logical operators, just
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No Number!";
  } else if (guess === computerGuess) {
    document.querySelector(".message").textContent = "✨😃You Winner";
  } else if (guess > computerGuess) {
    document.querySelector(".message").textContent = "📈Too High";
    score--
  } else if (guess < computerGuess) {
    document.querySelector(".message").textContent = "📉Too Low";
  }
  // here if the score is too high, too low or equal to

  // up next, the score should decrease if you get the guess wrongly
});
