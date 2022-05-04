const removeFromArray = function() {

    let data = arguments[0];
    console.log("->>>>> " + data);
    let vals = Array.prototype.slice.call(arguments, 1);

    for (let i = 0; i < vals.length; i++) {
        console.log("->target: " + vals[i]);
        for (let a = 0; a < data.length; a++) {
            if (vals[i] == data[a]) {
                console.log("matching at index:" + a);
                data.splice(a, 1);
            }
        }
    }

    console.log("->>> " + data);
    return data;
};

// Do not edit below this line
module.exports = removeFromArray;
