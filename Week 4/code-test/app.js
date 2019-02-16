const union = require("lodash/union");

// console.log(union([1,2,3], [1,4,5]));

// console.log(process.argv);

const params = process.argv.slice(2);

// console.log(params);

if(params[0] === "add") {
    console.log(parseInt(params[1]) + parseInt(params[2]));
}
