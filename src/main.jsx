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
import InstructorDashboard from './InstructorDashboard/InstructorDashboard';
import InstructorRoute from './Authenticate/Routes/InstructorRoute';
import AddClass from './InstructorDashboard/AddClass';
import MyAddedClasses from './InstructorDashboard/MyAddedClasses';
import UpdateClass from './InstructorDashboard/UpdateClass';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import ManageClasses from './AdminDashboard/ManageClasses';
import ManageUsers from './AdminDashboard/ManageUsers';
import AdminRoute from './Authenticate/Routes/AdminRoute';
import ErrorPage from './Authenticate/Routes/ErrorPage';
import AboutUs from './AboutUsPage/AboutUs';
import Contact from './ContactPage/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage />,
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
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/classes",
        element: <Classes></Classes>
      },
      {
        path: "/studentdashboard",
        element: <Private><StudentRoute><StudentDashboard></StudentDashboard></StudentRoute></Private>,
        children: [
          {
            path: "/studentdashboard/selected",
            element: <StudentRoute><SelectedClasses></SelectedClasses></StudentRoute>
          },
          {
            path: "/studentdashboard/enroled",
            element: <StudentRoute><EnrolledClasses></EnrolledClasses></StudentRoute>
          },
          {
            path: "/studentdashboard/payment",
            element: <StudentRoute><Payment></Payment></StudentRoute>
          },
          {
            path: "/studentdashboard/history",
            element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
          },
          {
            path: "/studentdashboard/payment/:id",
            element: <Private><StudentRoute><Payment></Payment></StudentRoute></Private>,
            loader: ({ params }) => fetch(`https://tuneyo-server.vercel.app/selectedclasses/${params.id}`)
          },
        ]
      },
      {
        path: "/instructordashboard",
        element: <Private><InstructorRoute><InstructorDashboard></InstructorDashboard></InstructorRoute></Private>,
        children: [
          {
            path: "/instructordashboard/addclass",
            element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
          },
          {
            path: "/instructordashboard/enroled",
            element: <InstructorRoute><MyAddedClasses></MyAddedClasses></InstructorRoute>
          },
          {
            path: "/instructordashboard/update/:id",
            element: <InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>,
            loader: ({ params }) => fetch(`https://tuneyo-server.vercel.app/classes/toupdate/${params.id}`)
          },
        ]
      },
      {
        path: "/admindashboard",
        element: <Private><AdminRoute><AdminDashboard></AdminDashboard></AdminRoute></Private>,
        children: [
          {
            path: "/admindashboard/manageclasses",
            element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
          {
            path: "/admindashboard/manageusers",
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
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
