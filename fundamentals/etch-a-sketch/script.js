make_grid(16);
enable_input();

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
    makeAllCellsResponsive("black");
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

function enable_input() {
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(e.target);
        let n = Object.fromEntries(data.entries())
        make_grid(parseInt(n.Cells));
      }); 
}

function applyDefaultGridBehaviour () {
    // applyGridBehaviour((cell) => setCellColor(cell, "black;"));
}

function applyGridBehaviour (fn) {
    // const cells = document.querySelectorAll(".cell");
    // cells.forEach((cell) => cell.addEventListener('click', (cell) => fn(cell)));
}

function fillCell(cell, color) {
    console.log(color);
    cell.setAttribute("style", `background-color:${color}`);
}

function makeCellResponsive (cell, color) {
    cell.addEventListener('mouseenter', (e) => fillCell(cell, color))
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