console.log("Hello World")

// functions

function playGame() {

    for (var i = 0; i < 5; i++)
        {
            playRound(getHumanChoice(), getComputerChoice())
        }        

    // print winner
    // if draw
    // else if human wins
    // else computer wins

    }

function playRound(humanChoice, computerChoice) {
    
    // if same
        // print

    // else if human wins
        // print

    // else computer wins
        // print

}

function getComputerChoice() {
    // 1 in 3 chance, rock paper scissors
    result = Math.random * 3;
    if (result >= 2) {
        return "rock";
    }
    else if (result >= 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    var answer = prompt("Rock, paper, or scissors?");
    return answer.toLowerCase;
}

// global variables

var humanScore = 0

var computerScore = 0

