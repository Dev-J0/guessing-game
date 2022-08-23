function guessGame() {
    const buttons = document.querySelectorAll('btn btn-outline-light');

const btn = document.querySelectorAll('.button');
button.forEach(button => button.addEventListener('click'));

let guess = "";
let totalGuesses = 1;
let numberToGuess = Math.ceil(Math.random() * 10);

class guessingGame {
    constructor(guessingTextTextElement) {
        this.guessingTextTextElement = guessingTextTextElement;
    }

 guess() {
    let guessing;
    const current = this.guessingTextTextElement;
    if(current === null) {
        break;
    } else if (guess === numberToGuess) { 
        alert ("You guessed it in " + totalGuesses + (totalGuesses === 1 ? "try." : " tries."));
        break;
    } else if (guess < numberToGuess) {
    promptMessage = "Sorry, your guess was too low. Try again:";
    } else { 
    promptMessage = "Sorry, your guess was too high. Try again:";
    }
    totalGuesses++;
    }

    getGuess(text) {
        this.guessingTextTextElement = this.numberToGuess(this.guess);
        if(this.guess != null) {
            this.guessingTextTextElement.innerText;
        }
    }
 }
}