import express from "express";
import {getTasks,createTask,getTaskById, editTask, toggleDone, deleteTask} from "../controllers/tasks.controller.js"

const router = express.Router();

// get list of tasks or task
router.get("/", getTasks);
router.get("/:id", getTaskById)

// post new task
router.post("/add", createTask);

// update
router.post("/edit", editTask)

// update done
router.post("/toggleDone", toggleDone);

// delete
router.post("/delete", deleteTask);


export default router;