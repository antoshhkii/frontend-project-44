#!/usr/bin/env
import greeting from '../src/cli.js';
import { answerForm, checkAnswer, question } from '../src/index.js';
import { getOperator, basicMath, magicNumbers } from '../src/math.js';

const name = greeting();

const calc = (username) => {
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
calc(name);
export default calc;
