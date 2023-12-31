import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../layout/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../layout/Dashboard';
import AllUsers from '../Dashboard/AllUsers/AllUsers';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import AddClass from '../Dashboard/AddClass/AddClass';
import MyClasses from '../Dashboard/MyClasses/MyClasses';
import InstructorRoute from './InstructorRoute';
import ManageClasses from '../Dashboard/ManageClasses/ManageClasses';
import Home from '../Home/Home/Home';
import SelectedClass from '../Dashboard/SelectedClass/SelectedClass';
import Payment from '../Dashboard/Payment/Payment';
import EnrolledClasses from '../Dashboard/EnrolledClasses/EnrolledClasses';
import TheClasses from '../TheClasses/TheClasses';
import InstructorSection from '../InstructorSection/InstructorSection';
import PaymentHistory from '../Dashboard/Payment/PaymentHistory';
import AdminHome from '../Dashboard/DashboardHome/AdminHome';
import InstructorHome from '../Dashboard/DashboardHome/InstructorHome';
import StudentHome from '../Dashboard/DashboardHome/StudentHome';
import ErrorPage from '../ErrorPage/ErrorPage';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'theclasses',
          element:<TheClasses></TheClasses>
        },
        {
          path:'instructor',
          element:<InstructorSection></InstructorSection>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path:'adminhome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'manageClasses',
          element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'instructorhome',
          element:<InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>

        },
        {
          path:'addclass',
          element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path:'myclasses',
          element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path:'studenthome',
          element:<StudentHome></StudentHome>
        },
        {
          path:'selectedcls',
          element:<SelectedClass></SelectedClass>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>,
          loader:({params}) => fetch(`https://rongin-academy-server-habibasabrina.vercel.app/studentpayment/${params.id}`)
        },
        {
          path:'paymenthistory',
          element:<PaymentHistory>s</PaymentHistory>

        },
        {
          path:'enrolledcls',
          element:<EnrolledClasses></EnrolledClasses>
        }
      ]
    }
  ]);

export default router;