import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './pages/Home/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import AddToy from './components/AddToy/AddToy.jsx';
import MyToys from './components/MyToys/MyToys.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: '/alltoy',
        element: <AllToys></AllToys>,
        loader: ()=> fetch('http://localhost:5000/toys')
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>
      },
      {
        path: "mytoy",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute> 
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-sky-200 p-0 m-0'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
