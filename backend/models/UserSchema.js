import mongoose from "mongoose";
export const UserSchema = mongoose.Schema({
    name:{
        type:String,
        min:6,
        max:32,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
  password:{
        type:String,
        required:true,
        unique:true,

    },
    date:{
        type:Date,
        default:Date.now,
    }
})
export default mongoose.model("/UserSchema",UserSchema,"registeruser")