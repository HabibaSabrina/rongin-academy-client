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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
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
          path:'manageClasses',
          element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
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
          path:'selectedcls',
          element:<SelectedClass></SelectedClass>
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>,
          loader:({params}) => fetch(`http://localhost:5000/studentpayment/${params.id}`)
        }
      ]
    }
  ]);

export default router;