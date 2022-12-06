#!/usr/bin/env
import greeting from '../src/cli.js';
import {
  answerForm, question, checkAnswer,
} from '../src/index.js';
import { magicNumbers, divisor } from '../src/math.js';

const gcd = () => {
  const name = greeting();
  question('Find the greatest common divisor of given numbers.');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const x = magicNumbers();
    const y = magicNumbers();
    const problem = `${x} ${y}`;
    const correctAnswer = divisor(x, y);
    const userAnswer = answerForm(problem);
    if (!checkAnswer(userAnswer, correctAnswer, name, attempts)) break;
  }
};

gcd();
export default gcd;
