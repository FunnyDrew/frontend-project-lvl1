#!/usr/bin/env node
import welcome from '../src/cli.js';
import readlineSync from 'readline-sync';

welcome();

const getRandom = () => Math.floor(1000*Math.random());
const isEven = (n) => (n%2 === 0);

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(gameRules);

const evenGame = () => {
    const number = getRandom();
    const answer = readlineSync(`Number ${number} is even`);
    
}