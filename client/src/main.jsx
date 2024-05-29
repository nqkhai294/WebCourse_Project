import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage.jsx';
import Register from './components/Register/Register.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <ToastContainer 
        theme='dark'
        position='top-right'
        autoClose={3000}
        closeOnClick
        pauseOnHover={false} />
        <App /> 
    </BrowserRouter>
  </React.StrictMode>
);