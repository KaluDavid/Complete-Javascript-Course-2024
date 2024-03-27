'use strict';

// Selecting Element
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// STARTING CONDITION
score0El.textContent = Number(0);
score1El.textContent = Number(0);
// diceEl.classList = '.hidden';
diceEl.style.display = 'none';

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = Number(0);
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  // Changing the BG color
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling The dice functionality
btnRoll.addEventListener('click', function () {
  //1- Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //   2- display Dice
  diceEl.style.display = 'block';
  diceEl.src = `dice-${dice}.png`;

  //3 - Add dice to current score
  currentScore += dice;

  //   3 - Switching the active players
  if (dice !== 1) {
    // // - Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

// Holding Current score
btnHold.addEventListener('click', function () {
  // Add current score to active players score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  console.log(scores[activePlayer]);

  // Check if players score is >= 100
  // then Fini
  sh;
  switchPlayer();
});
