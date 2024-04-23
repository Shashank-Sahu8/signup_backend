import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import bodyParser from "body-parser";
dotenv.config({ path: "./env" });
import {app} from "./app.js"
import { routes } from "./routs/index.js";
connectDB()
.then(()=>{
    app.use(bodyParser.json());
    app.use('/shashank',routes);
    app.listen(process.env.PORT || 8080,()=>{console.log("Server is running on PORT:",process.env.PORT)})

})
.catch((err)=>{console.log("connection check to mongoDB failed",err);})