import { removeTask } from "../App";
import { useContext } from "react";
import { TaskContext } from "../App";

const TaskRemover = ({id}) => {
    const {dispatch} = useContext(TaskContext)
    const RemoveTask = () => {
        dispatch({type: removeTask, id})
    };
    return (
        <>
            <button onClick={()=>RemoveTask()}> - </button>
        </>
    )
}

export default TaskRemover