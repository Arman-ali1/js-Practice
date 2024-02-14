import mongoose,{Schema} from "mongoose";

const employeeSchema = new Schema(
    {
        Id: { 
            type: Number,
            required: true 
        },
        email: { 
            type: String,
            required: true 
        },
        password:{
            type: String,
            required: true
        },
        emparray:{
            type: Array,
            default: [],
        },
    },
    {
        timestamps: true
    }
);

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;