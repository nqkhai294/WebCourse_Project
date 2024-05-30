import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userDataForm, setUserDataForm] = useState({
    identityCode: "",
    username: "",
    birth: "",
    gender: "",
    email: "",
    phone: "",
    role: "",
    knowleadge: "",
    purpose: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDataForm({
      ...userDataForm,
      [name]: value,
    });
  };

  const handleOnFocus = (e) => {
    
  }

  const hanldeSubmit = (e) => {

    if (userDataForm.username === "") {
      
      let errorClass = document.createElement('span');
      errorClass.className = 'required';
      errorClass.innerHTML = '*Required'

      console.log(errorClass)

      let iclass = document.getElementById('name-of-user');
      console.log(iclass)
      iclass.appendChild(errorClass);
      
    } else console.log(userDataForm);
  };

  return (
    <div className="Register-form">
      <div className="register-container">
        <div className="register-header">A Logo</div>

        <div className="register-title">Connect with us!</div>

        <div className="register-welcome">
          Join the course, open the future!
        </div>

        <div className="register-form">
          <div id='name-of-user'>
            <label>Họ tên</label>
            <input
              type="text"
              name="username"
              placeholder="Your name"
              onChange={(e) => handleChange(e)}
            ></input>
            
          </div>

          <div>
            <label>Ngày sinh</label>
            <input
              type="date"
              name="birth"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div>
            <label>Giới tính</label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="male" className="gender">
              Nam
            </label>

            <input
              type="radio"
              name="gender"
              value="Nữ"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="female" className="gender">
              Nữ
            </label>

            <input
              type="radio"
              name="gender"
              value="Khác"
              onChange={(e) => handleChange(e)}
            ></input>
            <label for="other" className="gender">
              Khác
            </label>
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div>
            <label>Số điện thoại</label>
            <input
              type="text"
              name="phone"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div>
            <label>Bạn là </label>
            <select name="role" onChange={(e) => handleChange(e)}>
              <option>Sinh viên</option>
              <option>Người đi làm</option>
              <option>Khác</option>
            </select>
          </div>

          <div>
            <label>Kiến thức về AI </label>
            <select name="knowleadge" onChange={(e) => handleChange(e)}>
              <option>Chưa biết gì</option>
              <option>Tương đối hiểu</option>
              <option>Hiểu biết</option>
              <option>Chuyên gia</option>
            </select>
          </div>

          <div>
            <label>Mong muốn qua khóa học</label>
            <input
              type="text"
              className="purpose"
              name="purpose"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div className="submit-form">
            <button className="form-submit-btn" onClick={() => hanldeSubmit(Event)}>
              Đăng ký ngay
            </button>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Register;
