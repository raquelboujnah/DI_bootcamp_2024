import { useState } from 'react';
import { connect } from 'react-redux';
import { add, edit, remove } from '../redux/actions';

const DayPlanner = (props) => {
    const [day, setDay] = useState('Monday');
    const [task, setTask] = useState('');
    const [editingTask, setEditingTask] = useState(null);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (task.trim()) {
        props.addTask(day, task);
        setTask('');
        }
    };

    const handleEditTask = (index) => {
        props.editTask(day, index, newTask);
        setEditingTask(null);
        setNewTask('');
    };

    const handleDeleteTask = (index) => {
        props.removeTask(day, index);
    };

    return (
        <div>
        <h2>{day}</h2>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="New Task"/>
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
            {props.tasks[day]?.map((task, index) => (
                <li key={index}>
                    {editingTask === index ? (
                    <div>
                        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                        <button onClick={() => handleEditTask(index)}>Save</button>
                    </div>
                    ) : (
                    <div>
                        {task}
                        <button onClick={() => setEditingTask(index)}>Edit</button>
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </div>
                    )}
                </li>
            ))}
        </ul>
        <select onChange={(e) => setDay(e.target.value)} value={day}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
        </select>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        addTask: (day, task) => dispatch(add(day, task)),
        editTask: (day, index, newTask) => dispatch(edit(day, index, newTask)),
        removeTask: (day, index) => dispatch(remove(day, index))
    }
    
};

export default connect(mapStateToProps, mapDispatchToProps)(DayPlanner);