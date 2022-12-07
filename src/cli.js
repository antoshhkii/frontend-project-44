import readlineSync from 'readline-sync';
import { question } from '.';

const greeting = (description) => {
  question('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  question(`Hello, ${userName}!`);
  question(description)
  return userName;
};

export default greeting;
