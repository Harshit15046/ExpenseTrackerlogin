// The Controller acts as an intermediary between the Model and the View. 
// It receives user input from the View, processes it, 
// and interacts with the Model to update the data accordingly



//const User = require('../Models/users');
const UserData = require('../Models/users');
const express = require("express");
const router = express.Router();

 const signup= async (req, res)=> {
    console.log(req.body);
    try {
        const {name,email,password} =req.body;
        console.log('email',email)

        if(name == undefined || name.length ===0 || email == null || email.length ===0 || password ==null || password.length ===0)
            {
               return res.status(400).json({err: "Something is missing"})
            }

            await UserData.create({name,email,password})
            res.status(201).json({message: 'Successfully create new user'})

        }
        catch(err)
        {
            res.status(500).json(err);
        }
    }
     const login=async (req,res)=>
     {
        console.log(req.body);
        try{
        const{email,password}=req.body;
        console.log(password);
        const user=await UserData.findAll({where : {email}})
            if(user.length>0){
                if(user[0].password ===password){
                    res.status(200).json({success: true,message:"User login Succesfully"})
                }
                else{
                    return res.status(400).json({success:false,message:'password is incorrect'})
                }
            }else{
                return res.status(404).json({success:false,message:'User does not exist'})

            }
            }catch(err){
                return res.status(500).json({success:err,success:false})
            }
       
     }
    module.exports={signup,login,};
    