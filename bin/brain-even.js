import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let question = '';
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor((Math.random() * 100) + 1);
    question = readlineSync.question(`Question: ${randomNumber} \n`);
    if ((randomNumber % 2 === 0 && question === 'yes') || (randomNumber % 2 !== 0 && question === 'no')) {
      console.log('Correct!');
    } else {
      const incorrect = (question === 'yes') ? "'no'" : "'yes'";

      const result = (`'${question}' is wrong answer ;(. Correct answer was ${incorrect}. \n Let's try again, ${userName}!`);
      console.log(result);
      break;
    }
  }
};
even();
export default even;
