const fibonacci = function(n) {
    n = parseInt(n);
    if (n === 0) {
        return 0;
    }
    if (n < 0) {
        return "OOPS";
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    let a = 1;
    let b = 1;
    let c = a + b;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
