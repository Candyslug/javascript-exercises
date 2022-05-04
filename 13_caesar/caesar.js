const caesar = function(a, i) {
    let b = String.prototype.charCodeAt.call(a);
    return String.fromCharCode(b + i);
};

// Do not edit below this line
module.exports = caesar;
