#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingMessage from '../src/cli.js';

function brainprogression() {
  const name = greetingMessage();
  let correctAnswersCount = 0;
  const totalQuestions = 3;

  while (correctAnswersCount < totalQuestions) {
    const length = Math.floor(Math.random() * 6) + 5;
    const start = Math.floor(Math.random() * 20) + 1;
    const step = Math.floor(Math.random() * 5) + 1;

    const progression = Array.from({ length }, (_, i) => start + i * step);
    const hiddenIndex = Math.floor(Math.random() * length);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    const question = progression.join(' ');
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === null) {
      console.log('Okay, maybe next time!');
      return;
    }

    const userAnswerNum = parseInt(userAnswer, 10);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(userAnswerNum)) {
      console.log('Invalid input. Please enter a number.');
      // eslint-disable-next-line no-continue
      continue;
    }

    const correctAnswer = hiddenValue;

    if (userAnswerNum === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }

  console.log(`Congratulations, ${name}!`);
}

brainprogression();
