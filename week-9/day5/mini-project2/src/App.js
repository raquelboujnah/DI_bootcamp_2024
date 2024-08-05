import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Pictures from './component/Pictures';




function App() {
  return (
    <div className="App">
      <h1>Snap Shot</h1>
      <div className='linkContainer'>
        <Link className='link' to={'/mountains'}>Mountains</Link>{' '}
        <Link className='link' to={'/beaches'}>Beaches</Link>{' '}
        <Link className='link' to={'/birds'}>Birds</Link>{' '}
        <Link className='link' to={'/food'}>Food</Link>
      </div>
      <Routes>
        <Route path='/' element={<Pictures/>}/>
        <Route path='/:query' element={<Pictures/>}/>
      </Routes>
    </div>
  );
}

export default App;
