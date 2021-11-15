"use strict";

// Video 1-2 : Explain basic DOM & DOM Manipulation
/*
console.log(document.querySelector(".message").textContent);

// Dom Manipulation
// DOM = Data Object Model

document.querySelector(".message").textContent = "Correct Number 🎉";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
////////////////////////////////////////////////////////////////////
// Main Game

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function x() {
    console.log(23);
}

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    console.log(typeof guess);
    if (score > 1) {
        // There's nothing
        if (!guess) {
            console.error(`There's noting!, There's nothing in input.guess`);
            displayMessage("⛔️ No Number");
            // Guess is wrong
        } else if (guess !== secretNumber) {
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
            score--;
            document.querySelector(".score").textContent = score;
            // Guess is right
        } else if (guess === secretNumber) {
            document.querySelector(".message").textContent = "🎉 Correct Number!";
            document.body.style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").textContent = secretNumber;
            if (score > highScore) {
                highScore = score;
                document.querySelector(".highScore").textContent = highScore;
            }
            // Before refactoring
            // } else if (guess > secretNumber) {
            //     score--;
            //     document.querySelector(".message").textContent = "📈 Too high!";
            //     document.querySelector(".score").textContent = score;
            // } else if (guess < secretNumber) {
            //     score--;
            //     document.querySelector(".message").textContent = "📉 Too low!";
            //     document.querySelector(".score").textContent = score;
        } else {
            console.error("Some thing went wrong!");
        }
    } else {
        displayMessage("☠️ You lose!");
        document.querySelector(".score").textContent = 0;
    }
});

// Coding Challenge
document.querySelector(".again").addEventListener("click", function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").style.width = "15rem";
    document.body.style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    console.warn("restored / refreshed");
});