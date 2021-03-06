import makeRandom from '../cli.js';
import game from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const maximumValue = 50;

const getGcd = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else num2 %= num1;
  }
  return num1 + num2;
};

const makeGameData = () => {
  const gameNumber1 = makeRandom(1, maximumValue);
  const gameNumber2 = makeRandom(1, maximumValue);
  const question = `${gameNumber1} ${gameNumber2}`;
  const answer = String(getGcd(gameNumber1, gameNumber2));
  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
