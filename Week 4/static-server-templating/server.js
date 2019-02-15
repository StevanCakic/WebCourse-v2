const fs = require("fs");

const express = require("express");
const hbs = require("hbs");

const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("screamIt", (text) => {
    console.log(text);
    return text.toUpperCase();
})

app.get("/", (req, res) => {

})

app.get("/about", (req, res) => {

})

app.get("/help", (req, res) => {

})

// za heroku
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});