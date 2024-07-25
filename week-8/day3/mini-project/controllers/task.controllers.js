const {getAllTask, getOneTask, newTask, updateTask, deleteTask} = require('../models/task.models.js')

const _getAllTask = (req, res) => {
    try{
        const result = getAllTask()
        res.json(result);
    }catch(err){
        console.log(err);
            res.status(404).json({message: "something went wrong"})
    }
}

const _getOneTask = (req, res) => {
    const {id} = req.params;
    const arrJson = getAllTask()
    try{
        const result = getOneTask(id, arrJson)
        res.json(result)
    }catch(err){
        console.log(err);
        res.status(404).json({message: "something went wrong"})
    }
}

const _newTask = (req, res) => {
    const arrJson = getAllTask()
    const new_task = req.body;
    try{
        newTask(new_task, arrJson)
        res.json({message: "task added successefully", task: new_task})
    }catch(err){
        console.log(err);
        res.status(404).json({message: "something went wrong"})
    }
}

const _updateTask = (req, res) => {
    const {id} = req.params;
    const updated_task = req.body;
    const arrJson = getAllTask()
    try{
        updateTask(id, updated_task, arrJson)
        res.json({message: "task updated successefully", task: updated_task})
    }catch(err){
        console.log(err);
        res.status(404).json({message: "something went wrong"})
    }
}

const _deleteTask = (req, res) => {
    const {id} = req.params;
    try{
        const arrJson = getAllTask()
        deleteTask(id, arrJson)
        res.json({message: "task deleted successefully"})
    }catch(err){
        console.log(err);
        res.status(404).json({message: "something went wrong"})
    }
}

module.exports = {
    _getAllTask,
    _getOneTask,
    _newTask,
    _updateTask,
    _deleteTask
}