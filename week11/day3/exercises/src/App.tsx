import './App.css'
import Greeting from './component/Greeting';
import UseState from './component/UseState';
import UserCard from './component/UserCard';

function App() {

  return (
    <>
      <Greeting name={'Raquel'}/>
      <UseState/>
      <UserCard/>
    </>
  )
}

export default App