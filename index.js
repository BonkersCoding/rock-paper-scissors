let choices = document.querySelector('.choices');
let imgs = document.querySelectorAll('.img');
let message = document.querySelector('#message');
let score = document.querySelector('#score');
let header = document.querySelector("#header")
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;

        case 1:
            return 'paper';
            break;
    
        default:
            return 'scissors';
            break;
    }
        
}


choices.addEventListener('click', (event) => {   
    let target = event.target;
    let humanChoice = target.id;
    let computerChoice = getComputerChoice();
    imgs.forEach((img) => { img.style.border= "none" })
    let result = playRound(humanChoice, computerChoice);
    switch (result) {
        case 'win':
            humanScore += 1;
            header.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
            target.style.border = "5px solid green";
            document.getElementById(computerChoice).style.border = "5px solid red";
            break;
        
        case 'lose':
            computerScore += 1;
            header.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
            document.getElementById(computerChoice).style.border = "5px solid green";
            target.style.border = "5px solid red";
            break;
        
        case 'draw':
            header.textContent = "It's a draw! Try again!";
            target.style.border = "5px solid yellow";
            break;
        
        default:
            break;
    }
    if (humanScore === 5 || computerScore === 5 ) {
        header.textContent = (humanScore === 5 ? `YOU WIN ${humanScore}:${computerScore}! ` : `COMPUTER WINS ${computerScore}:${humanScore}! `) + ` Click an option to start again`;
        humanScore = 0;
        computerScore = 0;
    }
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
});

function playRound(humChoice, compChoice) {
    message.textContent = `Your choice: ${humChoice} | Computer choice: ${compChoice}`;
    if (humChoice == compChoice) {
        return 'draw';
    }   else {
            switch (humChoice) {
                case 'rock':
                    return (compChoice == 'scissors' ? 'win' : 'lose');
                    break;
                case 'paper':
                    return (compChoice == 'rock' ? 'win' : 'lose');
                    break;
                case 'scissors':
                    return (compChoice == 'paper' ? 'win' : 'lose');
                    break;
                default:
                    console.log('invalid string');
                    return 'invalid';
                    break;
            }
        }
}


