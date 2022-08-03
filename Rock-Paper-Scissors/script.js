
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    let computerChoice = "";

    if(randomNumber === 1) {
        computerChoice = "rock";
    }
    else if(randomNumber === 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
    
}

function playRound(playerSelection, computerSelection) {
   playerSelection = getPlayerChoice();
   computerSelection = getComputerChoice();
   
   if(playerSelection === "rock" && computerSelection === "paper") {
    //alert("The computer choses paper. You lose.");
    computerScore++;
   }
   else if(playerSelection === "scissors" && computerSelection === "rock") {
    //alert("The computer choses rock. You lose.");
    computerScore++;
   }
   else if(playerSelection === "paper" && computerSelection === "scissors") {
    //alert("The computer choses scissors. You lose.");
    computerScore++;
   }
   else if(playerSelection === "paper" && computerSelection === "rock") {
    //alert("The computer choses rock. You win!");
    playerScore++;
   }
   
   else if(playerSelection === "rock" && computerSelection === "scissors") {
    //alert("The computer choses scissors. You win!");
    playerScore++;
   }
   
   else if(playerSelection === "scissors" && computerSelection === "rock") {
    //alert("The computer choses rock. You win!");
    playerScore++;
   }
}

let playerScore = 0;
let computerScore = 0;

function game(){
    let result;
    for(let i = 0; i < 5; i++){
        playRound();
        if(playerScore > computerScore) {
            result = "Your score is "+playerScore+". The computer's score is "+computerScore+". You Win!";
        }
        else if(playerScore < computerScore) {
            result = "Your score is "+playerScore+". The computer's score is "+computerScore+". You Lose.";
        }
        else {
            result = "Your score is "+playerScore+". The computer's score is "+computerScore+". It's a Draw.";
        }
    }
    return result;
}