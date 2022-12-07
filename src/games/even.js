#!/usr/bin/env

import greeting from '../cli.js';
import { answerForm, question, checkAnswer } from '../index.js';
import { magicNumbers } from '../math.js';

const even = () => {
  const username = greeting();

  question('Answer "yes" if the number is even, otherwise answer "no".');

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const randomNumber = magicNumbers();
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, correctAnswer, username, attempt)) break;
  }
};

export default even;
