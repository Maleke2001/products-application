import Product from '../models/products.model.js';
import mongoose from 'mongoose';

export const getProducts =  async(req,res) =>{

    try {
        const products = await Product.find({})
        res.status(200).json({success:true, data: products})
        
    } catch (error) {
      console.log("error in fetching products:",error.message)  
      res.status(404).json({success:true, message:"server error"})
    }
}


export const createProduct  = async (req, res) => {
    const product = req.body;
    // this is what the user will pass
    // user will send this data
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "please provide the field" });
    }
    // 1st product comes from the model and the one in the bracket comes from the user
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error("error in create product:", message.error);
        res.status(500).json({ success: false, message: "server error" });
    }
};


export const updateProduct = async (req, res) => {
    const { id } = req.params;

    // this is what is what the user is going to update
    const product = req.body;

    // if it is not a valid id that a user is sending, return this message
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid product ID" });
    }

    try {
        // update the Id, the fields of the product = product
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.log("There was an error in updating the product:", error);  // fixed error logging
        res.status(500).json({ success: false, message: "Failed to update the product" });
    }
};


export const deleteProducts =  async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid product ID" });
    }

    
    try {
                       
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product Deleted" });
    } catch (error) {
        console.log("Error in deleting the product:", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
}