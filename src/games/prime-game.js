import isNumberPrime from 'is-number-prime';
import makeRandom from '../cli.js';
import game from '../index.js';

const maximumValue = 1000;
const minimumValue = -10;

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeGameData = () => {
  const question = makeRandom(minimumValue, maximumValue);
  const answer = isNumberPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
