import { check } from "express-validator";
export const LoginSchema = [
  check("email", "Email is required")
    .exists()
    .trim()
    .isEmail()
    .withMessage("Email is not valid"),
  check("password", "password is required")
    .trim()
    .isLength({ min: 6, max: 12 })
    .exists(),
];
