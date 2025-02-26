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

function getHumanChoice(choice) {
    return choice.toLowerCase();
}

playGame();

function playGame() {
    let humanChoice;
    let computerChoice;
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humChoice, compChoice) {
        
        alert(`Your choice: ${humChoice} `,`Computer choice: ${compChoice} `);
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
                    alert('invalid string');
                    return 'invalid';
                    break;
            }
        }
    } 

    for (let i = 0; i < 5; i++) {

        humanChoice = getHumanChoice(prompt('Rock, paper or scissors?', ''));
        computerChoice = getComputerChoice();
        let winLose = playRound(humanChoice, computerChoice);

        switch (winLose) {
            case 'win':
                humanScore += 1;
                alert(`You win! ${humanChoice} beats ${computerChoice}!`);
                break;
            
            case 'lose':
                computerScore += 1;
                alert(`You lose! ${computerChoice} beats ${humanChoice}!`);
                break;
            
            case 'draw':
                alert("It's a draw! Try again!");
                break;
            
            default:
                i--;
                break;
        } 
    
        alert(`Human: ${humanScore} | Computer: ${computerScore}`);
    }
}