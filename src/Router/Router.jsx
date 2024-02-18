import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from '../Home/Home';
import Footer from '../Shared/Footer/Footer';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: '/',
            element: <Footer></Footer>
        }
      ]
    },
]);

export default router;