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
            required: true
        }, 
        onSale: {
            type: Boolean,
            default: false
        }
    })

    const Product = mongoose.model("Product", productSchema);
    const bike = new Product({ name: "Bike Helmet", price: 600});
    bike.save()
        .then(data => {
        console.log("It worked!")
        console.log(data)
    })
        .catch(e => {
        console.log(e)
    })
