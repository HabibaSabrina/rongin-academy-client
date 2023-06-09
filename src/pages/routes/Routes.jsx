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
      element:<Dashboard></Dashboard>,
      children: [
        {
          path:'allusers',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);

export default router;