import {Request,Response} from "express"
import UserModel from "../Model/Auth.Model"
import bcrypt from "bcrypt"


export const getUsers = async(req:Request,res:Response)=>{
    try {
        const AllUsers = await UserModel.find()
        res.status(200).json({
            message:"gotten all users",
            data:AllUsers
        })
    } catch (error) {
        res.status(404).json({
            message:"Couldn't get all users"
        })
    }
}
export const getUser = async(req:Request,res:Response)=>{
    try {
        
        const {_id} = req.params

        const oneUser = await UserModel.findById(_id)
        res.status(200).json({
            message:"gotten users",
            data:oneUser
        })
    } catch (error) {
        res.status(404).json({
            message:"Couldn't get users"
        })
    }
}
export const updateUser = async(req:Request,res:Response)=>{
    try {
        
        const {_id} = req.params
        const {name,avatar} = req.body

        const updateOne = await UserModel.findByIdAndUpdate(_id,
            {name,avatar},
            {new:true}
            )
        res.status(200).json({
            message:"Updated user",
            data:updateOne
        })
    } catch (error) {
        res.status(404).json({
            message:"Couldn't Update users"
        })
    }
}
export const deleteUser = async(req:Request,res:Response)=>{
    try {
        
        const {_id} = req.params
        const deleteOne = await UserModel.findByIdAndDelete(_id)
        res.status(200).json({
            message:"deleted user",
            data:deleteOne
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
export const createAccount = async(req:Request,res:Response)=>{
    try {
        const {userName,email,password,avatar} = req.body
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)
        const Avatar=userName.charAt(0)
        const newUser = await UserModel.create({
            userName,
            email,
            password:hash,
            avatar:Avatar
        })
        res.status(201).json({
            message:"Account opened!",
            data:newUser
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}