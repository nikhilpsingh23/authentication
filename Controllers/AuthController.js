const userModel =require("../Models/user")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        const User= await userModel.findOne({email});

        if (User){
            res.status(409)
            .json({message:"user already exist, you can login", success:false});
        }
        const NewUser= new userModel({name,email,password});
        NewUser.password=await bcrypt.hash(password,10);
        await NewUser.save();
        res.status(201)
        .json({message:"signup successfully.", success:true})
    } catch (error) {
        res.status(500)
        .json({message:"somethin wrong...."})
        
    }
}
const login = async (req,res)=>{
    try {
        const {email, password}=req.body;
        const User= await userModel.findOne({email });
        const errMsg="auth failed email and password wrong ";
        if(!User){
            res.status(403)
            .json({message: errMsg, success:false});
        }

        const ispassEqual= await bcrypt.compare(password, User.password);
        if(!ispassEqual){
            res.status(403)
            .json({message:errMsg,success:false})
        }

        const jwttoken= jwt.sign({email:User.email , _id:User._id},
        process.env.JWT_SECRET,
        {expiresIn:'24h'} 
        )
        res.status(200)
        .json({message:"login success",success:true,jwttoken,email,name:User.name});

    } catch (error) {
        res.status(500)
        .json({message:"somethin wrong...."})
    } 
}

module.exports={signup, login}