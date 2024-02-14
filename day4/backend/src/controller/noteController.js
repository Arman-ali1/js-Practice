import { asyncHandler } from "../utils/ayncHandler.js";
import Student from "../Models/studentSchema.js";
import Employee from "../Models/employeeSchema.js";
import Administrat from "../Models/administratSchema.js";
// import Employee from "../Models/employeeSchema.js";
// import Administrat from "../Models/administratSchema.js";



const createStudent=asyncHandler(async(req,res)=>{
  const {email,pass,empId}=req.body;
  console.log(email,pass,empId);
  try {
    const newStudent = new Student({
      email:email,
      password:pass,
      empId
      // { $push: { activity: activity} }
    })
    await newStudent.save();
    res.status(201).json({message:"User created successfully",id:newStudent._id});
  } catch (error) {
    res.status(500).json({message:"Internal server error"});
  }

  
})

const getStudents = async (req, res) =>{
    const{email}=req.body;
    const students = await Student.findOne({email});
    res.status(200).json(students);
}

const studentUpdate=asyncHandler(async(req,res)=>{
  const {email,data}=req.body;
  console.log(email,data);
  try {
    const student1 = await Student.findOne({email});
    if(!student1){
      throw new Error("No user found");
    }
    await Student.updateOne({email},{$push:{studentarray:data}},{new:true});
    const student2 = await Student.findOne({email});
    res.status(201).json({message:"Data updated succesfully",student2});
  } catch (error) {
    res.status(404).json({message:error.message});
  }
})

const employeeUpdate=asyncHandler(async(req,res)=>{
  const {email,data}=req.body;
  try {
    const employee1 = await Employee.findOne({email});
    if(!employee1){
      throw new Error("No user found");
    }
    await Employee.updateOne({email},{$push:{emparray:data}});
    res.status(201).json({message:"Data updated succesfully"});
  } catch (error) {
    res.status(404).json({message:error.message});
  }
})

const administrationUpdate=asyncHandler(async(req,res)=>{
  const {email,data}=req.body;
  try {
    const administration1 = await Administrat.findOne({email});
    if(!administration1){
      throw new Error("Admin does not exist!");
    }
    await Administrat.updateOne({email},{$push:{administrationarray:data}});
    res.status(201).json({message:'Data updated to admin profile'
    });
  } catch (error) {
    res.status(400).json({message: error.message});
  }
})


const createEmployee=asyncHandler(async(req,res)=>{
  const {email,pass,Id}=req.body;
  console.log(email,pass,Id);
  try {
    const newEmployee = new Employee({
        email,
        password : pass,
        Id
    });
    await newEmployee.save()
    res.status(201).json({message:'Employee added'});
  } catch (error) {
    res.status(500).json({message:"Internal server error"});
  }
})


const getEmployees = asyncHandler(async (req, res) => {
  const{email}=req.body;
  const employees = await Employee.findOne({email});
  res.status(200).json(employees);
});

const createAdministrat=asyncHandler(async(req,res)=>{
  const {email,pass,data}=req.body;
  try {
    const newAdministrat = new Administrat({
        email,
        password : pass,
        data
    });
    await newAdministrat.save()
    res.status(201).json({message:'Administrat added'});
  } catch (error) {
    res.status(500).json({message:"Internal server error"});
  }

})
const getAdministrat = asyncHandler(async (req, res) =>{
  const{email}=req.body;
  const administrat = await Administrat.findOne(email);
  res.status(200).json(administrat);
  
});
const createNote = asyncHandler(async (req,res)=>{       
})
//dashbpard============getCurrentUser===========dashboard===
const getCurrentUser = asyncHandler(async (req,res)=>{
    return res
    .status(200)
    .json(req.user)
})
 
export {createNote,getCurrentUser,createStudent,createEmployee,createAdministrat,getStudents,getEmployees,getAdministrat,studentUpdate,employeeUpdate,administrationUpdate}



// app.post('/update-note', async(req, res) => {
//     const {_id,updateField,flage} = req.body
//     console.log(_id);
//     console.log(updateField);
//     console.log(flage);
//     // if(!updateField) {
//     //     return res.status(400).json({msg: 'Please enter all fields'})
//     // }
//     if(flage){
//          await Note.findByIdAndUpdate(_id, {
//             $set: {
//                 title: updateField
//             }
//         },
//         {
//             new: true
//         }
//         )
//     }
//     else{
//           await Note.findByIdAndUpdate(_id, {
//             $set: {
//                 content: updateField
//             }
//         },
//         {
//             new: true
//         }
//         )

//     }
    
//     res.json(_id)
// }
// )


 