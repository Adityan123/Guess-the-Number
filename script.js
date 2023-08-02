'use strict';
let score = 20;
let highscore = 0;
let secretnumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretnumber);

// Message Function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Score Function
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//Number Function
const displayNumber = function (num) {
  document.querySelector('.number').textContent = num;
};

//Check Button Functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (score > 1) {
    if (!guess) {
      displayMessage('📛 No Number...');
    } else if (guess === secretnumber) {
      displayMessage('💚 You Won....');
      displayNumber(secretnumber);
      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
        highscore = score;
      }
      document.body.style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '40rem';
    } else if (guess !== secretnumber) {
      displayMessage(
        guess > secretnumber
          ? '❕❗ The Number Is Higher....'
          : '💤 The Number Is Lower....'
      );
      score--;
      displayScore(score);
    }
  } else {
    displayScore(0);
    displayMessage('😫 You Lost Game....');
    document.body.style.backgroundColor = 'red';
  }
});

//Again Button Functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  // console.log(secretnumber);
  displayMessage('start guessing');
  displayScore(20);
  displayNumber('?');
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = highscore;
});
