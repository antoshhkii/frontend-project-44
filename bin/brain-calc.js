#!/usr/bin/env
import greeting from '../src/cli.js';
import {
  magicNumbers, getOperator, answerForm, checkAnswer,
} from '../src/index.js';

const name = greeting();

const calc = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const currentOperator = getOperator(['+', '-', '*']);
    const operands = magicNumbers(2);
    const problem = `${operands[0]} ${currentOperator} ${operands[1]}`;
    const userAnswer = parseInt(answerForm(problem), 10);
    let correctAnswer = 0;
    switch (currentOperator) {
      case '+':
        correctAnswer = operands[0] + operands[1];
        break;

      case '-':
        correctAnswer = operands[0] - operands[1];
        break;

      case '*':
        correctAnswer = operands[0] * operands[1];
        break;

      default:
    }

    if (!checkAnswer(userAnswer, correctAnswer, name, i)) break;
  }
};
calc();
export default calc;
