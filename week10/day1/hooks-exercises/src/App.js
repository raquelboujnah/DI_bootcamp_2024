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
import {useReducer, useRef, createContext} from 'react'
import TaskList from './component/TaskList';

export const TaskContext = createContext()

export const initialState = {
  task: [],
};

export const addTask = 'add_task';
export const removeTask = 'remove_task';

export const taskReducer = (state, action) => {
  if(action.type === addTask){
    const newTask = [...state.task]
    newTask.push({id: newTask.length + 1,name: action.payload, active: true});
    return {...state, task: newTask}
  }else if(action.type === removeTask){
    const notDeletedTask = state.task.filter(item=> item.id !== action.id);
    return {...state, task: notDeletedTask}
  }
  return state;
}
function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState)
  const inpuRef = useRef()

  const AddTask = () => {
    const value = inpuRef.current.value;
    dispatch({type: addTask, payload: value});
    inpuRef.current.value = ''
  }

  return (
    <TaskContext.Provider value={{dispatch, state}}>
      <div className="App">
        <h1>Task Manager</h1>
        <input placeholder='Add task...' ref={inpuRef}/>
        <button onClick={()=>AddTask()}>Add</button>
        <div>
          <TaskList/>
        </div>
      </div>
    </TaskContext.Provider>
    
  );
}

export default App;
