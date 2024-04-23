import express from "express"
import { userRegisterValidate } from "../utils/userValidation.js";
import { Register } from "../controller/index.js";

const routes=express.Router();

routes.post('/register',userRegisterValidate,Register.registerUser);

//routes.post('/login',Register.loginUser);

export{routes}