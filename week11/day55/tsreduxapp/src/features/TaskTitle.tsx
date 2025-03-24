type TasksTitleProps = {
    taskscount: number;
};

const TasksTitle = ({ taskscount }: TasksTitleProps) => {
    console.log("TasksTitle rendered");

    return <h3>Number of tasks = {taskscount}</h3>;
};
export default TasksTitle;