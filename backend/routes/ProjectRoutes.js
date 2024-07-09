import express from "express"
import { createProject, getAllProjects, getProjectById } from "../controller/Project.js";

export const projectRoute = express.Router();

projectRoute.get("/project", getAllProjects);
projectRoute.get("/project/:id", getProjectById);
projectRoute.post("/project", createProject);
