import mongoose from "mongoose";

export interface iTaskData{
    task?:string,
    priority?:string,
    isComplete?:boolean
}

interface iTask extends iTaskData, mongoose.Document{

}

const TaskModel = new mongoose.Schema({
    task:{
        type:String,
        trim:true
    },
    priority:{
        type:String
    },
    isComplete:{
        type:Boolean,
        default:false
    }
})

export default mongoose.model<iTask>("Task",TaskModel)