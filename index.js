function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            computerChoice = 'rock'
            break;

        case 1:
            computerChoice = 'paper'
            break;
    
        default:
            computerChoice = 'scissors'
            break;
    }
    return computerChoice;    
}

function getHumanChoice(choice) {
    let lowercase = choice.toLowerCase();
    return lowercase;
}

function playGame() {
    let humanChoice;
    let computerChoice;
    let winLose;
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humChoice, compChoice) {
        
        console.log(`Your choice: ${humChoice} `,`Computer choice: ${compChoice} `);
        if (humChoice == compChoice) {
            winLose = 'draw';
        } else {

            switch (humChoice) {
                case 'rock':
                    winLose = (compChoice == 'scissors' ? 'win' : 'lose');
                    break;
                case 'paper':
                    winLose = (compChoice == 'rock' ? 'win' : 'lose');
                    break;
                case 'scissors':
                    winLose = (compChoice == 'paper' ? 'win' : 'lose');
                    break;
                default:
                    console.log('invalid string');
                    break;
            }
        }
        return winLose;
    } 

    for (let i = 0; i < 5; i++) {

        humanChoice = getHumanChoice(prompt('Rock, paper or scissors?', ''));
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        switch (winLose) {
            case 'win':
                humanScore += 1;
                console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                break;
            
            case 'lose':
                computerScore += 1;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                break;
            
            case 'draw':
                console.log("It's a draw! Try again!");
                break;
            
            default:
                i--;
                break;
        } 
    
        console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
    }
}