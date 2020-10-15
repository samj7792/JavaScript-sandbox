{
  // // Set answer
  // let answer = Math.ceil(Math.random() * 10);
  // console.log('answer', answer);
  // // Set remaining guesses
  // let remainingGuesses = 3;
  // document.getElementById('guess-value').addEventListener('click', (e) => {
  //   e.preventDefault();
  //   let guess = Number(document.getElementById('guess-input').value);
  //   console.log('guess', guess);
  //   // Validate guess
  //   if (
  //     guess < document.getElementById('min-num').textContent ||
  //     guess > document.getElementById('max-num').textContent
  //   ) {
  //     document.getElementById('message').textContent =
  //       'Please guess within the range.';
  //   }
  //   // If incorrect
  //   else if (guess !== answer) {
  //     remainingGuesses--;
  //     document.getElementById(
  //       'message'
  //     ).textContent = `Incorrect, guesses remaining: ${remainingGuesses}`;
  //     console.log(remainingGuesses);
  //   }
  //   // If correct
  //   else {
  //     document.getElementById('message').textContent = 'Correct!';
  //     // Disable input
  //     document.getElementById('guess-input').disabled = true;
  //     // Change submit button
  //     document.getElementById('guess-value').value = 'Try again';
  //   }
  //   // When remaining guesses runs out
  //   if (remainingGuesses === 0) {
  //     document.getElementById(
  //       'message'
  //     ).textContent = `Sorry, the correct answer was ${answer}. Try again!`;
  //     // Disable input
  //     document.getElementById('guess-input').disabled = true;
  //     // Change submit button
  //     document.getElementById('guess-value').value = 'Try again';
  //   }
  //   console.log('remaining', remainingGuesses);
  // });
}

/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

console.log(winningNum);

// UI Elements
const game = document.getElementById('game'),
  minNum = document.getElementById('min-num'),
  maxNum = document.getElementById('max-num'),
  guessBtn = document.getElementById('guess-btn'),
  guessInput = document.getElementById('guess-input'),
  message = document.getElementById('message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', (e) => {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    return setMessage(
      `Please enter a number between ${min} and ${max}.`,
      'red'
    );
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - won
    gameOver(true, `${winningNum} is correct! Try again?`);
  } else {
    // Decrement guessesLeft
    guessesLeft--;
    // Change border color
    guessInput.style.borderColor = 'red';
    // Clear input
    guessInput.value = '';

    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(false, `Sorry, the answer was ${winningNum}. Try again?`);
    } else {
      // Set message
      setMessage(
        `${guess} is incorrect, you have ${guessesLeft} guesses remaining.`,
        'red'
      );
    }
  }
});

// Game over
const gameOver = (won, msg) => {
  let color;
  won ? (color = 'green') : (color = 'red');

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);

  // Try again
  guessBtn.value = 'play again';
  guessBtn.className = 'play-again';
};

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
};
