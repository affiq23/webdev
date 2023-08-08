const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true })); //parses incoming requests with URL encoded payloads
app.use(express.json()); //parses incoming requests with JSON payloads
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
    {
        username: "Todd",
        comment: "That is so funny"
    },
    {
        username: "Skyler",
        comment: "I like to go birdwatching"
    },
    {
        username: "Sk8terBoi",
        comment: "Plz delete your account Todd"
    },
    {
        username: "slashingcove018",
        comment: "I like to watch movies"
    }
]

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments }); //have to pass comments through in order to use it in the ejs file
})

app.get("/tacos", (req, res) => {
    res.send("GET /tacos");
})

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Here are your ${qty} ${meat} tacos!`);
})

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})