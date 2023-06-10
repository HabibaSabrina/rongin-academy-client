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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
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
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'addclass',
          element:<AddClass></AddClass>
        },
        {
          path:'myclasses',
          element:<MyClasses></MyClasses>
        }
      ]
    }
  ]);

export default router;