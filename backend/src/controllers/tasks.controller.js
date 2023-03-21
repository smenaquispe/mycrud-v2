import dateFormat from "dateformat"
import taskSchema from "../models/task.schema.js";


export const getTasks = async (req,res) => {
    const list = await taskSchema.find().lean();
    list.forEach(el => {
        const date = new Date(el.date);
        date.setDate(date.getDate() + 1);
        el.date = dateFormat(date,"dd-mm-yyyy");
    });
    
    res.send(JSON.stringify(list));
}


export const createTask = async (req, res) => {
    try {
        const task = taskSchema(req.body);    
        const saved = await task.save();
        console.log(saved);
        res.send(JSON.stringify({'Status' : 'Task created'}))
    } catch (error) {
        console.log(error)
        res.send(JSON.stringify({'Error' : error}))
    }
}

export const getTaskById = async (req,res) => {
    const {id} = req.params;
    const task = await taskSchema.findById(id).lean()

    const date = new Date(task.date);
    date.setDate(date.getDate() + 1);

    task.date = dateFormat(date,"yyyy-mm-dd");

    res.send(JSON.stringify(task))
}

export const editTask = async (req, res) => {
    const {id} = req.body;
    try {
        const response = await taskSchema.findByIdAndUpdate(id,req.body)
        res.send(JSON.stringify({
            'Status' : `Task ${id} was edited`, 
            'Response' : response
        }))
    } catch(err) {
        res.send(JSON.stringify({ 'Error' :  err}))
    }
}

export const toggleDone = async (req, res) => {
    const {id} = req.body;

    try {
        const task = await taskSchema.findById(id);
        task.done = !task.done;
        const response = await task.save()

        const status = task.done ? 'done' : 'undone'
        
        res.send(JSON.stringify({
            'Status' : `Task ${id} is ${status}`, 
            'Response' : response
        }))
    } catch (error) {
        res.send(JSON.stringify({'Error' : error}))
    }
}

export const deleteTask = async (req,res) => {
    const {id} = req.body;

    try{
        const response = await taskSchema.findOneAndDelete({ _id : id})
        res.send(JSON.stringify({
            'Status' : `Task ${id} was deleted`,
            'Response' : response
        }))
    } catch(err) {
        res.send(JSON.stringify({'Error' : err}))
    }
}