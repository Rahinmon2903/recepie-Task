import mongoose from "mongoose"
import dotenv from "dotenv"


//configuration
dotenv.config();

//fun to coneect node.js and mongodb
const connectDB= async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected succesfully");
        
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}

export default connectDB;

