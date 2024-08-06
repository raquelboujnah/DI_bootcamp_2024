import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './component/Counter';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}> + </button>
      {count}
      <button onClick={() => setCount((count) => count - 1)}> - </button>
      <Counter/>
    </div>
  );
}

export default App;
