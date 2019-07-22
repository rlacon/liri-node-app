require("dotenv").config();
fs.readFile("random.txt", "utf8", function (error, data) {

var fs = require("fs");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var operand = process.argv[2];



// Do a switch statement to tell what input the user added like the movie activity

// Look at OMDB example
// Look at calculator activity
    switch (operator) {
        case "movie-this":
            // Do API call here
            
