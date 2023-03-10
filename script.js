'use strict';

let number = Math.round(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number 😓';
    showMessage('No number 😓');

    // when player win
  } else if (guess === number) {
    showMessage('Correct number🎉');
    // document.querySelector('.message').textContent = 'Correct number🎉';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is low
  } else if (guess !== number) {
    if (score > 1) {
      //   document.querySelector('.message').textContent = 'The number is low';

      showMessage(guess > number ? 'The number is high' : 'The number is low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('You lost the game😔');
      //   document.querySelector('.message').textContent = 'You lost the game😔';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is high
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.round(Math.random() * 20 + 1);
  score = 20;
  showMessage('Start guessing...');
  //   document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
