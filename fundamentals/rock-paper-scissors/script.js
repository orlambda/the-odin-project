playGame();

function playGame() {

    const scores = {
        human: 0,
        computer: 0,
    };

    while (scores.human < 5 && scores.computer < 5)
        {
            playRound(getHumanChoice(), getComputerChoice(), scores)
        }
    let finalScoreNotification = `You scored ${scores.human} vs ${scores.computer}. `;
    if (scores.human > scores.computer) {
        finalScoreNotification += "Well done!";
    } else if (scores.computer > scores.human) {
        finalScoreNotification += "Too bad!";
    } else {
        finalScoreNotification += "Could be worse I guess!";
    }
    const finalResultDiv = document.querySelector(".finalResult");
    finalResultDiv.innerText = finalScoreNotification;
}        

function playRound(humanChoice, computerChoice, scores) {
    
    let roundScoreNotification = "";
    if (humanChoice === computerChoice) {
        scores.human++;
        scores.computer++;
        roundScoreNotification = `Both played ${humanChoice}! Tie.`;
    } else if ((humanChoice === "rock" && computerChoice === "scissors")
            || (humanChoice === "paper" && computerChoice === "rock")
            || (humanChoice === "scissors" && computerChoice === "paper")) {
        scores.human++;
        roundScoreNotification = `Your ${humanChoice} beats ${computerChoice}!`;
    } else {
        scores.computer++;
        roundScoreNotification = `Your ${humanChoice} loses to ${computerChoice}!`;
    }
    const roundResultDiv = document.querySelector(".roundResult");
    roundResultDiv.innerText = roundScoreNotification;
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
    var answer = prompt("Rock, paper, or scissors?").toLowerCase();
    while (!(answer === "rock" || answer === "paper" || answer === "scissors")) {
        answer = prompt("Please choose rock, paper, or scissors.").toLowerCase();
    }
    return answer;
}

// Buttons

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    const answer = button.innerText;
    console.log(answer);
    // button.addEventListener((click) => {
    //     const answer = button.innerText.toLowerCase();
    //     console.log(`Clicked on ${answer}`);
    })

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
