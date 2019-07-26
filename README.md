# liri-node-app

Liri Bot is an app that uses node.js to make requests to APIs for OMBD, Bands In Town, and Spotify to return JSON packages. This application runs entirely on command lines. 

Instructions:

Type "node liri.js", a case function term, and a form of media. The application makes a request to the server with an API key to return console-logged data.

Terms:

"concert-this" — Typing a band's name following this statement finds their most upcoming concert, the venue, its location, and the date of the event. Moment.js logic converts the date into a MM/DD/YYYY format.

"spotify-this-song" — Typing a song after this statement console logs the song name, its artist, the album name, and a preview URL to listen to a 30-second clip of it.

"movie-this" — Searching a movie name returns its title, release date, IMDB rating, Rotten Tomatoes rating, release country, language, plot, and actors that appeared in it. 

"do-what-it-says" — Reads the "random.txt" document in the same folder, splits the contents apart by the comma and converts it to string values, and searches its contents with whatever switch case matches.