const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid} = require("uuid");
const methodOverride  = require("method-override");
uuid();

app.use(express.urlencoded({ extended: true })); //parses incoming requests with URL encoded payloads
app.use(express.json()); //parses incoming requests with JSON payloads
app.use(methodOverride("_method")); //have to use in order to send DELETE and PATCH requests
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


let comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "That is so funny"
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: "I like to go birdwatching"
    },
    {
        id: uuid(),
        username: "Sk8terBoi",
        comment: "Plz delete your account Todd"
    },
    {
        id: uuid(),
        username: "affiq23",
        comment: "I like to watch movies"
    }
]

// CRUD - this is the READ portion; reading all the comments
app.get("/comments", (req, res) => {
    res.render("comments/index", { comments }); //have to pass comments through in order to use it in the ejs file
});

// we need two routes: GET route is to give client the form; POST request sends the data to diff route where it is added to comments array
app.get("/comments/new", (req, res) => {
    res.render("comments/new");
});

app.post("/comments", (req, res) => {
    const { username, comment } = req.body; //destructuring the object
    comments.push({ username, comment, id: uuid()}); //adds it to the array
    res.redirect("/comments"); //redirects as a GET
});

app.get("/comments/:id", (req, res) => {
    const id = req.params.id;
    const comment = comments.find(c => c.id === id); //to find the id in the comment
    res.render("comments/show", { comment })
})

app.get("/comments/:id", (req, res) => {
    const { id }  = req.params;
    const comment = comments.find(c => c.id === id); //to find the id in the comment
    res.render("comments/show", { comment })
})

app.get("/comments/:id/edit", (req, res) => {
    const { id }  = req.params; //this is destructuring the object
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", { comment });
})

//PATCH REQUEST: updating something to an existing resouce
app.patch("/comments/:id", (req, res) => {
    const id = req.params.id; //taking id from the URL
    const newCommentText = req.body.comment; //whatever was sent in the payload
    const foundComment = comments.find(c => c.id === id); //looking for original comment with id
    foundComment.comment = newCommentText; //update comment property
    res.redirect("/comments");
})

app.delete("/comments/:id", (req, res) => {
    const id = req.params.id;
    //c.id is the comment that the array is iterating through; id by itself is the id in the path
    comments = comments.filter(c => c.id !== id); //for that comment, that id is not equal to the id in the route; returns a new array
    res.redirect("/comments");
});


app.listen(3000, () => {
    console.log("Listening on port 3000...");
})