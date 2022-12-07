#!/usr/bin/env node

import greeting from '../cli.js';
import { answerForm, question, checkAnswer } from '../index.js';
import { isPrime, magicNumbers } from '../math.js';

const prime = () => {
  const username = greeting();
  question('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const randomNumber = magicNumbers();
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnswer = isPrime(randomNumber);

    if (!checkAnswer(userAnswer, correctAnswer, username, attempts)) break;
  }
};

export default prime;
