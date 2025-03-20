import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req,res)=>{

    try {
        const {fullname,email,phoneNumber,password,role} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({message:"All fields are required" , success:false});
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists" , success:false});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            role
        });
        return res.status(201).json({message:"Account created successfully." , success:true});
    } catch (error) {
        console.log(error.message);
        
    }
}

export const login = async (req,res)=>{

    try {
        const {email,password,role} = req.body;
        if(!email || !password || !role){
            return res.status(400).json({message:"All fields are required" , success:false});
        };
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid credentials" , success:false});
        };
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({message:"Invalid credentials" , success:false});
        }
        // checkRole
        if(role !== user.role){
            return res.status(400).json({message:"Account doesn't exist with current role." , success:false});
        }
        const tokenData = {
            userId:user._id,
        }
        const token = jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:'1d'});
        user = {
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile,
        }
        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:'strict'}).json(
            {
                message:`Welcome ${user.fullname}`,
                user,
                success:true,
            }
        );
    } catch (error) {
        console.log(error);
    }
};

export const logout = async (req,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({message:"Logged out successfully",success:true});
    } catch (error) {
        console.log(error);
    }
};
export const updateProfile = async (req,res)=>{
    try {
        const {fullname,email,phoneNumber,bio,skills} = req.body;
        const file= req.file;
        let skillsArray;
           // cloudnery over here
            if(skills){

                skillsArray = skills.split(",");
            }
        const userId = req.id; // from  middleware authentication
        let user = await User.findById(userId);
        if(!user){
            return res.status(400).json({message:"User not found" , success:false});
        }
        // update user data

       if(fullname)     user.fullname = fullname;
       if(email)        user.email = email;
       if(phoneNumber)  user.phoneNumber = phoneNumber;
       if(bio)          user.profile.bio = bio;
       if(skills)       user.profile.skills = skillsArray;

        // we will add resume later 

        await user.save();
        user = {
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile,
        }
        return res.status(200).json({message:"Profile updated successfully",user,success:true});
    } catch (error) {
        console.log(error);
    }
}