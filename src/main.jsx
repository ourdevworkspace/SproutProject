import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import { router } from './router/index.jsx';
import MyProvider from './context/cartContext';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
      <RouterProvider router={router}/>
    </MyProvider>
  </React.StrictMode>,
)
