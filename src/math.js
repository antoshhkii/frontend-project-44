export const getOperator = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const operator = array[index];
  return operator;
};

export const divisor = (x, y) => {
  const greatestNum = (x >= y) ? x : y;
  const smallestNum = (x <= y) ? x : y;
  let gcd = 1;
  for (let i = smallestNum; i > 0; i -= 1) {
    if ((greatestNum % i === 0) && (smallestNum % i === 0)) {
      gcd = i;
      break;
    }
  }
  return gcd;
};

export const basicMath = (x, y, oper) => {
  let result = 0;
  if (oper === '+') result = x + y;
  if (oper === '-') result = x - y;
  if (oper === '*') result = x * y;
  return result;
};

export const magicNumbers = (min = 1, max = 100) => {
  const minimal = Math.ceil(min);
  const maximum = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (maximum - minimal)) + minimal;
  return randomNumber;
};

export const prog = (n, a) => {
  let result = '';
  const length = magicNumbers(5, 10);
  const hidden = magicNumbers(1, length - 1);
  for (let i = 0; i < length; i += 1) {
    const currentNum = (n + (a * i));
    result += (i !== hidden) ? `${currentNum} ` : '.. ';
  }
  return result;
};

export const progressionSolver = (str) => {
  const sort = str.split(' ');
  const indexSearch = sort.indexOf('..');
  const prevNeighboor = parseInt(sort[indexSearch - 1], 10);
  const nextNeighboor = parseInt(sort[indexSearch + 1], 10);
  const solve = (prevNeighboor + nextNeighboor) / 2;
  return `${solve}`;
};

export const isPrime = (number) => {
  const primalNums = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
  ];
  return (primalNums.includes(number)) ? 'yes' : 'no';
};
