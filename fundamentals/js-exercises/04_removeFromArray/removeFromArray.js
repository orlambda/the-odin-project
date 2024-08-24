const removeFromArray = function(arr, ...vals) {
    for (let v of vals) {
        while (true) {
            i = arr.indexOf(v);
            if (i >= 0) {
                arr.splice(i, 1);
            } else {
                break;
            }
        }
    }
    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;