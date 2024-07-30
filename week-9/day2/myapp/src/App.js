// import React, { useState } from "react"
// import logo from './logo.svg';
// import './App.css';
// import User from "./component/Users";
// import DisplayCar from "./component/Car";
// import Events from "./component/Event";
// import Phone from "./component/Phone";
// import Color from "./component/Color";
// import Voting from "./component/Voting";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       users: [],
//       searchValue: ''
//     };
   
//   }

//   fetchData = async() => {
//       try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await res.json();
//         this.setState({users:data})
//       }catch(err){
//         console.log(err);
//       }
//   };

//   handleSearch = (e) => {
//     this.setState({searchValue: e.target.value});
//   };

//   render(){
//     const filter = this.state.users.filter(item => {
//       return item.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
//     });
//       return(
//         <div>
//           <h1>Users</h1>
//           <button onClick={this.fetchData}>Get Users</button>
//           <input onChange = {this.handleSearch} placeholder="search..."/>
//           {this.state.searchValue}
        
//           {filter.map((item) => {
//             return <User key={item.id} {...item} />;
//           })}
//         </div>
//       )
//   }
// }

// function App(){
//   const [users, setUsers] = useState([])
//   const fetchData = async() => {
//     try{
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json();
//       setUsers(data)
//     }catch(err){
//       console.log(err);
//     }
//   };

  
//   return(
//     <div>
//       <h1>Users</h1>
//       <button onClick={fetchData}>Get Users</button>
//       {users.map((item) => {
//         return <User key={item.id} {...item}/>
//       })}
//     </div>
//   )
// }

//exercise1
// const carinfo = {name: "Ford", model: "Mustang"};
// function App() {
//   return (
//     <div>
//       <DisplayCar props={carinfo} />
//     </div>
//   );
// }

//exercise2
// function App(){
//   return(
//     <div>
//       <Events/>
//     </div>
//   )
// }

//erxercise3
// function App(){
//   return(
//     <div>
//       <Phone/>
//     </div>
//   )
// }

//erxercise4
// function App(){
//   return(
//     <div>
//       <Color/>
//     </div>
//   )
// }


//daily challenge
// function App(){
//   return(
//     <div>
//       <Voting/>
//     </div>
//   )
// }



export default App;
