import './App.css'
import CounterReducer from './components/CounterReducer'
// import Heading from './components/Heading';
// import Counter from './components/Counter';
// import { ChangeEvent, ChangeEventHandler, useRef, useState, MouseEvent, KeyboardEvent } from 'react';
// import List from './components/List'

// function App() {
//   const [count, setCount] = useState<number>(0)
//   return (
//     <>
//       <Heading title={'Heading'}/>
//       <Counter setCount={setCount}>
//         <h3>Count is: {count}</h3>
//       </Counter>
//     </>
//   )
// }


// function App() {
//   const inputRef = useRef<HTMLInputElement>() 
//   const [count, setCount] = useState<number>(0)

//   // const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>  {
//   const handleChange: ChangeEventHandler<HTMLInputElement> = (e): void =>  {
//     console.log(inputRef?.current?.value)
//     console.log(e.target.value);
//   }

//   const addTwo = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => {
//     setCount(prev=> prev + 2);
    
//   }

//   return (
//     <>
//       {/* <List items={[1, 2, 3, 'a', 'b', 'c']}/> */}
//       <div>
//         <button onClick={addTwo}>Add 2</button>
//         {count}
//       </div>
     
//       <input onChange={handleChange} ref={inputRef} placeholder='enter...'/>
//     </>
//   )
// }

function App() {
  return (
    <>
      <CounterReducer/>
    </>
  )
}

export default App
