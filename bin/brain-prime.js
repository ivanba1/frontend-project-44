#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetingMessage } from '../src/cli.js';

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function brainPrime() {
  const name = greetingMessage();
  console.log('Answer "yes" if the given number is prime. Otherwise answer "no".');

  const correctAnswers = 0;
  const totalQuestions = 3;

  while (correctAnswers < totalQuestions) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer:`);

    if (userAnswer === null) {
      console.log('Okay, maybe next time!');
      return;
    }

    const userAnswerLower = userAnswer.toLowerCase();

    if (userAnswer.length === correctAnswer.length) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }

  console.log(`Congratulations, ${name}!`);
}

brainPrime();
