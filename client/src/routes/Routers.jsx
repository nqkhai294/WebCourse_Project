import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/Home/HomePage.jsx';
import Register from '../components/Register/Register.jsx';
import News from '../components/News/News.jsx';
import AboutCourse from '../components/AboutCourse/AboutCourse.jsx';
import NewContent from '../components/News/NewContent.jsx';
import useFetchData from '../hook/useFetchData';
import Admin from '../components/Admin/Admin.jsx';

const Routers = () => {

    const { data, loading, error } = useFetchData('/news?populate=%2A');
    const { data: data2, loading: loading2, error: error2 } = useFetchData('/register-dates/1');
    console.log(data2);
    if (loading||loading2) {
        return <div>Loading...</div>;
    }
    if (error||error2) {
        return <div>Error: {error.message}</div>;
    }
    console.log(data);

    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutcourse" element={<AboutCourse date={data2?data2:""}/>} />
            <Route path="/register" element={<Register date={data2?data2:""} />} />
            <Route path="/news" element={<News news={data?data:""} />} />
            <Route path="/news/:id" element={<NewContent news={data?data:""}/>} />
            <Route path="/admin" element={<Admin />} />
            
        </Routes>
    )
}

export default Routers;
