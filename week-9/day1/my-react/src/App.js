import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './component/UserFavoriteAnimals.js';
import Exercise from "./component/Exercise3.js"


const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Hello world</p>
        {myelement}
        {`React is ${sum} times better with JSX`}
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
        {/* <Exercise/> */}
      </header>
    </div>
  );
}

export default App;
