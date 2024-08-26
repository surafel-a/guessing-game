'use strict';

let highscore = 0;
let score = 20;
let secretNumber = Math.floor(Math.random() * 20) + 1;

const body = document.querySelector("body");
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const scoreMessage = document.querySelector(".score");
const highscoreMessage = document.querySelector(".highscore");


checkBtn.addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);

    if(!guess) {
        message.textContent = "⛔ No Number Entered!";
    }

    else if(guess === secretNumber) {
        message.textContent = "🎉 Correct Number!";
        body.style.backgroundColor = "#60b347";
        number.textContent = secretNumber;
        number.style.width = "30rem";

        if(score > highscore) {
            highscoreMessage.textContent = score
        }
    }

    else if(guess !== secretNumber) {
        message.textContent = guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
        score--;
        scoreMessage.textContent = score;

        if(score < 1){
            message.textContent = "💥 You Lost!";
            scoreMessage.textContent = 0; 
        }
    }

});

againBtn.addEventListener("click", function() {
    score = 20;
    highscore = 0;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    const guess = document.querySelector(".guess");
    guess.value = "";

    body.style.backgroundColor = "#222";
    number.style.width = "15rem";
    scoreMessage.textContent = score;
    number.textContent = "?";
    message.textContent = "Start guessing..."
});