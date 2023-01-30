const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener('click', uiRound);
paperButton.addEventListener('click', uiRound);
scissorsButton.addEventListener('click', uiRound);

let humanScore = 0;
let computerScore = 0;

const computerSelectionText = document.getElementById('computerSelection');
const humanScoreText = document.querySelector('#human-score');
const computerScoreText = document.querySelector('#computer-score');
const roundWinnerText = document.getElementById('round-winner');
const gameWinnerText = document.querySelector('#game-winner');


const reset = document.querySelector('#reset-button');

reset.addEventListener('click',resetGame);

function uiRound(e){
    const computerSelection = getComputerChoice();
    computerSelectionText.textContent = "computer selected: " + computerSelection;
    roundWinnerText.textContent = playRound(e.currentTarget.id,computerSelection);
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    checkWinner();
}

function checkWinner(){
    if(humanScore == 5){
        gameWinnerText.textContent = "Congratulations you win"
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    else if(computerScore == 5){
        gameWinnerText.textContent = "you have let us down, the machines win"
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}
function getComputerChoice(){
    let number = Math.floor(Math.random() * 3 + 1);
    switch(number){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        
    }
}

function playRound(playerSelection, computerSelection){

    if(playerSelection == "rock"){
        switch(computerSelection){
            case "rock":
                return "draw";
            case "paper":
                computerScore++;
                return "computer win";
            case "scissors":
                humanScore++;
                return "you win";
        }
    }
    else if(playerSelection == "paper"){
        switch(computerSelection){
            case "rock":
                humanScore++;
                return "you win";
            case "paper":
                return "draw";
            case "scissors":
                computerScore++;
                return "computer win";
        }
    }
    else if(playerSelection == "scissors"){
        switch(computerSelection){
            case "rock":
                computerScore++;
                return "computer win";
            case "paper":
                humanScore++;
                return "you win";
            case "scissors":
                return "draw";
        }
    }
  
}

function resetGame()
{
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    humanScore = 0;
    computerScore = 0;
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    gameWinnerText.textContent = "";
}

