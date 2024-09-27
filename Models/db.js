const mongoose = require("mongoose");
require('dotenv').config({ path: 'MONGO_CONN' })
const mongo_url = process.env.MONGO_CONN;
 
mongoose.connect(mongo_url)
.then(()=>{
    console.log("mongoDb connection sucessfully..")
}).catch((err)=>{
    console.log("somthing went wrong in connection...",err);
})