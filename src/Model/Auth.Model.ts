import mongoose from "mongoose";
interface iUsersData {
  userName?: string;
  email?: string;
  password?: string;
  avatar?: string;
}

interface iUser extends iUsersData, mongoose.Document {}

 const UserModel = new mongoose.Schema({
    userName:{
        type:String,
        trim:true,
        require:true
    },
    email:{
        type:String,
        trim:true,
        require:true,
        unique:true
    },
    password:{
        type:String,
        min:6,
        require:true
    },
    avatar:{
        type:String
    }
},{timestamps:true})

export default mongoose.model<iUser>("Auth",UserModel)