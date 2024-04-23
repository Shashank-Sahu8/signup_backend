
import joi from "joi"

const userRegisterValidate=(req,res,next)=>{
    const schema=joi.object({
        fullname: joi.string().min(3).max(50).required(),
        email:joi.string().email().required(),
        password:joi.string().min(4).alphanum().required()
    });
    const {error,value}=schema.validate(req.body);
    if(error)
    {
        return res.status(400).json({message:"Bad request",error})
    }
next();
}
export {userRegisterValidate}