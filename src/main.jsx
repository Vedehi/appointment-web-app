import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link } from 'react-router-dom'
// import "../node_modules/bootstrap/scss/bootstrap";

import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import SubmitOne from './components/SubmitOne.jsx'

const router = createBrowserRouter([{path : "/" , element:<App />}, {path : "/SubmitOne" , element:<><SubmitOne /></>}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
