const express = require('express');
const router = express.Router();

const todos = []

router.get('/todos', (req, res) => {
    res.json(todos)
})

router.post('/todos', (req, res) => {
    const {task, done} = req.body
    const newTask = {task, done, id: todos.length + 1}
    todos.push(newTask)
    res.json(todos).status(200)
})


router.put('/todos/:id', (req, res) => {
    const {id} = req.params
    const {task, done} = req.body
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    
    if (todoIndex !== -1) {
        todos[todoIndex] = { task, done, id: parseInt(id) };
        res.status(200).json(todos[todoIndex]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
})

router.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    
    if (todoIndex !== -1) {
        const deletedTodo = todos.splice(todoIndex, 1);
        res.status(200).json(deletedTodo[0]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }})

module.exports = router