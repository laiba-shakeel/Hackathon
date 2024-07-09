import { validationResult } from "express-validator"
import { jsonnGenerate } from "../utils/helper.js";
import { StatusCode } from "../utils/constant.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import UserSchema from "../models/UserSchema.js";

const UserRegister = async(req,res)=>{
    const validationErr = validationResult(req);
    if (!validationErr.isEmpty()) {
      return res.status(StatusCode.VALIDATION_ERROR).json(
        jsonnGenerate(
          StatusCode.VALIDATION_ERROR,
          "Validation error",
          validationErr.mapped()
        )
      );
    }
  
    // Destructuring
    const { name, email, password } = req.body;
  
    try {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
  
      const userExist = await UserSchema.findOne({
        $or: [{ name:name }, { email: email }],
      });
  
      if (userExist) {
        return res.status(StatusCode.UNPROCESSABLE_ENTITY).json(
          jsonnGenerate(
            StatusCode.UNPROCESSABLE_ENTITY,
            "Username and email already exist"
          )
        );
      }
  
      // Save to database
      const result = await UserSchema.create({
        name: name,
        email: email,
        password: hashPassword,
      });
  
      const token = jwt.sign(
        {
          userId: result._id,
        },
        process.env. JWT_TOKEN_SECRET
      
      );
  
      return res.status(StatusCode.SUCCESS).json(
        jsonnGenerate(StatusCode.SUCCESS, "User added successfully", {
          userId: result._id,
          token: token,
        })
      );
    } catch (err) {
      console.error(err);
      return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(
        jsonnGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal server error")
      );
    }
  
  };
  export default UserRegister;