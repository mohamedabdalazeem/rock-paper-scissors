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
                return "computer";
            case "scissors":
                return "human";
        }
    }
    else if(playerSelection == "paper"){
        switch(computerSelection){
            case "rock":
                return "human";
            case "paper":
                return "draw";
            case "scissors":
                return "computer";
        }
    }
    else if(playerSelection == "scissors"){
        switch(computerSelection){
            case "rock":
                return "computer";
            case "paper":
                return "human";
            case "scissors":
                return "draw";
        }
    }
  
}

// const playerSelection = prompt("enter rock paper or scissors").toLowerCase();
// if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
//     const computerSelection = getComputerChoice();
//     console.log(playerSelection);
//     console.log(computerSelection);
//     //console.log(playRound(playerSelection, computerSelection));
// }
// else {
//     alert("enter a valid value please!");
// }

function game(){
    let roundNumber = 1;
    let playerScore = 0;
    let computerScore = 0;
    alert("Lets play rock, paper, scissors!!");
    gameRound();
    function gameRound(){
            const playerSelection = prompt("enter rock, paper or scissors");
            playerSelection ? playerSelection.toLowerCase() : "";

            if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
                const computerSelection = getComputerChoice();
                console.log(playerSelection);
                console.log(computerSelection);
                let winner = playRound(playerSelection, computerSelection);
                console.log(winner);
                if(winner == "human"){
                    playerScore++;
                }
                else if(winner == "computer"){
                    computerScore++;
                }

                if(roundNumber < 5){
                    roundNumber++;
                    gameRound();
                }
                else {
                    if(playerScore > computerScore){
                        alert("You have won!! Yay");
                    }
                    else if(computerScore > playerScore){
                        alert("You have Lost!");
                    }
                    else {
                        alert("its a draw");
                    }

                    confirm("Wanna play again?") ? game() : alert("Bye");
                }
            }
            else {
                alert("enter a valid value please!");
                gameRound();
            }
    }
}
game();