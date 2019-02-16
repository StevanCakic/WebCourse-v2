// Jedan nacin exportovanja paketa

// console.log(module);

/*
const a = 5;

module.exports.age = 25; 

module.exports.myDateTime = function () {
    return Date();
};
*/

// Drugi nacin

const age = 25;

function myDateTime() {
    return Date();
}

module.exports = {
    age,
    myDateTime
}

// console.log(module);