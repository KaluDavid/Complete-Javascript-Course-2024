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

let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];
// Rolling The dice functionality
btnRoll.addEventListener('click', function () {
  //1- Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //   2- display Dice
  diceEl.style.display = 'block';
  diceEl.src = `dice-${dice}.png`;

  //3 - Add dice to current score
  currentScore += dice;

  //   4 - Switching the active players
  if (activePlayer !== 1) {
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // Changing the BG color
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
