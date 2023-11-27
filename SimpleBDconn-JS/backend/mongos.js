import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/names")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect mongodb")
})

const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
const collection=mongoose.model("collections",newSchema)
export default collection;