import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Shop from './component/Shop';
import { Route, Routes, Link } from 'react-router-dom';
import Products from './component/Products';
import Nav from './component/Nav';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Nav/>
//       <div className="App">
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<><About/> <Shop/></>}/>
//           <Route path='/shop' element={<Shop/>}/>
//           <Route path='/products/:id' element={<Products/>}/>
//         </Routes>
//       </div>
//     </>
    
//   );
// }




const Root = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <footer>copyright 2024</footer>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/products/:id',
        element: <Products/>
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router}/>
      </div>
    </>
    
  );
}




export default App;
