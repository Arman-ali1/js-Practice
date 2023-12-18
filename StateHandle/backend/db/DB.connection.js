import mongoose from "mongoose";

function DBConn(){

    mongoose.connect("mongodb://localhost:27017/names")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect mongodb")
})

}
export default DBConn;


