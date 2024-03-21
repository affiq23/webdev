const mongoose = require("mongoose");

// schema is like a class; model is like an object
const userSchema = new mongoose.SchemaType({
    name: String,
    age: Number
})

// created a new model using our schema for userSchema
module.exports = mongoose.mode("User", userSchema)