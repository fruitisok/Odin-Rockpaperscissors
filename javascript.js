// computer select choice 
// user select choice
// if user choice > computer return win message
// if user choice < computer return lose message

function getComputerChoice(){
    let options= ['rock', 'paper', 'scissors'];
    return compchoice= options[Math.floor(Math.random()*options.length)];
}

console.log (getComputerChoice())