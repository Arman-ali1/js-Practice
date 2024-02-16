// import { NextFunction, Request, Response } from "express";
import { User } from "../../Models/productdashbord/user.js";
import { asyncHandler } from "../../utils/ayncHandler.js";
// import { TryCatch } from "../middlewares/error.js";
// import ErrorHandler from "../utils/utility-class.js";
// import { asyncHandler } from "../../utils/ayncHandler.js";

const home=asyncHandler(async(req,res)=>{
  res.status(200).json({message:"Welcome to the home page"});
} );


 const newUser = asyncHandler(async (req,res,next) => {

    const { name, email, gender, _id, dob } = req.body;
    console.log(name, email, gender, _id, dob);
    let user = await User.findById(_id);

    if (user)
      return res.status(200).json({
        success: true,
        message: `Welcome, ${user.name}`,
      });
    const photo = "arman.png";
    if (!_id || !name || !email || !photo || !gender || !dob)
      return res.status(400).json({
        success: false,
        message: `Enter all fields`,
      });

    user = await User.create({
      name,
      email,
      photo,
      gender,
      _id,
      dob: new Date(dob),
    });

    return res.status(201).json({
      success: true,
      message: `Welcome, ${user.name}`,
    });
  }
);

 const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({});

  return res.status(200).json({
    success: true,
    users,
  });
});

 const getUser = asyncHandler(async (req, res) => {
  // const id = 1233;
  const id = req.params.id;
  console.log(id);
  const user = await User.findById(id);

  if (!user) return res.status(400).json({
    success: false,
    "message":"Invalid User/Id",
  });
  return res.status(200).json({
    success: true,
    user,
  });
});

const deleteUser = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  // const id = 12333;
  const user = await User.findById(id);

  if (!user) return res.status(400).json({
    success: false,
    "message":"Invalid User/Id",
  });

  await user.deleteOne();

  return res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});

export {home,newUser,getAllUsers,getUser,deleteUser}
