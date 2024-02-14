import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
    {
        email: {
        type: String,
        required: true,
        },
        password: {
        type: String,
        required: true,
        },
        empId: {
            type: Number,
            required: true,
            },
        studentarray: {
            type: Array,
            default: [],
            }
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;