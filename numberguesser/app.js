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
  winningNum = 2,
  guessesLeft = 3;

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

// Listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct!`, 'green');
  } else {
  }
});

// Set Message
const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
};
