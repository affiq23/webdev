//IMPORTANT: run node -i -e "$(< index.js)" to load the class OUTSIDE the node shell

const mongoose = require("mongoose");
//don't need to add the objects set to true like he does in the video
mongoose.connect('mongodb://localhost:27017/movieApp') //uses a try catch
        .then(() => {
            console.log("Connection open");
        })
        .catch(err => {
            console.log("error");
            console.log(err);
        })

    // schema is like a class; model is like a class
    const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String
    });

    //this is a model; creates a collection called movies; model name is Movie
    const Movie = mongoose.model("Movie", movieSchema); 
    // need to call save here
    // const amadeus = new Movie({title: "Amadeus", year: 1986, score: 9.2, rating: "R"});
    // amadeus.save();

    // Movie.insertMany([
    //     {title: "Star Wars", year: 1974, score: 9.9, rating: "PG-13"},
    //     {title: "The Avengers", year: 2012, score: 8.7, rating: "PG-13"},
    //     {title: "Jurassic Park", year: 1994, score: 9.5, rating: "PG-13"}, 
    //     {title: "The X-Files", year: 1998, score: 9.0, rating: "PG-13"}
    // ]).then(data => {
    //     console.log("It worked")
    //     console.log(data)
    // })

    // to find in repl
    //Movie.find({}).then(data => console.log(data))



