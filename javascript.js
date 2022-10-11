// computer select choice 
// user select choice
// if user choice > computer return win message
// if user choice < computer return lose message

function getComputerChoice(){
    let options= ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*options.length)];
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
}
const compSelection = getComputerChoice();
const playerSelection = 'rock';
console.log(playRound(playerSelection, compSelection));