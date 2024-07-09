import { validationResult } from "express-validator"
import { jsonnGenerate } from "../utils/helper.js";
import { StatusCode } from "../utils/constant.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import ProjectSchema from "../models/ProjectSchema.js";

export const getAllProjects = async (req, res) => {
    try {
        const projects = await ProjectSchema.find();
        return res.status(StatusCode.SUCCESS).json(jsonnGenerate(StatusCode.SUCCESS, "All projects", projects));
    } catch (err) {
        console.error(err);
        return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(jsonnGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}

export const getProjectById = async (req, res) => {
    try {
        const project = await ProjectSchema.findById(req.params.id);
        if (!project) {
            return res.status(StatusCode.NOT_FOUND).json(jsonnGenerate(StatusCode.NOT_FOUND, "Project not found"));
        }
        return res.status(StatusCode.SUCCESS).json(jsonnGenerate(StatusCode.SUCCESS, "Project", project));
    } catch (err) {
        console.error(err);
        return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(jsonnGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}

export const createProject = async (req, res) => {
    try {
        const { name, description, startDate, endDate, CreatorUserID } = req.body;
        const project = new ProjectSchema({
            name,
            description,
            startDate,
            endDate,
            CreatorUserID
        });
        await project.save();
        return res.status(StatusCode.SUCCESS).json(jsonnGenerate(StatusCode.SUCCESS, "Project created", project));
    } catch (err) {
        console.error(err);
        return res.status(StatusCode.INTERNAL_SERVER_ERROR).json(jsonnGenerate(StatusCode.INTERNAL_SERVER_ERROR, "Internal server error"));
    }
}
