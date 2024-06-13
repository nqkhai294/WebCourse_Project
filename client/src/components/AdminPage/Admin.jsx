import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { imgUrl } from '../../constant/constants';

const Admin = () => {
  useEffect(() => {
    window.location.href = imgUrl + '/admin';
  }, []);

  return null; // Trả về null vì component này chỉ có tác dụng chuyển hướng
};

export default Admin;
