import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"

const userDash = new Schema(
    {
        username:{
            type:String,
            required: true,
        },
        contact:{
            type:String,
            required: true,
        },
        name:{
            type:String,
            required: true,
        },
        email:{
            type:String,
            required: true,
        },
        password:{
            type:String,
            required: true,
        },
        
        activity: {
            type: Array,
            default: []
        }
        
    },
    {
        timestamps: true
    }
)
userDash.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userDash.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

const Dashboard = mongoose.model("Dashboard", userDash);
export default Dashboard;