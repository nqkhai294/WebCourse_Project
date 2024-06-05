import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage.jsx';
import Register from './components/Register/Register.jsx';
import News from './components/News/News.jsx';
import AboutCourse from './components/AboutCourse/AboutCourse.jsx';

const Route_0 = () => {
    return (
        <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/news" element={<News />} />
            <Route path="/aboutcourse" element={<AboutCourse />} />
        </Route>
      </Routes>
    )
}

export default Route_0;