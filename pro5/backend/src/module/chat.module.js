import mongoose ,{Schema} from "mongoose";

const chatSchema=new Schema({
    author:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    
    },
    {
    timestamps:true,
    }
);

const Chat=mongoose.model("Chat",chatSchema);
export default Chat;