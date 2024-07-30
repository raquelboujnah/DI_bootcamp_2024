const express = require('express');
const router = express.Router();

const books = []

router.get('/books', (req, res) => {
    res.json(books)
})

router.post('/books', (req, res) => {
    const {task, done} = req.body
    const newTask = {task, done, id: books.length + 1}
    books.push(newTask)
    res.json(books).status(200)
})


router.put('/books/:id', (req, res) => {
    const {id} = req.params
    const {task, done} = req.body
    const todoIndex = books.findIndex(todo => todo.id === parseInt(id));
    
    if (todoIndex !== -1) {
        books[todoIndex] = { task, done, id: parseInt(id) };
        res.status(200).json(books[todoIndex]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
})

router.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = books.findIndex(todo => todo.id === parseInt(id));
    
    if (todoIndex !== -1) {
        const deletedTodo = books.splice(todoIndex, 1);
        res.status(200).json(deletedTodo[0]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }})

module.exports = router