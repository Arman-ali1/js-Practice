import  express  from "express";
import cors from 'cors';
import DBConn from "./db/DB.connection.js";
import userRegistration from "../backend/modules/Register.js";
// console.log(userRegistration);




const port=3300;
const app=express();
DBConn();


app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get("/",(req,res)=>{

    res.send("hello world");

})

app.post("/getUser", async (req,res)=>{
    const {val}=req.body
    console.log(val);

    try{
        const allData=await userRegistration.findOne({email:val})
        res.json(allData)
        // .then(res.allData)
        
    }
    catch{
        res.json("fail fetching data from database")

    }
})

app.get("/getUser", async (req,res)=>{
    // const {email}=req.body
    // console.log(email);

    try{
        const allData=await userRegistration.find({})
        res.json(allData)
        // .then(res.allData)
        
    }
    catch{
        res.json("fail fetching data from database")

    }
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

