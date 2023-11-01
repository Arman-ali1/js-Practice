const express=require("express");
const port=3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test1')
  .then(() => console.log('Database Connected!'));
const app=express();
app.use(express.json());
const Detail=new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      required:true
    }
});
const User=new mongoose.model("User",Detail);
 app.post("/register",async(req,res)=>{
      
 })
  app.get("/",(req,res)=>{
    console.log("Hello World");
    res.send("Hello World");
  })
  app.get("/arman",(req,res)=>{
    console.log("Hello World");
    res.send("Hello World Arman");
  })

  app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
  })