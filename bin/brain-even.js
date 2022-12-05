import greeting from '../src/cli.js';
import {
  magicNumbers, answerForm, question, checkAnswer,
} from '../src/index.js';

const even = () => {
  const name = greeting();
  question('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = magicNumbers();
    const userAnswer = answerForm(randomNumber);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, correctAnswer, name)) break;
    if (i === 2) console.log(`Congrulations, ${name}!`);
  }
};
even();
export default even;
