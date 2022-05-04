const reverseString = function(s) {
    let a = "";
    for (var i = s.length-1; i >= 0; i--) {
        a += s[i];
    }
    return a;
};

// Do not edit below this line
module.exports = reverseString;
