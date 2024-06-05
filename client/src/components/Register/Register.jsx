import { useEffect, useState } from "react";
import "./Register.css";
import logo from "../../assets/Logo.png";

const Register = () => {
  const [submitSuccess, setSubmitSuccess] = useState("false");

  const [userDataForm, setUserDataForm] = useState({
    username: "",
    birth: "",
    gender: "",
    email: "",
    phone: "",
    role: "Student",
    knowleadge: "Uninformed",
    purpose: "",
  });

  useEffect(() => {
    if (submitSuccess === 'true') {
      console.log(userDataForm)
    }
  }, [submitSuccess])

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
      ...userDataForm,
    });

    if (
      ((userDataForm.username !== "" &userDataForm.username !== undefined)) &
      ((userDataForm.email !== "") & (userDataForm.email !== undefined)) &
      ((userDataForm.birth !== "") & (userDataForm.birth !== undefined)) &
      ((userDataForm.gender !== "") & (userDataForm.gender !== undefined)) &
      ((userDataForm.phone !== "") & (userDataForm.phone !== undefined)) &
      ((userDataForm.role !== "") & (userDataForm.role !== undefined)) &
      ((userDataForm.knowleadge !== "") & (userDataForm.knowleadge !== undefined)) &
      ((userDataForm.purpose !== "") & (userDataForm.purpose !== undefined))
    ) {
      setSubmitSuccess("true");
    }

    var error = document.getElementsByClassName("error");
    for (let i = 0; i < error.length; i++) {
      error[i].innerHTML = "";
    }

    if (
      (userDataForm.username === "") |
      (userDataForm.username === undefined)
    ) {
      let errorItem = document.getElementById("error_username");
      errorItem.innerHTML = "Username is required.";
      setSubmitSuccess("false");
    }

    if ((userDataForm.email === "") | (userDataForm.email === undefined)) {
      let errorItem = document.getElementById("error_email");
      errorItem.innerHTML = "Email is required.";
      setSubmitSuccess("false");
    }

    if ((userDataForm.birth === "") | (userDataForm.birth === undefined)) {
      let errorItem = document.getElementById("error_birth");
      errorItem.innerHTML = "Birth is required.";
      setSubmitSuccess("false");
    }

    if ((userDataForm.gender === "") | (userDataForm.gender === undefined)) {
      let errorItem = document.getElementById("error_gender");
      errorItem.innerHTML = "Gender is required.";
      setSubmitSuccess("false");
    }

    if ((userDataForm.phone === "") | (userDataForm.phone === undefined)) {
      let errorItem = document.getElementById("error_phone");
      errorItem.innerHTML = "Phone is required.";
      setSubmitSuccess("false");
    }

    if ((userDataForm.role === "") | (userDataForm.role === undefined)) {
      let errorItem = document.getElementById("error_role");
      errorItem.innerHTML = "Role is required.";
      setSubmitSuccess("false");
    }

    if (
      (userDataForm.knowleadge === "") |
      (userDataForm.knowleadge === undefined)
    ) {
      let errorItem = document.getElementById("error_knowleadge");
      errorItem.innerHTML = "Knowleadge is required.";
      setSubmitSuccess("false");
    }

    if ((userDataForm.purpose === "") | (userDataForm.purpose === undefined)) {
      let errorItem = document.getElementById("error_purpose");
      errorItem.innerHTML = "Purpose is required.";
      setSubmitSuccess("false");
    }

    // console.log(submitSuccess)
  };

  return (
    <div className="khung">
      {submitSuccess === "false" && (
        <div className="Register-form">
          <div className="register-container">
            <div className="register-header">
              <img src={logo} className="logo-img"></img>
            </div>

            <div className="register-title">Connect with us!</div>

            <div className="register-welcome">
              Join the course, open the future!
            </div>

            <div className="register-form">
              <div id="name-of-user">
                <label>Your name</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Your name"
                  onChange={(e) => handleChange(e)}
                  required
                ></input>
                <span id="error_username" className="error"></span>
              </div>

              <div>
                <label>Date of birth</label>
                <input
                  type="date"
                  name="birth"
                  onChange={(e) => handleChange(e)}
                  required
                ></input>
                <span id="error_birth" className="error"></span>
              </div>

              <div>
                <label>Gender</label>

                <label for="male" className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    onChange={(e) => handleChange(e)}
                    required
                  ></input>
                  Male
                </label>

                <label for="female" className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => handleChange(e)}
                  ></input>
                  Female
                </label>

                <label for="other" className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={(e) => handleChange(e)}
                  ></input>
                  Other
                </label>

                <span id="error_gender" className="error"></span>
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  onChange={(e) => handleChange(e)}
                ></input>
                <span id="error_email" className="error"></span>
              </div>

              <div>
                <label>Phone number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your phone number"
                  onChange={(e) => handleChange(e)}
                ></input>
                <span id="error_phone" className="error"></span>
              </div>

              <div className="select-role">
                <label>You are </label>
                <select
                  name="role"
                  onChange={(e) => handleChange(e)}
                  className="role"
                >
                  <option>Student</option>
                  <option>Employee</option>
                  <option>Other</option>
                </select>

                <span id="error_role" className="error"></span>
              </div>

              <div className="select-knowledge">
                <label>Knowledge about AI </label>
                <select
                  name="knowleadge"
                  onChange={(e) => handleChange(e)}
                  className="knowleadge"
                >
                  <option>Uninformed</option>
                  <option>Basic understanding</option>
                  <option>Knowledgeable</option>
                  <option>Expert</option>
                </select>

                <span id="error_knowleadge" className="error"></span>
              </div>

              <div>
                <label>Your goals</label>
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
                  Register now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {submitSuccess === "true" && (
        <div className="submit-success">
          <div className="submit-success-notify">
            <div className="notification"> Register successfully.</div>
            <div className="home_back">
              <a href="/">&#60;&#60; Go to Homepage</a>
            </div>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default Register;
