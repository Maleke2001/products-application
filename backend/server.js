import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';
import Product from './models/products.model.js';
import mongoose from 'mongoose';
import { notFound,errorHandle } from './middleware/errorMiddleware.js';
import productRoutes from './routes/products.routes.js';  // Import route
import userRoutes from './routes/userRoutes.js';



// we use it when you want to call the connection string

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());


app.use('/api/users',userRoutes)

 const PORT = process.env.PORT


// it allows us to use accept the JSON data in the req.body



app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandle);

// Connect to DB and then start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started at http://localhost:" + PORT);
    });
}).catch((error) => {
    console.error("Error in database connection", error.message);
});

// app.listen(5000, ()=>{
    // onnectDB()
    // console.logconsole.log("Server started at http://localhost:5000");
    // )})

