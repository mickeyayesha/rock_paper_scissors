let computerScore = 0;
let playerScore = 0;
//let computerSelection = computerPlay();
//let playerSelection = prompt("Rock, Paper, or Scissors??");


//Computer's Choice
function computerPlay() {
    //Random number
    let randNum = Math.floor(Math.random() * 2);
    //Assign random number to rock, paper, or scissors
    if (randNum == 0) {
        return "rock";
    } else if (randNum == 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

function restartGame() {
    playerScore = 0;
    computerScore = 0;
};

function game () {
    restartGame();
    /*while (computerScore !==5 && playerScore !== 5) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper, or Scissors??");
        round(playerSelection, computerSelection);
    }*/
    for (let newRound = 1; newRound <= 5; newRound++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper, or Scissors??");
        console.log(round(playerSelection, computerSelection));
    }
    if (playerScore > computerScore){
        console.log("Winner winner chicken dinner! You won " + playerScore + " to " + computerScore);
    } else {
        console.log("Too bad... You lost " + playerScore + " to " + computerScore);
    }
}

function round(playerSelection, computerSelection) {
    //Draw
    if (playerSelection.toLowerCase() == computerSelection) {
        return "There's been a draw!";
        }
    //Player Selection: Rock
    else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "paper") {
            computerScore++
            return "Too bad! Paper beats Rock...";
    } else if (computerSelection == "scissors") {
            playerScore++
            return "Wow! Rock beats Scissors!";
        }
    }
    //Player Selection: Paper
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            playerScore++
            return "Yes! Paper covers Rock!";
        } else if (computerSelection == "scissors") {
            computerScore++
            return "Uh oh, Scissors cuts Paper. Too bad...";
        }
    }
    //Player Selection: Scissors
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "rock") {
            computerScore++
            return "Duh-oh... rock beats scissors.";
        } else if (computerSelection == "paper") {
            playerScore++
            return "WEEEEEE! Scissors beat paper!";
        }
    }
    else {
        return "I'm not sure that's valid, my apologies"
    }
};

console.log(game())
//console.log(round('rock', computerPlay()))