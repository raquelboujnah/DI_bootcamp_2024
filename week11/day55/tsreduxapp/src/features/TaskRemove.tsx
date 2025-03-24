import { useRemoveTask } from "./hooks";

interface TaskRemoverProps {
    id: string
};

const TaskRemove = ({id} : TaskRemoverProps) => {
    const remove = useRemoveTask();
    return <button onClick={() => remove(id)}> X </button>
};

export default TaskRemove