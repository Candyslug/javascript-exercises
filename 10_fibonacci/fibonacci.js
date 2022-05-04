const fibonacci = function() {
    let n = arguments[0];
    console.log("-> " + n);
    let term1 = 0;
    let term2 = 1;
    let nextTerm = term1 + term2;
    for (let i = 2; i < n; i++) {
        term1 = term2;
        term2 = nextTerm;
        nextTerm = term1 + term2;
    }
    return (nextTerm);
};

// Do not edit below this line
module.exports = fibonacci;
