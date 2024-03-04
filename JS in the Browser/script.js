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

document.querySelector(".check").addEventListener("click", function () {

  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no Number
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No Number!";

    // When Number is correct and wins
  } else if (guess === computerGuess) {
    document.querySelector(".message").textContent = "✨Correct Number";


    // when guess is too high
  } else if (guess > computerGuess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈Too High";
      score--;
      document.querySelector(".score").textContent = score; //so what happens here is the decreases by one when you get a number wrong
    } else {
      document.querySelector(".message").textContent = "⛔You lose";
      document.querySelector(".score").textContent = 0;
    }

    // when guess is too Low
  } else if (guess < computerGuess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "⛔You lose";
      document.querySelector(".score").textContent = 0;
    }
  }

});
