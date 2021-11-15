"use strict";

// Selector elements
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let scores, currentScore, activePlayer, gameState;

const innit = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gameState = true;
    score0.textContent = 0;
    score1.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
    console.log("finished innit");
};
innit();

function switchPlayer() {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

diceEl.classList.add("hidden");
btnRoll.addEventListener("click", function() {
    if (gameState) {
        // 1.) Generate  a random dice
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        // 2.) Display Dice
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;
        // 3.) Check if it 1?
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            switchPlayer();
        }
    }
});
btnHold.addEventListener("click", function() {
    if (gameState) {
        //1.) Add Current Score to active player scores
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent =
            scores[activePlayer];
        // 2. Check if player scores is >= 100;
        if (scores[activePlayer] >= 100) {
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add("player--winner");
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove("player--active");
            diceEl.classList.add("hidden");

            gameState = false;
        }
        //      2.1) Finish the game
        switchPlayer();
    }
});
btnNew.addEventListener("click", function() {
    innit();
});