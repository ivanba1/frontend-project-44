#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetingMessage } from '../src/cli.js';

function brainProgression() {
   const name = greetingMessage();
  let correctAnswers = 0;
  const totalQuestions = 3;

  while (correctAnswers < totalQuestions) {
    const length = Math.floor(Math.random() * 6) + 5; // Length: 5-10
    const start = Math.floor(Math.random() * 20) + 1;   // Start: 1-20
    const step = Math.floor(Math.random() * 5) + 1;    // Step: 1-5

    const progression = Array.from({ length: length }, (_, i) => start + i * step);
    const hiddenIndex = Math.floor(Math.random() * length);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = "..";

    const question = progression.join(" ");
    const userAnswer = prompt(`Question: ${question}\nYour answer:`);

    if (userAnswer === null) { 
      alert("Okay, maybe next time!");
      return;
    }

    const userAnswerNum = parseInt(userAnswer, 10); 
    if (isNaN(userAnswerNum)) {
      alert("Invalid input. Please enter a number.");
      continue; 
    }

    if (userAnswerNum.length === hiddenValue.length) {
      alert("Correct!");
      correctAnswers++;
    } else {
      alert(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.\nLet's try again, ${name}!`
      );
      return;
    }
  }

  alert(`Congratulations, ${name}!`);
}

brainProgression();
