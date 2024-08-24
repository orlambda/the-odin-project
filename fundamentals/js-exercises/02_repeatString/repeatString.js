const repeatString = function(str, j) {
    if (j < 0) {
        return "ERROR";
    }
    output = "";
    for (var i = 0; i < j; i++) {
        output += str;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;