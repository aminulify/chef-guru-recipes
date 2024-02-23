import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from '../Home/Home';
import Footer from '../Shared/Footer/Footer';
import Blog from '../Blog/Blog';
import Header from '../Shared/Header/Header';
import Main from '../MainLayout/Main';
import Login from '../Login/Login';
import Register from '../Login/Register';
import Recipe from '../Recipe/Recipe';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/login',
            element: <Login></Login>
            
        },
        {
            path: '/registration',
            element: <Register></Register>
            
        },
        {
          path: '/recipe',
          element: <Recipe></Recipe>,
          loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
        }
      ]
    }
]);

export default router;