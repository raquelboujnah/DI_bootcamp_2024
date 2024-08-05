import logo from './logo.svg';
import './App.css';
import Shop from './component/Shop';
import Product from './component/Products';
import { Route, Routes } from 'react-router-dom';
// import Nav from './component/Nav';
// import { createBrowserRouter, RouterProvider, Outlet, Routes } from 'react-router-dom';

// const Root = () => {
//   return (
//     <>
//       <Outlet/>
//       <footer>copyright 2024</footer>
//     </>
//   )
// }

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root/>,
//     children: [
//       {
//         path: '/shop',
//         element: <Shop/>
//       },
//       {
//         path: '/products/:id',
//         element: <Products/>
//       },
//     ],
//   },
// ]);

// function App() {
//   return (
//     <div className="App">
//         <h1>Full Stack</h1>
//         <RouterProvider router={router}/>
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
        <h1>Full Stack</h1>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/product/:id' element={<Product/>}/>
        </Routes>
    </div>
  );
}

export default App;
