import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected:', conn.connection.host)
    } catch (error) {
        console.log('ERROR CONNECTION TO MONGODB:',error)
        process.exit(1)
    }
}

export default connectMongoDB;