import makeRandom from '../cli.js';
import game from '../index.js';

const gameDescription = 'What is the result of the expression?';

const maximumValue = 10;
const operatorSign = ['+', '-', '*'];

const calculateMode = {
  '-': (num1, num2) => num1 - num2,
  '+': (num1, num2) => num1 + num2,
  '*': (num1, num2) => num1 * num2,
};

const makeGameData = () => {
  const a = makeRandom(1, maximumValue);
  const b = makeRandom(1, maximumValue);
  const operator = operatorSign[makeRandom(0, operatorSign.length - 1)];
  const question = `${a} ${operator} ${b}`;
  const answer = String(calculateMode[operator](a, b));
  return [question, answer];
};

export default () => game(gameDescription, makeGameData);
