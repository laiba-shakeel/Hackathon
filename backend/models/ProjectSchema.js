import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const ProjectSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    startDate:{
        type:Date,
        required:true,
    },
    endDate:{
        type:Date,
        required:true,
    },
    CreatorUserID:{
        type: Schema.Types.ObjectId,
        ref: "UserSchema",
        required:true,
    }
})

export default mongoose.model("/ProjectSchema", ProjectSchema,"ProjectSchema")