// FS module
/*
console.log("Starting app.");

const fs = require("fs");

function appendFileCb(err) {

    console.log(err);
    if (err) {
        console.log("Unable to write to file");
    }
    console.log("test");

}

fs.appendFile("greetings.txt", "\nHello", appendFileCb);
*/
// OS modules

const os = require("os");

const user = os.cpus()

console.log(user);