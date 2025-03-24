import { memo } from "react";

const Todo = ({todos, addTask}) => {
    console.log('render');
    
    return (
        <>
            <h2>Todo</h2>
            <button onClick={addTask}>Add task</button>
            {todos.map((task, index) => {
                return (
                    <div key={index}>
                        <h3>{index}. {task}</h3>
                    </div>
                )
            })}
        </>
    );
};

export default memo(Todo);