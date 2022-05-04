const calcAge = function (yob, yod) {
    return yod - yob;
}

const findTheOldest = function (data) {

    let a = calcAge(
        data[0]["yearOfBirth"],
        data[0]["yearOfDeath"]
    );

    let n = 0;
    for (var i = 0; i < data.length; i++) {
        if (calcAge(
                data[i]["yearOfBirth"],
                data[i]["yearOfDeath"]) > a) {
            a = calcAge(
                data[i]["yearOfBirth"],
                data[i]["yearOfDeath"]);
            n = i;
        }
    }
    return data[n];

};

// Do not edit below this line
module.exports = findTheOldest;