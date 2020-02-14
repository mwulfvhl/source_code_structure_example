import featureOneContent from './feature_one_content.js';
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('.js-insert-content').innerHTML = featureOneContent();
});
