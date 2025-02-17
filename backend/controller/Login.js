import { validationResult } from "express-validator";
import { jsonnGenerate } from "../utils/helper.js";
import { StatusCode } from "../utils/constant.js"; // Ensure the path is correct
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserSchema from "../models/UserSchema.js";

dotenv.config({ path: "../.env" });

const LoginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(StatusCode.UNAUTHORIZED).json(
      jsonnGenerate(StatusCode.UNAUTHORIZED, "Validation error", errors.mapped())
    );
  }

  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await UserSchema.findOne({ email: email });
    if (!user) {
      return res.status(StatusCode.UNAUTHORIZED).json(
        jsonnGenerate(StatusCode.UNAUTHORIZED, "Email and password are incorrect")
      );
    }

    // Verify password
    const verification = await bcrypt.compare(password, user.password);
    if (!verification) {
      return res.status(StatusCode.UNAUTHORIZED).json(
        jsonnGenerate(StatusCode.UNAUTHORIZED, "Email and password are incorrect")
      );
    }

    // Generate token
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_TOKEN_SECRET,
      { expiresIn: '1h' } // Optional: token expiry time
    );

    return res.status(StatusCode.SUCCESS).json({ userId: user._id, token: token, name: user.name, email: user.email });
  } catch (err) {
    console.error(err);
    return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(
      jsonnGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal server error")
    );
  }
};

export default LoginUser;
