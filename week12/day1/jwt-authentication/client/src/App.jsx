import Home from './component/Home';
import LoginRegister from './component/LoginRegister';
import Header from './component/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Auth from './auth/Auth';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />   
        <Route path='/login' element={<LoginRegister title={'Login'}/>} /> 
        <Route path='/register' element={<LoginRegister title={'Register'}/>} />     
        <Route path='/dash' element={<Auth><Dashboard /></Auth>} />     

      </Routes>
    </>
  )
}

export default App
