import moreContent from './more_content.js';
import eightBall from '../shared/eight_ball.js';

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.js-insert-content').innerHTML = moreContent();
  document.querySelector('.js-eight-ball-answer').innerHTML = eightBall();
});
