#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { end, greetingMessage } from '../src/cli.js';

function isEven(number) {
  return number % 2 === 0;
}

function braingame() {
  const name = greetingMessage();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const correctpoint = 0;
  while (correctpoint < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    const cov = end();
    return cov;
  }

  console.log(`Congratulations, ${name}!`);
}

braingame();
