const express = require("express"); //npm packagae
const app = express(); // executing express
const port = 3000;

// app.use((req, res) => { //req/res are made by Express and passed into callback; parsed HTTP request becomes req
//     console.log("We got a new request!");
//     res.send("Hello, got request");
// });

// response is object made by Express
app.get("/", (req, res) => {
    res.send("This is the home page.");
});

app.get("/r/:subreddit/:postID", (req, res) => { //colon indicates a variable
    const { subreddit, postID } = req.params; // have to do it this way because req.params is an objectg
    //console.log(req.params); //prints the parameter of the subreddit
    res.send(`<h1>Viewing the ${postID} id on the ${subreddit} subreddit.`);
})


app.get("/cats", (req, res) => {
    res.send("MEOW!");
});

app.post("/cats", (req, res) => {
    res.send("Posting to cats");
})

app.get("/dogs", (req, res) => {
    res.send("WOOF!");
});


app.get("*", (req, res) => { //star means everything, has to be at the end
    res.send("Not sure what you're looking for...");
});


app.listen(port, () => { //connecting to port
    console.log("LISTENING ON PORT 3000");
});