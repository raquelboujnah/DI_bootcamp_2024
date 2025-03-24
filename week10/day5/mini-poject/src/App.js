import './App.css';
import PostList from './features/posts/PostList';
import UsersList from './features/users/UsersList';
import { useState, useMemo, useCallback } from 'react';
import Todo from './Todo';


function App() {
  return (
    <div className="App">
      <h1>Mini Project</h1>
      <UsersList/>
      <PostList/>
    </div>
  );
}

// function App() {
//   const [count, setcount] = useState(0);
//   const [todos, setTodods] = useState([]);

//   const expensiveCalculation = (num) => {
//     for(let i = 0; i< 100000000; i++){
//       num++;
//     };
//     return num;
//   };

//   const calculation = useMemo(() => {
//     const calculation = expensiveCalculation(0);
//     return calculation
//   }, [count]);

//   const add = () => {
//     setcount((count) => count + 1);
//   };

//   // const addTask = () => {
//   //   setTodods((todos) => [...todos, "new task"]);
//   // };

//   const addTask = useCallback(() => {
//     setTodods((todos) => [...todos, "new task"]);
//   }, [todos])

//   return (
//     <div className="App">
//       <h1>Counter</h1>
//       <h3>Count is {count}</h3>
//       <button onClick={() => add()}>Add</button>
//       <Todo todos={todos} addTask={addTask}/>
//     </div>
//   );
// }

export default App;
