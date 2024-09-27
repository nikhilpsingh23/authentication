const express = require('express');
const app=express();
const bodyParser =require("body-parser");
const cors =require('cors');

require('dotenv').config();
require("./Models/db")
const AuthRoutes =require("./Routes/AuthRoutes")
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRoutes)

app.get('/check',(req,res)=>{
    res.send("hi this is nikhil");
})
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})