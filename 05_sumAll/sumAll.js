const sumAll = function() {
    let ret = 0;
    
    let a = arguments[0];
    let b = arguments[1];

    for (let i = a; i <= b; i++) {
        ret += i;
    }
    return ret;

};

// Do not edit below this line
module.exports = sumAll;
