import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const Todo = (props) => {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
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