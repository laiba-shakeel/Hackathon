import express from "express"
import  UserRegister  from "../controller/Register.js";
import { RegisterSchema } from "../validation/RegisterSchema.js";
import LoginUser from "../controller/Login.js";
import { LoginSchema } from "../validation/LoginSchema.js";

export const userRoute = express.Router();
userRoute.post("/register",RegisterSchema,UserRegister);
userRoute.post("/login",LoginSchema,LoginUser);
