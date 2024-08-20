playGame();

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
    
    if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        console.log(`Both played ${humanChoice}! Tie.`)
    } else if ((humanChoice === "rock" && computerChoice === "scissors")
            || (humanChoice === "paper" && computerChoice === "rock")
            || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`Your ${humanChoice} beats ${computerChoice}!`)
    } else {
        computerScore++;
        console.log(`Your ${humanChoice} loses to ${computerChoice}!`)
    }
}

function getComputerChoice() {
    // 1 in 3 chance, rock paper scissors
    var result = Math.random() * 3;
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
    var answer = prompt("Rock, paper, or scissors?").toLowerCase;
    while (!(answer === "rock" || answer === "paper" || answer === "scissors")) {
        answer = prompt("Please choce rock, paper, or scissors.").toLowerCase;
    }
}

// global variables

var humanScore = 0

var computerScore = 0



// --------------------------------------------------------------------------
// Tests for getComputerChoice():

// var a = 0;
// var b = 0;
// var c = 0;
// var d = 0;

// for (var i = 0; i < 2000; i++) {
//     switch (getComputerChoice()) {
//         case "rock":
//             a++;
//             break;
//         case "paper":
//             b++;
//             break;
//         case "scissors":
//             c++;
//             break;
//         default:
//             d++;
//     }    
// }

// console.log(`a is ${a}, b is ${b}, c is ${c}, d (should be 0) is ${d}`);
