import { Item } from "../model/ListItem";
import { useToogleTask } from "./hooks";
import TaskRemove from "./TaskRemove";
import "./task.css";


type TaskItemProps = {
    task: Item;
};

const TaskItem = ({task}: TaskItemProps) => {
    const toogle = useToogleTask();

    const handleClick = () => {
        toogle(task.id);
    };

    return (
        <>
            <div>
                <span className={task.checked ? 'completed' : ''} onClick={handleClick}>
                    {task.item}
                </span>
                <TaskRemove id={task.id}/>
            </div>
        </>
    );
};

export default TaskItem;