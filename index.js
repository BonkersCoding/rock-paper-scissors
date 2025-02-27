let choices = document.querySelector('.choices');
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


function borderColor(humanChoice, computerChoice) {
    humanChoice.style.border = "5px solid green";
    document.getElementById(computerChoice).style.border = "5px solid red";
}


choices.addEventListener('click', (event) => {   
    let target = event.target;
    let humanChoice = target.id;
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    switch (result) {
        case 'win':
            humanScore += 1;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            header.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
            break;
        
        case 'lose':
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            header.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
            break;
        
        case 'draw':
            console.log("It's a draw! Try again!");
            header.textContent = "It's a draw! Try again!";
            break;
        
        default:
            break;
    }
    borderColor(target, computerChoice);
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
});

function playRound(humChoice, compChoice) {
        
    console.log(`Your choice: ${humChoice} `,`Computer choice: ${compChoice} `);
    message.textContent = `Your choice: ${humChoice} | Computer choice: ${compChoice}`;
    if (humChoice == compChoice) {
        return 'draw';
    } else {

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


