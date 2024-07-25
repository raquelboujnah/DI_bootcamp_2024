const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, '../config/tasks.json');

const getAllTask = () => {
    try {
        const data = fs.readFileSync(jsonFilePath, 'utf-8');
        const jsonArray = JSON.parse(data);
        return jsonArray;
    } catch (err) {
        console.log(err);        
    }
};

const getOneTask = (task_id, arrJson) => {
    try{
        for (let task of arrJson){
            if(task.id == task_id){
                return task
            }  
        }
    }catch(err){
        console.log(err);
    }
}

const newTask = (new_task, arrJson) => {
    const data = {id: arrJson.length + 1, ...new_task}
    arrJson.push(data)
    try {
        fs.writeFileSync(jsonFilePath, JSON.stringify(arrJson, null, 2), "utf-8");
    }catch(err){
        console.log(err);
    }
}

const updateTask = (task_id, updated_task, arrJson) => {
    try{
        for (let task of arrJson){
            if(task.id == task_id){
                task.task = updated_task.task;
                fs.writeFileSync(jsonFilePath, JSON.stringify(arrJson, null, 2), "utf-8");
            }
        }
    }catch(err){
        console.log(err);
    }   
}

const deleteTask = (task_id, arrJson) =>{
    try{
        const index = arrJson.findIndex(task => task.id == task_id);
        if (index < arrJson.length){
            arrJson.splice(index, 1)
            fs.writeFileSync(jsonFilePath, JSON.stringify(arrJson, null, 2), "utf-8");
        }
    }catch(err){
        console.log(err);
    }
}


module.exports = {
    getAllTask,
    getOneTask,
    newTask,
    updateTask,
    deleteTask
}