import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [submitSuccess, setSubmitSuccess] = useState("false");

  const [userDataForm, setUserDataForm] = useState({
    identityCode: "",
    username: "",
    birth: "",
    gender: "",
    email: "",
    phone: "",
    role: "Sinh viên",
    knowleadge: "Chưa biết gì",
    purpose: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDataForm({
      ...userDataForm,
      [name]: value,
    });
  };

  const handleOnFocus = (e) => {};

  const hanldeSubmit = (e) => {
    setUserDataForm({
      identityCode: "",
      username: "",
      birth: "",
      gender: "",
      email: "",
      phone: "",
      role: "Sinh viên",
      knowleadge: "Chưa biết gì",
      purpose: "",
    });
    setSubmitSuccess("true");

    var error = document.getElementsByClassName("error");
    for (let i = 0; i < error.length; i++) {
      error[i].innerHTML = "";
    }

    if (userDataForm.username === "") {
      let errorItem = document.getElementById("error_username");
      errorItem.innerHTML = "Username is required.";
      setSubmitSuccess("false");
    }

    if (userDataForm.email === "") {
      let errorItem = document.getElementById("error_email");
      errorItem.innerHTML = "Email is required.";
    }

    if (userDataForm.birth === "") {
      let errorItem = document.getElementById("error_birth");
      errorItem.innerHTML = "Birth is required.";
    }

    if (userDataForm.gender === "") {
      let errorItem = document.getElementById("error_gender");
      errorItem.innerHTML = "Gender is required.";
    }

    if (userDataForm.phone === "") {
      let errorItem = document.getElementById("error_phone");
      errorItem.innerHTML = "Phone is required.";
    }

    if (userDataForm.role === "") {
      let errorItem = document.getElementById("error_role");
      errorItem.innerHTML = "Role is required.";
    }

    if (userDataForm.knowleadge === "") {
      let errorItem = document.getElementById("error_knowleadge");
      errorItem.innerHTML = "Knowleadge is required.";
    }

    if (userDataForm.purpose === "") {
      let errorItem = document.getElementById("error_purpose");
      errorItem.innerHTML = "Purpose is required.";
    }

    if (submitSuccess) console.log(userDataForm);
  };

  return (
    <div className="khung">
      {submitSuccess === "false" && (
        <div className="Register-form">
          <div className="register-container">
            <div className="register-header">A Logo</div>

            <div className="register-title">Connect with us!</div>

            <div className="register-welcome">
              Join the course, open the future!
            </div>

            <div className="register-form">
              <div id="name-of-user">
                <label>Họ tên</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Your name"
                  onChange={(e) => handleChange(e)}
                ></input>
                <span id="error_username" className="error"></span>
              </div>

              <div>
                <label>Ngày sinh</label>
                <input
                  type="date"
                  name="birth"
                  onChange={(e) => handleChange(e)}
                ></input>
                <span id="error_birth" className="error"></span>
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

                <span id="error_gender" className="error"></span>
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => handleChange(e)}
                ></input>
                <span id="error_email" className="error"></span>
              </div>

              <div>
                <label>Số điện thoại</label>
                <input
                  type="text"
                  name="phone"
                  onChange={(e) => handleChange(e)}
                ></input>
                <span id="error_phone" className="error"></span>
              </div>

              <div>
                <label>Bạn là </label>
                <select name="role" onChange={(e) => handleChange(e)}>
                  <option>Sinh viên</option>
                  <option>Người đi làm</option>
                  <option>Khác</option>
                </select>

                <span id="error_role" className="error"></span>
              </div>

              <div>
                <label>Kiến thức về AI </label>
                <select name="knowleadge" onChange={(e) => handleChange(e)}>
                  <option>Chưa biết gì</option>
                  <option>Mới tiếp cận</option>
                  <option>Có hiểu biết</option>
                  <option>Chuyên gia</option>
                </select>

                <span id="error_knowleadge" className="error"></span>
              </div>

              <div>
                <label>Mong muốn qua khóa học</label>
                <input
                  type="text"
                  className="purpose"
                  name="purpose"
                  onChange={(e) => handleChange(e)}
                ></input>

                <span id="error_purpose" className="error"></span>
              </div>

              <div className="submit-form">
                <button
                  className="form-submit-btn"
                  onClick={() => hanldeSubmit(Event)}
                >
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {console.log(submitSuccess)}

      {submitSuccess === "true" && (
        <div className="submit-success">
          <div className="submit-success-notify">
            <div className="notification"> Đăng ký thành công.</div>
            <div className="home_back">
              <a href="/">&#60;&#60; Về trang chủ</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
