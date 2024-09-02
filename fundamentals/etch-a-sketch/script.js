let currentInkEffect = "black-ink";
let currentCells = 16;

make_grid(currentCells, currentInkEffect);
enable_form();
enable_buttons();

function make_grid(n) {
    if (!checkCellRange(n)) {return}
    clear_grid();
    const grid = document.querySelector(".grid");
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < n; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    makeAllCellsResponsive("black", currentInkEffect);
}

function checkCellRange(n) {
    // Only accept numbers from 1 to 100
    // Don't clear grid for invalid input
    const min = 1;
    const max = 100;
    if (!Number.isInteger(n) || n < min || n > max) {
        // TODO: Output to error div
        console.log("ERROR!");
        return false;
    }
    return true;
}

function clear_grid() {
    const grid = document.querySelector(".grid");
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
}

function enable_form() {
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(e.target);
        let n = Object.fromEntries(data.entries())
        make_grid(parseInt(n.Cells));
      }); 
}

function enable_buttons() {
    const buttons = Array.from(document.querySelector(".buttons").children);
    buttons.forEach((button) => button.addEventListener('click', () => {
        currentInkEffect = button.id;

    }));
}

function updateCellEffect(cell, color) {
    switch (currentInkEffect) {
        case "black-ink":
            cell.setAttribute("style", `background-color:${color}`);
            break;
        case "rainbow-ink":
            color = randomColor();
            cell.setAttribute("style", `background-color:${color}`);
            break;
    }
}

function randomColor() {
    // REFACTOR: write function getRandomElement(array) or similar
    var result = Math.random() * 10;
    if (result >= 9) {
        return "blue";
    }
    else if (result >= 8) {
        return "green";
    }
    else if (result >= 7) {
        return "tomato";
    }
    else if (result >= 6) {
        return "indigo";
    }
    else if (result >= 5) {
        return "cornsilk";
    }
    else if (result >= 4) {
        return "crimson";
    }
    else if (result >= 3) {
        return "aquamarine";
    }
    else if (result >= 2) {
        return "pink";
    }
    else if (result >= 1) {
        return "magenta";
    } else {
        return "cyan";
    }   
}

function makeCellResponsive (cell, color, inkEffect) {
    cell.addEventListener('mouseenter', (e) => updateCellEffect(cell, color));
}

function makeAllCellsResponsive(color) {
    removeAllEventListeners();
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => makeCellResponsive(cell, color));
}

function removeAllEventListeners() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => removeEventListeners(cell));    
}

function removeEventListeners(cell) {
    // WARNING: also clears event listeners on child nodes
    newCell = cell.cloneNode(true);
    cell.parentNode.replaceChild(newCell, cell);
}