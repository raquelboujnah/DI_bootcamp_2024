import { useRef, memo } from "react";
import { useAddTask } from "./hooks";

const TaskInput = () => {
    console.log('TasksInput rendered');
    const inputRef = useRef<HTMLInputElement>(null);
    const addTask = useAddTask();

    const add = () => {
        const task: string = inputRef.current?.value.trim() || '';
        if (task === '') return; 
        addTask(task);
        inputRef.current!.value = '';
    };

    return (
        <>
            <div>
                <input type='text' ref={inputRef} />
                <button onClick={() => add()}>Add Task</button>
            </div>
        </>
    );
};

const MemorizedTaskInput = memo(TaskInput);
export default MemorizedTaskInput;