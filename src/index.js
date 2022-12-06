import readlineSync from 'readline-sync';

export const getOperator = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const operator = array[index];
  return operator;
};

export const answerForm = (variable, dataType) => {
  const result = readlineSync.question(`Question: ${variable} \nYour answer: `);
  if (dataType === 'string') {
    return result;
  }
  return parseInt(result, 10);
};

export const magicNumbers = (n = 1) => {
  const result = [];
  let ordinary = 0;
  for (let i = 0; i < n; i += 1) {
    const randomNumber = Math.floor((Math.random() * 100) + 1);
    if (n === 1) {
      ordinary = randomNumber;
      return ordinary;
    }
    result.push(randomNumber);
  }
  return result;
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
