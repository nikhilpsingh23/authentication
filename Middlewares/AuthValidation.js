const Joi = require("joi");

const SignupValidation = (req,res,next) =>{
    const obj = Joi.object({
 
        name: Joi.string().min(4).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(100).required(),
    });

    const { error} = obj.validate(req.body);
    if(error){
        res.status(400)
        .json({message:"bad response", error});
    }
    next();
}

const loginValidation = (req,res, next)=>{
    const obj= Joi.object({
        email: Joi.string().email().required(),
        password:Joi.string().min(5).max(100).required()
    })

    const {error} = obj.validate(req.body);
    if(error){
        res.status(400)
        .json({message:"bad response", error});
    }
    next();
}

module.exports={SignupValidation, loginValidation};