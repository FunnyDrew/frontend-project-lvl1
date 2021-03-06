import makeRandom from '../cli.js';
import game from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;
const maxFirstElement = 20;
const maxStep = 20;

const makeGameData = () => {
  const firstElement = makeRandom(1, maxFirstElement);
  const step = makeRandom(1, maxStep);
  const hidenElementIndex = makeRandom(0, progressionLength - 1);
  const progression = new Array(progressionLength);

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = String(firstElement + i * step);
  }
  progression[hidenElementIndex] = '..';

  const question = progression.join(' ');
  const answer = String(firstElement + hidenElementIndex * step);

  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
