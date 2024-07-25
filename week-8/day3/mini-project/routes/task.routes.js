const {_getAllTask, _getOneTask, _newTask, _updateTask, _deleteTask} = require('../controllers/task.controllers.js')
const express = require('express');

const router = express.Router();

router.get('/tasks', _getAllTask)
router.get('/tasks/:id', _getOneTask)
router.post('/tasks', _newTask)
router.put('/tasks/:id', _updateTask)
router.delete('/tasks/:id', _deleteTask)

module.exports = router
