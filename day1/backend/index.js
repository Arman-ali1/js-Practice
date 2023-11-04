// const jokes=require("give-me-a-joke");
// // console.log(jokes.getRandomCNJoke());
// jokes.getRandomDadJoke (function(joke) {
//     console.log(joke);
// });
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const Register=require("./models/registers");
const { name } = require('ejs');
require("./db/conn");
const port = process.env.PORT || 3300;

app.set("view engine","ejs");

app.get('/',(req,res)=>{
    res.send("index")
});
app.get("/register",(req,res)=>{
    res.render("register");
});
// to create user database
app.post("/register",async(req,res)=>{
    // console.log("inter post method");
    try {
       
    //    if(password === rpassword){
           const registerBookings = new Register({
                
                    name : req.body.name
                    // email : req.body.email,
                    // password :req.body.password ,
                    // repeatpassword :req.body.repeatpassword ,

                
           })
           // to save in database
        const registered =  await registerBookings.save();
        // console.log("cdmjddddddddddddddddddddddddddddddddddddddddddddddd");
        res.status(514).render("register");
    //    }else{
        //    res.send("passwords are not matching");
    //    }

        
    } catch (error) {
        res.status(555).send(error);
    }
});
app.get("/login",(req,res)=>{
    res.render("print");
})
// ============================login============
app.post("/login", async (req, res) => {
    const username=await Register.findOne({});
    // console.log(username.name);
    // const t=document.querySelector('p');
    // t.innerHTML=username.name;
    let namess="Arman";
    // console.log(username.name);
    namess=username.name;
    res.render("print");
  });
// ============================end login========
//login check
app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
})