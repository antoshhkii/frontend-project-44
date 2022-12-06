import readlineSync from 'readline-sync';

export const answerForm = (variable, dataType) => {
  const result = readlineSync.question(`Question: ${variable} \nYour answer: `);
  if (dataType === 'string') {
    return result;
  }
  return parseInt(result, 10);
};

export const question = (str) => {
  console.log(str);
};

export const checkAnswer = (userAnswer, correctAnswer, name, attempts) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
    return false;
  }
  if (attempts === 2) console.log(`Congrulations, ${name}!`);
  return true;
};
