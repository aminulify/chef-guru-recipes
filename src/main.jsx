import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './Router/Router';
import { ProviderContext } from './Context/ProviderContext';
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProviderContext>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </ProviderContext>
)
