import { connect } from "react-redux";
import { removeTodo, toogleTodo } from '../redux/action';

const TodoItem = (props) => {
    console.log(props);
    
  return (
    <div>
        <h4>{props.todo[0].text}</h4>
        <span onClick={() => props.toogle(props.todo.index)}>{props.todo.complited}</span>
        <button onClick={() => props.remove(props.todo.index)}>Delete</button>
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
        remove: (index) => dispatch(removeTodo(index)),
        toggle: (index) => dispatch(toogleTodo(index)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);