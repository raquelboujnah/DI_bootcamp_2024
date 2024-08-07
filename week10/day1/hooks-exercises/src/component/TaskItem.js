import { useContext, useRef, useState } from "react";
import { TaskContext, removeTask, editTask, toggleTask } from "../App";

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const editInputRef = useRef();

  const RemoveTask = () => {
    dispatch({ type: removeTask, id: task.id });
  };

  const ToggleTask = () => {
    dispatch({ type: toggleTask, payload: task.id });
  };

  const saveEdit = () => {
    const newName = editInputRef.current.value;
    dispatch({ type: editTask, payload: { id: task.id, name: newName } });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input type="text" defaultValue={task.name} ref={editInputRef} />
      ) : (
        <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.name}</span>
      )}
      <button onClick={RemoveTask}>Remove</button>
      <button onClick={ToggleTask}>{task.completed ? "Undo" : "Complete"}</button>
      <button onClick={() => setIsEditing((prev) => !prev)}>
        {isEditing ? "Save" : "Edit"}
      </button>
      {isEditing && <button onClick={saveEdit}>Save</button>}
    </div>
  );
};

export default TaskItem;