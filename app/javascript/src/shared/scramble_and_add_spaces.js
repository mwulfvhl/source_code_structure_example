import shuffle from './fisher_yates.js';

function scrambleAndAddSpaces(string) {
  return shuffle(string.split('')).join('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
}

export default scrambleAndAddSpaces;
