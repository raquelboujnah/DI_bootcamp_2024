import { useTasksSelector, useTaskDispatch, useAddTask, useEditTask, useRemoveTask, useToggleTask, useFilterCompleted } from "./taskHooks";
import {useRef, useState} from 'react'
import { removeTask } from "./taskSlice";

const Tasks = () => {
    const tasks = useTasksSelector()
    const filterTask = useTaskDispatch()
    const addTask = useAddTask()
    const editTask = useEditTask()
    const removeTask = useRemoveTask()
    const toggleTask = useToggleTask()
    const filterCompleted = useFilterCompleted()
    const taskInput = useRef()
    const [newTask, setNewTask] = useState('')
    const [categorie, setCategorie] = useState('categories')
    const [newCategorie, setNewCategorie] = useState('categories')
    

    return (
        <>
            <h2>Tasks</h2>
            <select onChange={(e) => filterTask(e.target.value)}>
                <option value={'categories'}>Filter by categories</option>
                <option value={'Room'}>Room</option>
                <option value={'Kitchen'}>Kitchen</option>
                <option value={'Bathroom'}>Bathroom</option>
            </select>
            <select onChange={(e) => filterCompleted(e.target.value)} >
                <option value={'done'}>Filter by done</option>
                <option value={'compelted'}>Completed</option>
                <option value={'not completed'}>Not completed</option>
            </select>
            <div>
                <h4>Add task</h4>
                <input ref={taskInput} placeholder="Task"/>
                <select onChange={(e) => setCategorie(e.target.value)}>
                    <option value={'categories'}>Add categorie</option>
                    <option value={'Room'}>Room</option>
                    <option value={'Kitchen'}>Kitchen</option>
                    <option value={'Bathroom'}>Bathroom</option>
                </select>
                <button onClick={() => addTask({ task: taskInput.current.value, categorie })}>Add</button>
            </div>
            {tasks.map(task => {
                return (
                    <div key={task.id}>
                        <h4>{task.task}</h4>
                        <h6>{task.categorie}</h6>
                        <p onClick={() => toggleTask(task.id)}>{task.completed ? 'completed' : 'not completed'}</p>
                        <div>
                            <h6>Edit</h6>
                            <input onChange={(e) => setNewTask(e.target.value)} placeholder="New Task"/>
                            <select onChange={(e) => setNewCategorie(e.target.value)}>
                                <option value={'categories'}>Change categorie</option>
                                <option value={'Room'}>Room</option>
                                <option value={'Kitchen'}>Kitchen</option>
                                <option value={'Bathroom'}>Bathroom</option>
                            </select>
                            <button onClick={() => editTask({ id: task.id, newTask, newCategorie })}>Edit</button>
                        </div>
                        <button onClick={() => removeTask(task.id)}>Remove</button>

                    </div>
                )
            })}
        </>
    )
}

export default Tasks