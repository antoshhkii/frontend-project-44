#!/usr/bin/env node

import greeting from '../cli.js';
import { answerForm, checkAnswer, question } from '../index.js';
import { getOperator, basicMath, magicNumbers } from '../math.js';

const calc = () => {
  const username = greeting();
  question('What is the result of the expression?');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const currentOperator = getOperator(['+', '-', '*']);
    const x = magicNumbers(2, 15);
    const y = magicNumbers(2, 15);
    const problem = `${x} ${currentOperator} ${y}`;
    const userAnswer = answerForm(problem);
    let correctAnswer = 0;
    switch (currentOperator) {
      case '+':
        correctAnswer = basicMath(x, y, '+');
        break;

      case '-':
        correctAnswer = basicMath(x, y, '-');
        break;

      case '*':
        correctAnswer = basicMath(x, y, '*');
        break;

      default:
    }

    if (!checkAnswer(userAnswer, correctAnswer, username, attempts)) break;
  }
};

export default calc;
