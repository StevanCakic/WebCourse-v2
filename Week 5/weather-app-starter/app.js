const yargs = require("yargs");
const axios = require("axios");

const addressCommand = {
    demand: true,
    alias: "address",
    describe: "Address to fetch weather for",
    string: true //parse adress value to string
}

const argv = yargs
    .options({
        a: addressCommand
    })
    .help()
    .alias("help", "h")
    .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBclVRrc8KvXbAWNYjLYOV_CA3k0YR9XP4`;

// TODO