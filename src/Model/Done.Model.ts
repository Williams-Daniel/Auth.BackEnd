import mongoose from "mongoose";

export interface iDoneTaskData{
    task?:string,
    priority?:string,
    isComplete?:boolean
}

interface iDoneTask extends iDoneTaskData, mongoose.Document{

}

const DoneTaskModel = new mongoose.Schema({
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

export default mongoose.model<iDoneTask>("Task",DoneTaskModel)