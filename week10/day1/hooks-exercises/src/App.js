//exercise 1

// import ThemeSwitcher from "./component/ThemeSwitcher";
// import { ThemeProvider, useTheme } from "./component/ThemeContext";
// import "./App.css";

// function AppContent() {
//   const { theme } = useTheme();

//   return (
//     <div className={`App ${theme}`}>
//       <h1>Theme Switcher Example</h1>
//       <ThemeSwitcher />
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <AppContent />
//     </ThemeProvider>
//   );
// }


//exercise2
// import React from "react";
// import "./App.css";
// import CharacterCounter from "./component/CharacterCount";

// function App() {
//   return (
//     <div className="App">
//       <CharacterCounter />
//     </div>
//   );
// }

// export default App;


//exercise 3
import './App.css';
import {useReducer, useRef, createContext, useState} from 'react'
import TaskList from './component/TaskList';

export const TaskContext = createContext()

export const initialState = {
  tasks: [],
  filter: 'all'
};

export const addTask = 'add_task';
export const removeTask = 'remove_task';
export const editTask = 'remove_task';
export const toggleTask = 'remove_task';
export const filterTask = 'remove_task';


export const taskReducer = (state, action) => {
  switch (action.type) {
    case addTask:
      return {
        ...state,
        tasks: [...state.tasks, { id: state.tasks.length + 1, name: action.payload, completed: false }],
      };
    case removeTask:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case editTask:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, name: action.payload.name } : task
        ),
      };
    case toggleTask:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case filterTask:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState)
  const inputRef = useRef()

  const AddTask = () => {
    const value = inputRef.current.value;
    dispatch({type: addTask, payload: value});
    inputRef.current.value = '';
  };

  const FilterTasks = (filter) => {
    dispatch({type: filterTask, payload: filter});
  };

  return (
    <TaskContext.Provider value={{ dispatch, state }}>
      <div className="App">
        <h1>Task Manager</h1>
        <input placeholder="Add task..." ref={inputRef} />
        <button onClick={AddTask}>Add</button>
        <div>
          <button onClick={() => FilterTasks('all')}>All</button>
          <button onClick={() => FilterTasks('completed')}>Completed</button>
          <button onClick={() => FilterTasks('active')}>Active</button>
        </div>
        <TaskList />
      </div>
    </TaskContext.Provider>
  );
};

export default App;
