import { useContext } from "react";
import { TaskContext } from "../App";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { state } = useContext(TaskContext);
  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === 'completed') return task.completed;
    if (state.filter === 'active') return !task.completed;
    return true;
  });

  return (
    <>
      <h3>List of tasks</h3>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
