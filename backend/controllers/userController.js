import asyncHandler from 'express-async-handler'
import { Error } from 'mongoose';
import User from '../models/user.model.js';
import generateToken from '../utils/generateToken.js';

// authonticate a user when logging in
// auth user/set token
// route POST /api/users/auth
// access public
const authUser = asyncHandler(async (req,res) =>{
 const {email,password} = req.body;

 const user = await User.findOne({email})

 if (user &&  ( await user.matchPasswords)) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }


});


// register a new user
// route POST /api/users
// access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Create a new user instance (
  const user = await User.create({
    name,
    email,
    password // The pre-save hook will handle hashing the password
  });

  // Save the user and trigger the pre-save hook
  await user.save(); // Calling save will trigger the pre-save hook

  // Check if user is created successfully
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid user data");
  }
});



   // get user logout
// route POST /api/users/logout
// access public
const logoutUser =asyncHandler(async (req,res) =>{
    res.status(200).json({message:"Logout user"})
   });


   //   GET user profile
// route GET /api/users/profile
// access private

   const getUserProfile =asyncHandler(async (req,res) =>{

      const user = {
        _id:req.user._id,
        name:req.user.name,
        email: req.user.email

      }  


    res.status(200).json(user)
   });  

   // update user profile
// route PUT/api/users/profile
// access private

const updateuserProfile =asyncHandler(async (req,res) =>{
 const user = await User.findById(req.user._id );

 if(user){

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  if(req.body.password){
   user.password = req.body.password
  }
  const updateUser = await user.save();
  res.status(200).json({
    _id:updateUser._id,
    name:updateUser.name,
    email:updateUser.email,
  })

 }else{
  res.status(404);
  throw new Error('User not found')

 }


 });  


export {authUser,registerUser,logoutUser,getUserProfile,updateuserProfile};