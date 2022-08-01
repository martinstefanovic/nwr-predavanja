// * VARIABLES
const options = ['scissors', 'rock', 'paper']
const buttonOptions = document.getElementsByClassName('game-option')


for (const button of buttonOptions) {
    button.addEventListener('click',()=>{
        let userChoice = button.getAttribute('data-option')
        checkWinner(userChoice,getRandomGameOption())
    })
}

function checkWinner(choise, computerChoice){
    if (choise === computerChoice) {
        console.log('result is null')
    }
    
    if (choise === "rock" && computerChoice === "scissors") {
        console.log('you win')
    }
    
    if (choise === "scissors" && computerChoice === "paper") {
        console.log('you win')
    }
    
    if (choise === "paper" && computerChoice === "rock") {
        console.log('you win')
    }
    
    if (choise === "scissors" && computerChoice === "rock") {
        console.log('you lose')
    }
    
    if (choise === "paper" && computerChoice === "scissors") {
        console.log('you lose')
    }
    
    if (choise === "rock" && computerChoice === "paper") {
        console.log('you lose')
    }

}

function getRandomGameOption(){
    let index = getRandomNumber(0,2)
    console.log(options[index])
    return options[index]
}

// * HELPERS
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}