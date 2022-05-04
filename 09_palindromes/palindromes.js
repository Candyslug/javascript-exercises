const palindromes = function () {
    let s = arguments[0];
    let first = "";
    let last = "";
    for (let i = 0; i < s.length; i++) {
        first += s[i];
    }
    for (let i = s.length-1; i >= 0; i--) {
        last += s[i];
    }
    console.log(first + " or " + last);
    return (first == last);
};

// Do not edit below this line
module.exports = palindromes;
