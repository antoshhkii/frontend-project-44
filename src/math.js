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
