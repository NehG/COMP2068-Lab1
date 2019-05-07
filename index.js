const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, // Similar to Request in Node
  output: process.stdout // Similar to response in Node
});
let validOptions = ['rock', 'paper', 'scissors'];

const generateChoice = () => {
  const index = Math.floor(Math.random() * Math.floor(3));
  return validOptions[index];
};

rl.question(
  `Please choose one of the following:

Rock
Paper
Scissors
`,
  userChoice => {
    const choice = userChoice;
    const computer = generateChoice();

    // Winning Conditions
    // First is Tie
    if (choice === computer) {
      console.log('There was a tie');
    } else if (
      // User winning conditions
      (choice === 'rock' && computer === 'scissors') ||
      (choice === 'scissors' && computer === 'paper') ||
      (choice === 'paper' && computer === 'rock')
    ) {
      console.log('Player won');
    } else {
      // Else computer won
      console.log('Computer won');
    }

    console.log(`Player chose: ${choice}
    Computer chose: ${computer}`);

    rl.close();
  }
);