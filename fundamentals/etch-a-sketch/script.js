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


    // calculate the width of the grid
    // calculate the width of the cells
    // DECIDE: round total grid size down to total of cells
        // OR: divide excess and add to cells (grid always same width)
        // OR: unnecessary because flexbox?!
    // make nodes: rows - append to grid
        // make nodes: cells - append to row
    
}

function clear_grid() {
    // For each row
        // For each cell
            // Remove cell node
        // Remove row node
}

function enable_input() {
    // Add event listener to button
        // make_grid(button.value)
}