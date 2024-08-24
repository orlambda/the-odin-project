function isNumAlpha(c) {
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) {
        return true;
    }
    return false;
}

const palindromes = function (str) {
    let strA = "";
    let strB = "";
    for (let c of str) {
        if (isNumAlpha(c)) {
            strA = strA + c.toLowerCase();
            strB = c.toLowerCase() + strB;
        }
    }
    if (strA === strB) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
