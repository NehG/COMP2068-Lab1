const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, // Similar to Request in Node
  output: process.stdout // Similar to response in Node
});
let validOptions = ['rock', 'paper', 'scissors'];
let evalResults = {
    "Won" : 0,
    "Ties" : 0,
    "Loss" : 0,
    "Score" : 0
};

const generateChoice = () => {
  const index = Math.floor(Math.random() * Math.floor(3));
  return validOptions[index];
};

const getChoice = () => {
    let choice = "";
    rl.question(
  `Please choose one of the following:

    Rock
    Paper
    Scissors

    `,
    userChoice => {
        var isValid = false;
        choice = userChoice.toLowerCase();
        if(isValid == false && validOptions.includes(choice)){
            isValid = true;
        }else{
            isValid = false;
        }
        const computer = generateChoice();

        if(isValid == true && choice.trim != undefined && computer != undefined){
            // Winning Conditions
            // First is Tie
            if (choice === computer) {
                console.log('There was a tie, time for tie breaker 1.2.3...');
                evalResults.Ties += 1;
                getChoice();
            } else if (
            // User winning conditions
            (choice === 'rock' && computer === 'scissors') ||
            (choice === 'scissors' && computer === 'paper') ||
            (choice === 'paper' && computer === 'rock')
            ) {
                console.log(`
                (Player) won over (Computer)
                ${choice} > ${computer}
                `);
            console.log('Player won');
            evalResults.Won += 1;
            evalResults.Score += 10;
            } else {
            // Else computer won
            console.log(`
                (Player) lost over (Computer)
                ${choice} < ${computer}
            `);
            console.log('Computer won');
                evalResults.Loss += 1;
                evalResults.Score -= 10;
            }

           let playAgain = () => 
            { 
                rl.question(
                `
                You seems to be intresting guy, let play again once ...? (Yes / No) 
                `,
                response => {
                    let isOptionValid = false;
                    const res = response.toLowerCase();
                    if(isOptionValid == false && ["yes", "no"].includes(res)){
                        isOptionValid = true;
                    }else{
                        isOptionValid = false;
                    }
                    if(isOptionValid){
                        if(res == "yes"){
                            getChoice();
                        }else{
console.log("\x1b[32m", `
Player { Won: ${evalResults.Won}, Ties: ${evalResults.Ties}, Loss: ${evalResults.Loss} }
Score: ${evalResults.Score}
`);
                            rl.close();
                        console.log("\x1b[0m", "\nThank You! Made with Love by Nehal Gajjar.");
                        }
                    }else{
                        console.log(`"${res}" is not Valid Option. Valid Options are "Yes" or "No".`);
                        playAgain();
                    }
                 });
            }
            playAgain();
        }else{
            console.log(`
            "${choice}" is not Valid Option. Valid Options are :
            Rock
            Paper
            Scissors
            `);
            getChoice();
        }
    }
    );
}

//Init
getChoice();