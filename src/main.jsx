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
import StudentDashboard from './StudentDashboard/StudentDashboard';
import SelectedClasses from './StudentDashboard/SelectedClasses';
import EnrolledClasses from './StudentDashboard/EnrolledClasses';
import Private from './Authenticate/Private';
import Payment from './StudentDashboard/Payment';
import PaymentHistory from './StudentDashboard/PaymentHistory';
import StudentRoute from './Authenticate/Routes/StudentRoute';

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
      {
        path: "/studentdashboard",
        element: <Private><StudentDashboard></StudentDashboard></Private>,
        children: [
          {
            path: "/studentdashboard/selected",
            element: <StudentRoute><SelectedClasses></SelectedClasses></StudentRoute>
          },
          {
            path: "/studentdashboard/enroled",
            element: <EnrolledClasses></EnrolledClasses>
          },
          {
            path: "/studentdashboard/payment",
            element: <Payment></Payment>
          },
          {
            path: "/studentdashboard/history",
            element: <PaymentHistory></PaymentHistory>
          },
          {
            path: "/studentdashboard/payment/:id",
            element: <Private><Payment></Payment></Private>,
            loader: ({ params }) => fetch(`http://localhost:5000/selectedclasses/${params.id}`)
          },
        ]
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
