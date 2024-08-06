import { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { add, edit, remove } from '../redux/actions';

const DayPlanner = (props) => {
    const [day, setDay] = useState('Sunday');
    const addRef = useRef()
    const editRef = useRef()
    console.log(props);
    

    const handleAddTask = () => {
        props.addTask(day, addRef.current.value);
    };

    const handleEditTask = (id) => {
        props.editTask(day, id, editRef.current.value);
    };

    const handleDeleteTask = (id) => {
        props.removeTask(day, id);
    };

    return (
        <div>        
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
                <h5>Add a new task</h5>
                <input type="text" ref={addRef} placeholder="New Task"/>
                <button onClick={() => handleAddTask()}>Add Task</button>
            </div>
            {props.tasks[day]? props.tasks[day].map(task => {
                return (
                    <div key={task.id}>
                        <h5>{task.task}</h5>
                        <div>
                            <input type="text" ref={editRef}/>
                            <button onClick={() => handleEditTask(task.id)}>Save</button>
                        </div>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </div>
                ) 
            }) : null} 
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
        editTask: (day, id, newTask) => dispatch(edit(day, id, newTask)),
        removeTask: (day, id) => dispatch(remove(day, id))
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(DayPlanner);