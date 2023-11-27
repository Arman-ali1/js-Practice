
import collection from "./mongos.js";
import cors from 'cors';
import express from 'express';
const app=express();



app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.get("/",cors(),(req,res)=>{

})

app.post("/sendData", async(req,res)=>{
    const{name} =req.body
    // console.log(req)
    // console.log(req.body)
    try{
        await collection.insertMany([{name:name}])
        const allData=await collection.find({})
        res.json(allData)
    }
    catch{

    }
})

app.listen(8000,()=>{
    console.log("server start at 8000");
})