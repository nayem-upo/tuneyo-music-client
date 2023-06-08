import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layouts from './Layouts/Layouts.jsx';
import Home from './HomePage/Home.jsx';
import Container from './Components/Container.jsx';
import Login from './Authenticate/Login.jsx';
import Register from './Authenticate/Register.jsx';
import AuthProvider from './Authenticate/AuthProvider.jsx';
import Instructors from './InstructorsPage/Instructors.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
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
        element: <Register></Register>
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </AuthProvider>
  </React.StrictMode>,
)
