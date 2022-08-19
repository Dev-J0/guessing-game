const guessingGame () => {
    let totalGuesses = 1;
    let guess;
    let numberToGuess = Math.ceil(Math.random() * 100);
    

const guessButtons = document.querySelectorAll('.btn btn-outline-light');
guessButtons.forEach(button => {
    button.addEventListener('.click', () => {

    })
});

updateScreen() => 


do {
    guess = Number(updateScreen);
    if(guess === null) {
        break;
    } else if (guess === numberToGuess) {
        updateScreen("You guessed it in" + totalGuesses + (totalGuesses === 1 ? "try." : "tries."));
        break;
        } else if (number < numberToGuess) {
            updateScreen = "Sorry, your guess was too low. Try again:";
        } else {
            updateScreen = "Sorry, your guess was too high. Try again:";
        }
        totalGuesses++;
    }
    while(true);
};