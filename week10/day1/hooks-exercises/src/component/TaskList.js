import { useContext } from "react";
import { TaskContext } from "../App";
import TaskRemover from "./TaskRemover";

const TaskList = () => {
    const {state} = useContext(TaskContext);
    return (
        <>
            <h3>List of tasks</h3>
            {
                state.task.map((item, idx) => {
                return <div key={idx}>
                    {item.name}
                    <TaskRemover id={item.id}/>
                </div>;
                })
            }
        </>
    )
}

export default TaskList
