#!/usr/bin/env
import greeting from '../src/cli.js';
import {
  magicNumbers, getOperator, answerForm, checkAnswer,
} from '../src/index.js';
import { basicMath } from '../src/math.js';

const name = greeting();

const calc = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const currentOperator = getOperator(['+', '-', '*']);
    const x = magicNumbers();
    const y = magicNumbers();
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

    if (!checkAnswer(userAnswer, correctAnswer, name, i)) break;
  }
};
calc();
export default calc;
