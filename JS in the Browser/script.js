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

let score = 20;
document.querySelector(".number").textContent = computerGuess;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no Number
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No Number!";

    // When Number is correct and wins
  } else if (guess === computerGuess) {
    document.querySelector(".message").textContent = "✨Correct Number";
    document.querySelector(".number").textContent = computerGuess;

    // here the number increases by 1
    score++;
      document.querySelector(".score").textContent = score;

    // lets add some styling if user wins
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // when guess is too high
  } else if (guess > computerGuess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈Too High";
      score--;
      document.querySelector(".score").textContent = score; //so what happens here is the decreases by one when you get a number wrong
    } else {
      document.querySelector(".message").textContent = "⛔You lose";
      document.querySelector(".score").textContent = 0;
      // lets add some styling if user loses
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".number").style.width = "15rem";
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
      // lets add some styling if user lose
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".number").style.width = "15rem";
    }
  }
});


/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)

*/