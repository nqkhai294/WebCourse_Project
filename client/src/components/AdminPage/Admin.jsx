import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../../constant/constants';

const Admin = () => {
  useEffect(() => {
    window.location.href = apiUrl + '/admin';
  }, []);

  return null; // Trả về null vì component này chỉ có tác dụng chuyển hướng
};

export default Admin;
