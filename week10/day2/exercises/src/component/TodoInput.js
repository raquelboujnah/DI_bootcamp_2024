import {addTodo} from '../redux/action'
import { useState } from "react";
import { connect } from "react-redux";

const TodoInput = (props) => {
    const [text, setText] = useState('');
  
    const handleAddTodo = () => {
      if (text.trim()) {
        props.add(text);
        setText('');
      }
    };
  
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    );
};


const mapStateToProps = (state) => {
    return {
        todo: state.todoList.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        add: (text) => dispatch(addTodo(text)),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);