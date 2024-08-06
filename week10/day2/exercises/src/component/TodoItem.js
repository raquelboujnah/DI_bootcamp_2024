import { connect } from "react-redux";
import { removeTodo, toogleTodo } from '../redux/action';

const TodoItem = (props) => {
    console.log(props);
    
  return (
    <div>
        <h4 onClick={() => props.toogle(props.todo.id)}>{props.todo.text} {props.todo.completed ? 'completed' : 'not completed'}</h4>
        <button onClick={() => props.remove(props.todo.id)}>Delete</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
    return{
        remove: (id) => dispatch(removeTodo(id)),
        toogle: (id) => dispatch(toogleTodo(id)),
    }
}

export default connect(undefined, mapDispatchToProps)(TodoItem);