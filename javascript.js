// computer select choice 
// user select choice
// if user choice > computer return win message
// if user choice < computer return lose message

function getComputerChoice(){
    let options= ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

function getPlayerChoice(){
    return prompt("rock, paper, or scissors?").toLowerCase();
}

function playRound(playerSelection, compSelection){
    if (playerSelection == 'rock' && compSelection == 'scissors'){
        return "You win! Rock beats scissors."
    }
    else if (playerSelection == 'rock' && compSelection == 'paper'){
        return "You lose! Paper beats rock."
    }
    else if (playerSelection == 'rock' && compSelection == 'rock'){
        return "It's a tie!"
    }
    else if (playerSelection == 'paper' && compSelection == 'scissors'){
        return "You lose! Scissors beat paper."
    }
    else if (playerSelection == 'paper' && compSelection == 'rock'){
        return "You win! Paper beats rock."
    }
    else if (playerSelection == 'paper' && compSelection == 'paper'){
        return "It's a tie!"
    }
    else if (playerSelection == 'scissors' && compSelection == 'paper'){
        return "You win! Scissors beat paper."
    }
    else if (playerSelection == 'scissors' && compSelection == 'rock'){
        return "You lose! Rock beats scissors."
    }
    else if (playerSelection == 'scissors' && compSelection == 'scissors'){
        return "It's a tie!"
    }
}

function game(){
    let playerScore=0;
    let compScore=0;
    let compSel = "";
    let playerSel = "";
    let roundResults = "";
    for (let i = 0; i < 5; i++) {
        compSel = getComputerChoice();
        playerSel = getPlayerChoice();
        roundResults = playRound(playerSel, compSel);
        console.log(roundResults);
        if (roundResults.substring(0,5) == "You w"){
            playerScore++;
        }
        else if(roundResults.substring(0,5) == "You l"){
            compScore++;
        }
        else if(roundResults.substring(0,5) == "It's "){
            playerScore++;
            compScore++;
        }
        console.log([playerScore,compScore])
    }
    return[playerScore,compScore];
}

game();
