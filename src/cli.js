import readlineSync from 'readline-sync';

export default () => {
  const greetings = 'Welcome to the Brain Games';
  const greetingsQuestion = 'May I have your name? ';

  console.log(greetings);
  const name = readlineSync.question(greetingsQuestion);
  console.log(`Hello, ${name}!`);
  return name;
};
