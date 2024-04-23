import mongoose from "mongoose";

import{ DB_NAME }from "../constants.js"

const connectDB=async()=>{
    try{
        const connectioninstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`MongoDB connected ${connectioninstance.connection.host}`)
    }catch(error){
        console.log("Mongo DB connection error",error);
        process.exit(1)
    }
}

export default connectDB;