playGame();

function playGame() {

    const scores = {
        human: 0,
        computer: 0,
    };
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const answer = button.innerText.toLowerCase();
            playRound(answer, getComputerChoice(), scores);
        });
    })
}

function playRound(humanChoice, computerChoice, scores) {
    if (scores.human >= 5 || scores.computer >= 5) {
        return;
    }
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
    if (scores.human >= 5 || scores.computer >= 5) {
        showFinalScores(scores);
        disableButtons();
    } else {
        showCurrentScores(scores);
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

// TODO: move anonymous function to a named function to allow removeEventListener, or delete disableButtons().
function disableButtons() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.removeEventListener("click");
    })
}

function showCurrentScores(scores) {
    let currentScoreNotification = `You: ${scores.human}, Computer: ${scores.computer}`;
    const currentResultDiv = document.querySelector(".currentResult");
    currentResultDiv.innerText = currentScoreNotification;
}

function showFinalScores(scores) {
    const currentResultDiv = document.querySelector(".currentResult");
    currentResultDiv.innerText = "";
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
