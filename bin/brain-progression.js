#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetingMessage } from '../src/cli.js';

function brainProgression() {
   const name = greetingMessage();
  let correctAnswers = 0;
  const totalQuestions = 3;

  while (correctAnswers < totalQuestions) {
    const length = Math.floor(Math.random() * 6) + 5; 
    const start = Math.floor(Math.random() * 20) + 1;   
    const step = Math.floor(Math.random() * 5) + 1;    

    const progression = Array.from({ length: length }, (_, i) => start + i * step);
    const hiddenIndex = Math.floor(Math.random() * length);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = "..";

    const question = progression.join(" ");
    const userAnswer = prompt(`Question: ${question}\nYour answer:`);

    if (userAnswer === null) { 
      console.log("Okay, maybe next time!");
      return;
    }

    const userAnswerNum = parseInt(userAnswer, 10); 
    if (isNaN(userAnswerNum)) {
      console.log("Invalid input. Please enter a number.");
      continue; 
    }

    if (userAnswerNum.length === hiddenValue.length) {
      alert("Correct!");
      correctAnswers++;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.\nLet's try again, ${name}!`
      );
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

brainProgression();
