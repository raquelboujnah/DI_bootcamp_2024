// import './App.css';
// import {useState, createContext} from 'react'
// import Display from './component/Display';
// import Action from './component/Action';

// export const AppContext = createContext();



// function App() {
//   const [count, setCount] = useState(0)
//   const [title, setTitle] = useState('')

//   return (
//     <div className="App">
//       <h1>Counter</h1>
//       <AppContext.Provider value={{count, setCount, title, setTitle}}>
//         <Display/>
//         <Action/>
//       </AppContext.Provider>

//     </div>
//   );
// }

// export default App;


// import './App.css';
// import { useState, useRef, useEffect} from 'react';


// function App() {
//   const [count, setCount] = useState(0)
//   const myRef = useRef()
  
//   return (
//     <div className="App" ref={myRef}>
//       <h1>UseRef</h1>
//     </div>
//   );
// }

// export default App;




// import './App.css';
// import { useState, useRef, useEffect} from 'react';


// function App() {
//   const [count, setCount] = useState(0)
//   const nameref = useRef('Dan Ref')
//   let name = 'dan'

//   const changeNameref = () => {
//     nameref.current = 'John'
//   }
  
//   return (
//     <div className="App" ref={myRef}>
//       <h1>{nameref.current}</h1>
//       <button onClick={()=>changeNameref()}>Change name</button>
//     </div>
//   );
// }

// export default App;




import './App.css';
import { useState, useReducer} from 'react';

const initialState = {
  count: 4
}

const reducer = (state, action) => {
  if (action.type === 'increment'){
    return {...state, count: state.count + action.payload};
  }else if(action.type === 'decrement'){
    return {...state, count: state.count - action.payload};
  }
  return state;
}

function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div className="App">
        <h1>useState</h1>
        <button onClick={()=>setCount((count)=> count + 1)}>+</button>
        {count}
        <button onClick={()=>setCount((count)=> count - 1)}>-</button>
      </div>
      <div>
        <h1>useReducer</h1>
        <button onClick={()=>dispatch({type: 'increment', payload:1})}>+</button>
        <button onClick={()=>dispatch({type: 'increment', payload:10})}>+10</button>
        {state.count}
        <button onClick={()=>dispatch({type: 'decrement', payload:1})}>-</button>
        <button onClick={()=>dispatch({type: 'decrement', payload:10})}>-10</button>

      </div>
    </>
    
  );
}

export default App;
