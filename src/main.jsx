import React from 'react'
import ReactDOM from 'react-dom/client'
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
import Classes from './ClassesPage/Classes.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
      {
        path: "/classes",
        element: <Classes></Classes>
      },
    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
