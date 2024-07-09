import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const TaskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    dueDate:{
        type:Date,
        required:true,
    },
    priority:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    createdDate: {
        type:Date,
        required:true,
    },
    updatedDate: {
        type:Date,
        required:true,
    },
    creatorUserID: {
        type: Schema.Types.ObjectId,
        ref: "UserSchema",
        required:true,
    },
})

export default mongoose.model("/TaskSchema", TaskSchema,"TaskSchema")