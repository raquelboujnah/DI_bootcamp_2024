import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './component/Home';
import Shop from './component/Shop';
import Profile from './component/Profile';
import Nav from './component/Nav';
import ErrorBoundary from './ErrorBoundary';
import PostList from './component/PostList';
import Example1 from './component/Example_1';
import Example2 from './component/Example_2';
import Example3 from './component/Example_3';
import FectchPost from './component/Exercise4';
import { useEffect } from 'react';


//exercise1
// function App() {
//   return (
//     <>
//       <nav>
//         <Nav/>
//         <Routes>
//           <Route path='/' element={
//             <ErrorBoundary>
//                <Home />
//             </ErrorBoundary>
//             } />
//           <Route path='/profile' element={
//             <ErrorBoundary>
//               <Profile />
//             </ErrorBoundary>
//             } />
//           <Route path='/shop' element={
//             <ErrorBoundary>
//               <Shop />
//             </ErrorBoundary>
//             } />
//         </Routes>
//       </nav>
//     </>
//   );
// }


// exercise2
// function App() {
//   return (
//     <>
//       <PostList/>
//     </>
//   );
// }

// exercise3
// function App() {
//   return (
//     <>
//       <h1>Hello</h1>
//       <Example1/>
//       <Example2/>
//       <Example3/>
//     </>
//   );
// }

// exercise4
function App() {
  return (
    <>
      <h1>Hello</h1>
      <FectchPost/>
    </>
  );
}
export default App;
