// import logo from './logo.svg';
import './App.css';
// import { useState } from "react";
// import Counter from './component/Counter';
// import Parent from './component/Parent';
// import Child from './component/Child';
// import ErrorBoundary from './ErrorBound';
// import { useState } from 'react';
// import BuggyCounter from './BuggyCounter';
// import Color from './component/Colors';
import Form from './component/dailyChallenge';

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Counter count={count} setCount={setCount}/>
//       </header>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ErrorBoundary>
//           <Counter/>
//         </ErrorBoundary>
//         <ErrorBoundary>
//           <Counter/>
//         </ErrorBoundary>
//         {/* <Parent>
//           <Child/>
//         </Parent> */}
//       </header>
//     </div>
//   );
// }


// function App() {
//   // const [name, setName] = useState('')
//   // const [email, setEmail] = useState('')
//   // const [num, setNum] = useState('')
//   // const [yesno, setYesno] = useState(true)
//   // const [text, setText] = useState('')
//   //same as:

//   const [inputs, setInputs] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setInputs({...inputs, name: ''})
//   };

//   const handleInputs = (e) => {
//     console.log(e.target.type, e.target.value, e.target.name, e.target.checked);

//     const value = e.target.type === 'checkbox' ? e.target.checked: e.target.value;
//     setInputs({...inputs, [e.target.name]: value})
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Form</h2>
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <input placeholder='Name' name='name' onChange={(e) => handleInputs(e)} value={inputs?.name}/>
//           <br/>
//           <input placeholder='Email' name='email' onChange={(e) => handleInputs(e)}/>
//           <br/>
//           <select name='num' onChange={(e)=>handleInputs(e)}>
//             <option value={-1}>Please select a number</option>
//             <option value={1}>1</option>
//             <option value={2}>2</option>
//             <option value={3}>3</option>
//             <option value={4}>4</option>
//           </select>
//           <br/>
//           <p>Yes/No:</p>
//           <input type='checkbox' name='yesno' onChange={(e)=>handleInputs(e)}/>
//           <br/>
//           <textarea name='text' onChange={(e)=>handleInputs(e)}></textarea>
//           <br/>
//           <input type='submit' value='Sumbit'/>
//         </form> 
//       </header>
//     </div>
//   );
// }


//exercise 1
// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <ErrorBoundary>
//           <BuggyCounter/>
//         </ErrorBoundary>
//         <ErrorBoundary>
//           <BuggyCounter/>
//         </ErrorBoundary>
//       </header>
//     </div>
//   );
// }


//erxercise2
// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Color/>
//       </header>
//     </div>
//   );
// }

//exercise3
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Color/>
//       </header>
//     </div>
//   );
// }

//dailychallenge
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
      </header>
    </div>
  );
}


export default App;
