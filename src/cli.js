import readlineSync from 'readline-sync';

const name = () => {
	const userName = readlineSync.question('May I have your name? ');
	console.log("Welcome to the Brain Games!");
	console.log('Hello, ' + userName + '!');	
};
export default name;
