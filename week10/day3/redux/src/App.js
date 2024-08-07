import './App.css';
import Counter from './features/counter/Counter';
import Users from './features/users/Users';

function App() {
  return (
    <div className="App">      
      <h2>Redux Toolkit</h2>
      <Users/>
      {/* <Counter/> */}
    </div>
  );
}

export default App;
