import { useTasksSelector } from "./hooks";
import TaskItem from "./TaskItem";

const TasksList = () => {
  const tasks = useTasksSelector();
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};
export default TasksList;
