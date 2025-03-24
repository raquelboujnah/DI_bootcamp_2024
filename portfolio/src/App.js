import logo from './logo.svg';
import './App.css';
import Navbar from './component/NavBar';
import Skills from './component/Skills';
import Projects from './component/Projects';
import AboutMe from './component/AboutMe';



function App() {
  return (
    <>
     <Navbar/>
      <div className='App'>
        <AboutMe/>
        <Skills/>
        <Projects/>
      </div>
    </>
   
  );
}

export default App;
