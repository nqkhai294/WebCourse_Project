import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/home';
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Routers;
