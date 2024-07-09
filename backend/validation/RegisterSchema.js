import { check } from "express-validator";
export const RegisterSchema = [
  check("name","user name is required")
  .exists()
  .trim()
  .isLength({min:6,max:32}),
//   .isAlphanumeric().withMessage("Name should be in Alphabets"),
  check("email","Email is required")
  .exists()
  .trim()
  .isEmail().withMessage("Email is not valid"),
  check("password","Password is required")
  .exists()
  .trim()
  .isLength({min:6,max:32})

];