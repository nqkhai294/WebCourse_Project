import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/Home/HomePage.jsx';
import Register from '../components/Register/Register.jsx';
import News from '../components/News/News.jsx';
import AboutCourse from '../components/AboutCourse/AboutCourse.jsx';
import NewContent from '../components/News/NewContent.jsx';
import useFetchData from '../hook/useFetchData';

const Routers = () => {

    const { data, loading, error } = useFetchData('/news?populate=%2A');
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    console.log(data);

    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/news" element={<News news={data?data:""} />} />
            <Route path="/news/:id" element={<NewContent news={data?data:""}/>} />
            <Route path="/aboutcourse" element={<AboutCourse />} />
        </Routes>
    )
}

export default Routers;
