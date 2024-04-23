    
    //validate req.body
    //create mongoDB user model
    //password encryption
    //save data to mongoDB
    //return res to client

import User from "../models/user.model.js"
import bcrypt from "bcrypt";

const Register={

    registerUser:async(req,res)=>{
        const user=new User(req.body);
        user.password=await bcrypt.hash(req.body.password,10)
        try{
            const response=await user.save();
            response.password=undefined;
            return res.status(201).json({message:"success",data:res});
        }catch(err){
            return res.status(500).json({message:"error",err})
        }
    },

    
    loginUser:(req,res)=>{
        res.send("ls")
    }

}
export {Register};