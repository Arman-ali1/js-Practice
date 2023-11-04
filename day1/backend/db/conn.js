const mongoose = require('mongoose');
const url="mongodb+srv://armnsrn1732000:Ak12345@cluster0.rfa8ypo.mongodb.net/names";
const url2="mongodb://localhost:27017/names";
mongoose.connect( url2,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
})