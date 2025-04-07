import express from "express";
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/post.routes.js'
import notificationRoutes from './routes/notification.routes.js'
import dotenv from 'dotenv'
import  connectMongoDB  from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from 'cloudinary';

dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET , 
})

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json({limit:"100mb"})); //to parse req.body //limit shouldn't be too high to prevent DOS
app.use(express.urlencoded({extended: true})) // to parse from data(urlencoded)
app.use(cookieParser())

app.use('/api/auth', authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/posts',postRoutes)
app.use('/api/notifications', notificationRoutes)


app.listen(port, ()=>{
    connectMongoDB();
    console.log("Server running at http://localhost:"+port)
})