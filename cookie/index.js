import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"

const app=express();

app.use(cors())

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
// app.use(express.static("public"))
app.use(cookieParser())

app.get("/",(req,res)=>{

   
    res.send("Hello  World");
}   
);
app.get("/name",(req,res)=>{

    res.cookie("arman","arman-ali-khan-seond");
    res.send("Hello name cookie");
}   
);

app.listen(3000,()=>{
    console.log("Server is running at port no 3000");
}
);