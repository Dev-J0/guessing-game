document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");
    const buttonCount = 100; 
    const buttonsPerRow = 10; 
    for (let i = 1; i <= buttonCount; i++) {
        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("btn", "btn-outline-light", "btn-sm"); // Add "btn-sm" class for smaller buttons
        button.textContent = i.toString();
        menu.appendChild(button);
        
        button.addEventListener('click', function() {
            checkGuess(i);
        });
    }
    
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const lowOrHigh = document.querySelector('.lowOrHigh');
    const guessSubmit = document.querySelector('.guessSubmit');
    const guessField = document.querySelector('.guessField');
  
    let guessCount = 1;
    let resetButton;
  
    function checkGuess(userGuess) {
      if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
      }
      guesses.textContent += userGuess + ' ';
  
      if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lastResult.style.color = 'black';
        lowOrHigh.textContent = '';
        setGameOver();
      } else if (guessCount === 20) {
        lastResult.textContent = 'Game over? You tried 20 times!';
        setGameOver();
      } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red'; 
        lastResult.style.color = 'black';
        if(userGuess < randomNumber) {
          lowOrHigh.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
          lowOrHigh.textContent = 'Last guess was too high!';
        }
      }
  
      guessCount++;
      guessField.value = '';
      guessField.focus();
    }
  
    guessSubmit.addEventListener('click', function() {
        const userGuess = Number(guessField.value);
        checkGuess(userGuess);
    });
  
    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Start new game';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    }
  
    function resetGame() {
      guessCount = 1;
  
      const resetParas = document.querySelectorAll('.resultParas p');
      for(let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
      }
  
      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value = '';
      guessField.focus();
  
      lastResult.style.backgroundColor = 'white';
  
      randomNumber = Math.floor(Math.random() * 100) + 1;
    }
});
