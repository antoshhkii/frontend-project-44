export const getOperator = (array) => {
  const index = Math.floor(Math.random() * array.length);
  const operator = array[index];
  return operator;
};

export const divisor = (x, y) => {
  const greatestNum = (x >= y) ? x : y;
  console.log(greatestNum);
  const smallestNum = (x <= y) ? x : y;
  console.log(smallestNum);
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

export const magicNumbers = (n = 1, min = 1, max = 100) => {
  const result = [];
  let ordinary = 0;
  const minimal = Math.ceil(min);
  const maximum = Math.floor(max);
  for (let i = 0; i < n; i += 1) {
    const randomNumber = Math.floor(Math.random() * (maximum - minimal)) + minimal;
    if (n === 1) {
      ordinary = randomNumber;
      return ordinary;
    }
    result.push(randomNumber);
  }
  return result;
};

export const prog = (n, a) => {
  let result = '';
  const length = magicNumbers(1, 5, 10);
  const hidden = magicNumbers(1, 1, length - 1);
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
