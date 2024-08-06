import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const Todo = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      todos: state.todoList.todos
  };
};

export default connect(mapStateToProps)(Todo);