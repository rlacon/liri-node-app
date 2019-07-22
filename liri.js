require("dotenv").config();

// fs.readFile("random.txt", "utf8", function (error, data) {
// })
var fs = require("fs");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var operand = process.argv[2];

// OMDB is working -----------------------------------------------------------------
var movieName = process.argv[2];
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
var song = process.argv[2];

// Spotify is working
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