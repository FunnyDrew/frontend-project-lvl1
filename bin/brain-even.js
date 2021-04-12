#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';

const name = welcome();

const getRandom = () => Math.floor(1000 * Math.random());
const isEven = (n) => (n % 2 === 0);

const correctness = (number, answer) => {
  let correct = false;
  if ((answer === 'yes' && isEven(number)) || (answer === 'no' && !isEven(number))) correct = true;
  return correct;
};

const ansMode = {
  yes: 'no',
  no: 'yes',
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".\nor type quit for exit';
console.log(gameRules);

let times = 0;

while (times < 3) {
  const number = getRandom();
  const answer = readlineSync.question(`Question: ${number}\n`);
  if (answer === 'exit') break;
  if (correctness(number, answer)) {
    console.log('Correct!');
    times += 1;
  } else {
    times = 0;
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ansMode[answer]}'.`);
    console.log(`Let's try again ${name}`);
  }
}

if (times === 3) console.log(`Congratulations, ${name}!`);
