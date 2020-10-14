// Set answer
let answer = Math.ceil(Math.random() * 10);
console.log('answer', answer);

// Set remaining guesses
let remainingGuesses = 3;

document.getElementById('guess-value').addEventListener('click', (e) => {
  e.preventDefault();

  let guess = Number(document.getElementById('guess-input').value);
  console.log('guess', guess);

  // Validate guess
  if (
    guess < document.getElementById('min-num').textContent ||
    guess > document.getElementById('max-num').textContent
  ) {
    document.getElementById('message').textContent =
      'Please guess within the range.';
  }

  // If incorrect
  else if (guess !== answer) {
    remainingGuesses--;
    document.getElementById(
      'message'
    ).textContent = `Incorrect, guesses remaining: ${remainingGuesses}`;
    console.log(remainingGuesses);
  }

  // If correct
  else {
    document.getElementById('message').textContent = 'Correct!';

    // Disable input
    document.getElementById('guess-input').disabled = true;

    // Change submit button
    document.getElementById('guess-value').value = 'Try again';
  }

  // When remaining guesses runs out
  if (remainingGuesses === 0) {
    document.getElementById(
      'message'
    ).textContent = `Sorry, the correct answer was ${answer}. Try again!`;

    // Disable input
    document.getElementById('guess-input').disabled = true;

    // Change submit button
    document.getElementById('guess-value').value = 'Try again';
  }

  console.log('remaining', remainingGuesses);
});
