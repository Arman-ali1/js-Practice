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
require("./db/conn");
// const Register = require("./models/registers");
const port = process.env.PORT || 3000;

// const static_path = path.join(__dirname,"./public");
// const template_path = path.join(__dirname,"./templates/views");
// const partials_path = path.join(__dirname,"./templates/partials");
//postman
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

//this can be used for html files
// app.use(express.static(static_path))
// this can be used for hbs files (which renders hbs files)
// app.set("view engine", "hbs");
// app.set("views",template_path);
// hbs.registerPartials(partials_path);
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

//login check
app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
})