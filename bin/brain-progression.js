#!/usr/bin/env node

import greeting from '../src/cli.js';
import { answerForm, question, checkAnswer } from '../src/index.js';
import { magicNumbers, prog, progressionSolver } from '../src/math.js';

const progression = () => {
  const username = greeting();
  question('What number is missing in the progression?');

  for (let attempts = 0; attempts < 3; attempts += 1) {
    const n = magicNumbers();
    const a = magicNumbers(2, 25);
    const problem = prog(n, a);
    const userAnswer = answerForm(problem, 'string');
    const correctAnswer = progressionSolver(problem);

    if (!checkAnswer(userAnswer, correctAnswer, username, attempts)) break;
  }
};

progression();
export default progression;
