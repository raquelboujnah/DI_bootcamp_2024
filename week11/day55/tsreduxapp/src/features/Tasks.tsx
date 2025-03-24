import TasksTitle from "./TaskTitle"
import MemorizedTaskInput from "./TaskInput";
import TasksList from "./TaskList";
import { useTasksSelector } from "./hooks";

const Tasks = () => {
    const tasks = useTasksSelector();

    return (
        <>
            <h1>Tasks</h1>
            <TasksTitle taskscount={tasks.length} />
            <MemorizedTaskInput />
            <TasksList />
        </>
    )
}

export default Tasks