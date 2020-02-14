import featureTwoContent from './feature_two_content.js';
import eightBall from '../shared/eight_ball.js';

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.js-insert-content').innerHTML = featureTwoContent();
  document.querySelector('.js-eight-ball-answer').innerHTML = eightBall();
});
