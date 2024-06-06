import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage.jsx';
import Register from './components/Register/Register.jsx';
import News from './components/News/News.jsx';
import NewContent from './components/News/NewContent.jsx';
import AboutCourse from './components/AboutCourse/AboutCourse.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewContent />} />
            <Route path="/aboutcourse" element={<AboutCourse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
