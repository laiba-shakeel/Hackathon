import express from "express"
import { getAllTasks, createTask, getTaskById } from "../controller/Task.js";

export const TaskRoutes = express.Router();

TaskRoutes.get("/task", getAllTasks);
TaskRoutes.get("/task/:id", getTaskById);
TaskRoutes.post("/task", createTask);
