//IMPORTANT: run node -i -e "$(< index.js)" to load the class OUTSIDE the node shell

const mongoose = require("mongoose");
//don't need to add the objects set to true like he does in the video
mongoose.connect('mongodb://localhost:27017/shopApp') //uses a try catch
        .then(() => {
            console.log("Connection open");
        })
        .catch(err => {
            console.log("error");
            console.log(err);
        })

    const productSchema = new mongoose.Schema({
        name:{
            type: String, 
            required: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        }, 
        onSale: {
            type: Boolean,
            default: false
        },
        categories: [String] //regular way to format
    })

    const foodSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number, 
            required: true
        }, 
        price: {
            type: Number,
            required: true
        }
    })

    // const Product = mongoose.model("Product", productSchema);
    // const bike = new Product({ name: "Bike Bell", price: 4, categories: ["Cycling, Safety"]});
    // bike.save()
    //     .then(data => {
    //     console.log("It worked!")
    //     console.log(data)
    // })
    //     .catch(e => {
    //     console.log(e)
    // })

    const Food = mongoose.model("Food", foodSchema); //creating the model, will be plural in the Mongo shell
    const snack = new Food({name: "Pringles", quantity: 10, price: 12});
    snack.save()
         .then(data => {
            console.log("It worked!");
            console.log(data);
         })
        .catch(e => {
            console.log(e);
        })
// Product.findOneAndUpdate({name: "Tire Pump"}, {price: 19.99}, { new: true, runValidators: true})
//         .then(data => {
//         console.log("It worked!")
//         console.log(data)
//     })
//         .catch(e => {
//         console.log(e)
//     })

// Validations are in place when you create something, but not when you update
 