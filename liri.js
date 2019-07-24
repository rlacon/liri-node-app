require("dotenv").config();
var fs = require("fs");
var moment = require('moment');
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var song = process.argv[2];
var operand = process.argv[2];

// Bands in Town -----------------------------------------------------------------
var getMeBands = function (artist) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"; 
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            if (response.data[0]) {
                console.log("Venue name: " + response.data[0].venue.name);
                console.log("Venue location: " + response.data[0].venue.city + ", " + response.data[0].venue.region);
                console.log("Date of event (MM/DD/YYYY): " + moment(response.data[0].datetime).format('MM DD YYYY'));
            }
        });
}

// OMDB -----------------------------------------------------------------
var getMeMovie = function (movieName) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            console.log(response);
            if (response) {
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            }
        });
}

// Spotify -----------------------------------------------------------------

var getMeSpotify = function(song) {
spotify
    .search({ type: 'track', query: song, limit: 1 })
    .then(function (response) {
        // console.log(response.tracks.items);
        // console.log(response.tracks.items[0]);
        for (i = 0; i < response.tracks.items.length; i++) {
            console.log("Song name: " + response.tracks.items[i].name);
            console.log("Artists: " + response.tracks.items[i].artists[0].name);
            console.log("Album name: " + response.tracks.items[i].album.name);
            console.log("Preview URL: " + response.tracks.items[i].preview_url);
            // * If no song is provided then your program will default to "The Sign" by Ace of Base.
        }
    })
    .catch(function (err) {
        console.log(err);
    });
}

var pick = function (caseData, functionData) {
    switch (caseData) {
        case "concert-this":
            getMeBands(functionData);
            break;
        case "spotify-this-song":
            getMeSpotify(functionData);
            break;
        case "movie-this":
            getMeMovie(functionData);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("LIRI doesn't know that");
    }
};

// Function which takes in command line arguments and executes correct function accordingly
var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
};

var doWhatItSays = function() {
    // 1) Open random.txt
    fs.readFile("random.txt", "utf8", function (error, data) {
        if(error) {
            console.log(error);
        } else {
            console.log("data: " + data);
            // 2) Split data by comma
            var command = data.split(",");
            // 3) Run the command
            pick(command[0], command[1]);
        }
    })
}

// MAIN PROCESS
// =====================================
runThis(process.argv[2], process.argv.slice(3).join(" "));