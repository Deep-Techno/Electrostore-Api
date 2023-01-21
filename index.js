const express =require('express')
const db=require('./database/db')
const {router} =require('./route/projectRoute')
require('dotenv').config()




const app=express();
app.use(express.json())
app.use('/',router);
app.listen(8080,()=>console.log("server1 is runing on port 8080"));