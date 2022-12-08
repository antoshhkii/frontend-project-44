#!/usr/bin/env node

import greeting from '../src/cli.js';
import { answerForm, checkAnswer } from '../src/index.js';
import { magicNumbers, getDivisor } from '../src/math.js';

const gcd = () => {
  const username = greeting('Find the greatest common divisor of given numbers.');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const x = magicNumbers();
    const y = magicNumbers();
    const problem = `${x} ${y}`;
    const userAnswer = answerForm(problem);
    const correctAnswer = getDivisor(x, y);

    if (!checkAnswer(userAnswer, correctAnswer, username, attempts)) break;
  }
};

gcd();
export default gcd;
