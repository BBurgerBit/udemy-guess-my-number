'use strict';

/*

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = ' Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('🛑 No number!');

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!');
    displayNumber(secretNumber);
    displayBackgroundColor('#60b347');
    displayNumberWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('👎 You lost the game!');
      displayScore(0);
      displayBackgroundColor('#FF0000');
    }
  }
});

/*

    // When the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('📈 Too high!');
      score--;
      displayScore(score);
    } else {
      displayMessage('👎 You lost the game!');
      displayScore(0);
      displayBackgroundColor('#FF0000');
    }

    // When the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('👎 You lost the game!');
      displayScore(0);
    }
  }
});

*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore('score');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  displayBackgroundColor('#222');
  displayNumberWidth('15rem');
});
