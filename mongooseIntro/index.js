//IMPORTANT: run node -i -e "$(< index.js)" to load the class OUTSIDE the node shell

const mongoose = require("mongoose");
//don't need to add the objects set to true like he does in the video
mongoose.connect('mongodb://127.0.0.1:27017/moviesApp') //uses a try catch
    .then(() => {
        console.log("Connection open");
    })
    .catch(err => {
        console.log("error");
        console.log(err);
    })

    const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String
    });

    const Movie = mongoose.model("Movie", movieSchema); //this is a model; creates a collection called movies; model name is Movie
    // const amadeus = new Movie({ //creates an instance of Movie
    //     title: "Amadeus",
    //     year: 1982,
    //     score: 9.2,
    //     rating: "R"
    // })

    // Movie.insertMany([ //do not need to call save; only need to call save if you make a single instance
    //     { title: "Amelie", year: 2001, score: 8.3, rating: "R"},
    //     { title: "Alien", year: 1979, score: 8.1, rating: "R"},
    //     { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG"},
    //     { title: "Stand By Me", year: 1986, score: 8.6, rating: "R"}
    // ])
    // .then(data => {
    //     console.log("It worked!");
    //     console.log(data);
    // })
    // .catch(err => {
    //     console.log("error: " + err);
    // })

    //TO FIND: Movie.find({rating: "PG"}).then(data => console.log(data))