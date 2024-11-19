import mongoose from "mongoose";

// Firstly, we need to create a schema
// Inside the object is what the product is gonna have eg name, price
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true // Created at, updated at
});

// Depending on our schema we must create our model
const Product = mongoose.model('Product', productSchema);

export default Product;
// We export so that we can use it in different files
