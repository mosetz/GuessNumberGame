let attempt = 10;
let randNum = Math.floor(Math.random() * 100) + 1;
const guessField = document.getElementById('guessField');
const guessBtn = document.querySelector('#guessBtn');
const newBtn = document.querySelector('#newGameBtn');
const guessForm = document.querySelector('#guessForm');
const disResult = document.querySelector("#result");
const disStatus = document.querySelector("#status");
const answer = document.querySelector('#showAnswer');
guessBtn.addEventListener("click", guess);
newBtn.addEventListener("click", newGame);
// const userGuess = Number(guessField.value);

/*
This function get input from input field and check if the input
equal random number or not if it equal you win if not your guess 
will decrements and you need to make another guess 
*/


function guess(e) {
    e.preventDefault();
    //answer.innerHTML = (`here answer ${randNum}`)
    const userGuess = Number(guessField.value);
    if (userGuess === randNum){
        disResult.innerHTML = `Congratulations! You win the game. The number was ${randNum}.`;
        setTimeout(newGame,3000);
    } else {
        attempt--;
        if (attempt > 0) {
            disResult.innerHTML = `Wrong answer. You have ${attempt} guesses left.`;
        } else {
            disResult.innerHTML = `Game over. The number was ${randNum}. Starting a new game...`;
            setTimeout(newGame, 3000); // Delay the new game by 3 seconds
        }
    }
    checkGuess(userGuess);
    setTimeout(() => disStatus.innerHTML = "", 1000);
    // Clear guess field
    guessField.value = "";
}

/*
This function will reset game which also mean reset you guess attempt to 10 again
and it will also random a new number between 1-100 
*/
function newGame(){
    attempt = 10;
    randNum = Math.floor(Math.random() * 100) + 1;
    disResult.innerHTML = "";
    guessField.value = "";
    userGuess = "";
}


function checkGuess(guess) {
    if(guess > randNum){
        disStatus.innerHTML = ("Your guess was too high try again");
    } else if(guess < randNum) {
        disStatus.innerHTML = ("Your guess was too low try again");
    }

}
