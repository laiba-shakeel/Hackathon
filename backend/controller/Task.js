import { validationResult } from "express-validator"
import { jsonnGenerate } from "../utils/helper.js";
import { StatusCode } from "../utils/constant.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import TaskSchema from "../models/TaskSchema.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskSchema.find();
        return res.status(StatusCode.SUCCESS).json(jsonnGenerate(StatusCode.SUCCESS, "All tasks", tasks));
    } catch (err) {
        console.error(err);
        return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(jsonnGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}

export const getTaskById = async (req, res) => {
    try {
        const task = await TaskSchema.findById(req.params.id);
        if (!task) {
            return res.status(StatusCode.NOT_FOUND).json(jsonnGenerate(StatusCode.NOT_FOUND, "Task not found"));
        }
        return res.status(StatusCode.SUCCESS).json(jsonnGenerate(StatusCode.SUCCESS, "Task", task));
    } catch (err) {
        console.error(err);
        return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(jsonnGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}

export const createTask = async (req, res) => {
    try {
        const { 
            title,
            description,
            dueDate,
            priority,
            status,
            createdDate,
            updatedDate,
            creatorUserID 
        } = req.body;
        const task = new TaskSchema({
            title,
            description,
            dueDate,
            priority,
            status,
            createdDate,
            updatedDate,
            creatorUserID
        });
        await task.save();
        return res.status(StatusCode.SUCCESS).json(jsonnGenerate(StatusCode.SUCCESS, "Task created", task));
    } catch (err) {
        console.error(err);
        return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(jsonnGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}
