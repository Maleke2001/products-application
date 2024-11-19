import express from 'express';
import Product from '../models/products.model.js';

import { createProduct, deleteProducts, getProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

// at first it was app now we replace with the router

router.get("/",getProducts )
// after using postman we comes here

// POST route to create a product
router.post("/", createProduct);
router.put("/:id",updateProduct);

// we are creating another end points which is delete
// to be able to delete we must pass by id
router.delete("/:id",deleteProducts);

export default router;
