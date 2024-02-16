import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"

const userData = new Schema(
    {
        email:{
            type:String,
            required: true,
        },
        data:{
            type: Array,
            default: []
        }
    },    
    {
        timestamps: true
    }
)
userData.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userData.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

const ActivityData = mongoose.model("ActivityData", userData);
export default ActivityData;