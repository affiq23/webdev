const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "public"))); //making it an absolute path


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); //taking current directory where index.js is and appending views to it

app.get("/", (req, res) => {
    res.render("home") //no need for views
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if(data){
        //spreading object; allows you to access individual properties
    res.render("subreddit", { ...data }); //object
    }
    else {
        res.render("notfound", { subreddit })
    }

})

app.get("/cats", (req, res) => {
    const cats = [
        "Blue", "Lola", "Charlie", "Streaky", "Rocket"
    ]
    res.render("cats", { cats });
})

app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random", { num: num }); //key value pair; first num can be called in ejs file
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})