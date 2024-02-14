import mongoose,{Schema} from "mongoose";

const administratSchema = new Schema(
    {
        name: { 
            type: String,
            required: true 
        },
        password:{
            type: String,
            required: true
        },
        adminarray:{
            type: Array,
            default: [],
        },
    },
    {
        timestamps: true
    }
);

const Administrat = mongoose.model("Administrat", administratSchema);
export default Administrat;