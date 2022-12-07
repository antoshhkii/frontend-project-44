#!/usr/bin/env node

import greeting from '../src/cli.js';
import { answerForm, checkAnswer } from '../src/index.js';
import { isPrime, magicNumbers } from '../src/math.js';

const prime = () => {
  const username = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const randomNumber = magicNumbers();
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnswer = isPrime(randomNumber);

    if (!checkAnswer(userAnswer, correctAnswer, username, attempts)) break;
  }
};

prime();
export default prime;
