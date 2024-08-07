import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { addTodo, removeTodo, toggleTodo } from "./todoSlice";

const Todo = () => {
    const todos = useSelector(state => state.todoReducer.todos);
    const dispatch = useDispatch();
    const taskRef = useRef()

    const pushTodo = () => {
        const task = taskRef.current.value;
        dispatch(addTodo(task))
        console.log(todos);
    }

    const deleteTodo = (index) => {
        dispatch(removeTodo(index))
    }

    const toggleTask = (index) => {
        dispatch(toggleTodo(index))
    }

    return(
        <>
            <div>
                <h4>Add a new todo</h4>
                <input placeholder="Add Todo" ref={taskRef}/>
                <button onClick={() => pushTodo()}>Add</button>
            </div>
            {todos.map((task, index) => {
                return (
                    <div key={task.id}>
                        <h5>{task.task} {task.completed ? 'completed' : 'not completed'}</h5>
                        <button onClick={() => deleteTodo(index)}>Remove</button>
                        <button onClick={() => toggleTask(index)}>Toggle</button>
                    </div>
                )
            })}
        </>
    )
}

export default Todo