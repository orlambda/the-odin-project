make_grid(16);
enable_input();

function make_grid(n) {
    // Only accept numbers from 1 to 100
    // Don't clear grid for invalid input
    const min = 1;
    const max = 100;
    if (!Number.isInteger(n) || n < min || n > max) {
        // TODO: Output to error div
        console.log("ERROR!");
        return
    }
    clear_grid();
    const grid = document.querySelector(".grid");
    for (let i = 0; i < n; i++) {
        console.log("making a row");
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < n; j++) {
            console.log("making a cell!");
            const cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }    
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