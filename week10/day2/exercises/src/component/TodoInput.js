import { addTodo } from '../redux/action'
import { useRef } from "react";
import { connect } from "react-redux";

const TodoInput = (props) => {
    const taskRef = useRef()

    const handleAddTodo = () => {
      props.add(taskRef.current.value);
    };
  
    return (
      <div>
        <input type="text" ref={taskRef}/>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return{
        add: (text) => dispatch(addTodo(text)),
    };
};
  
export default connect(undefined, mapDispatchToProps)(TodoInput);