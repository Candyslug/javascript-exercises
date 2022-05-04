const getTheTitles = function(data) {
    console.log("->" + data);
    console.log(data[0]["title"]);
    let ret = []
    for (let i = 0; i < data.length; i++) {
        ret.push(data[i]["title"]);
    }
    
    return ret;
};

// Do not edit below this line
module.exports = getTheTitles;
