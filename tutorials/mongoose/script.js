const mongoose = require("mongoose");
const User = require("./User") // calling it from User.js

mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("Connection open");
})
    .catch(err => {
        console.log("error");
        console.log(err);
    })

//const user1 = new User({name: "Kyle", age: 26});
//user1.save().then(() => console.log("User saved."))
