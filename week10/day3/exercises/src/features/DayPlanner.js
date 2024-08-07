import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { addTask, editTask, removeTask } from "./plannerSlice";

const DayPlanner = () => {
    const tasks = useSelector(state => state.plannerReducer);
    const dispatch = useDispatch();
    const [day, setDay] = useState('Sunday');
    const [newTask, setNewTask] = useState('')
    const addTaskRef = useRef();

    const add = () => {
        const task = addTaskRef.current.value;
        dispatch(addTask({day, task}))
    }

    const edit = (id) => {
        dispatch(editTask({day, id, newTask}))
    }

    const deleteTask = (id) => {
        dispatch(removeTask({day, id}))
    }

    return(
        <>
            <h2>DayPlanner</h2>
            <select onChange={(e) => setDay(e.target.value)} value={day}>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
            <h2>{day}</h2>
            <div>
                <h4>Add a new task</h4>
                <input type="text" ref={addTaskRef} placeholder="New Task" />
                <button onClick={() => add()}>Add Task</button>
            </div>
            {tasks[day]? tasks[day].map(task => {
                return (
                    <div key={task.id}>
                        <h5>{task.task}</h5>
                        <div>
                            <input type="text" onChange={(e) => setNewTask(e.target.value)}/>
                            <button onClick={() => edit(task.id)} >Save</button>
                        </div>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                ) 
            }) : null} 
        </>
    );
};

export default DayPlanner