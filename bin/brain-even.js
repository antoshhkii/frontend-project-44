#!/usr/bin/env
import greeting from '../src/cli.js';
import {
  magicNumbers, answerForm, question, checkAnswer,
} from '../src/index.js';

const even = () => {
  const name = greeting();
  question('Answer "yes" if the number is even, otherwise answer "no".');

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const randomNumber = magicNumbers();
    const userAnswer = answerForm(randomNumber, 'string');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    if (checkAnswer(userAnswer, correctAnswer, name, attempt)) break;
  }
};
even();
export default even;
