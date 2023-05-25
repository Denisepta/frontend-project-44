import readlineSync from 'readline-sync';

function greet() {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${username}!`);
}

function randomInteger(min = 2, max = 100) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
export { greet, randomInteger };
