import { useEffect, useState } from "react";
import "./Register.css";
import logo from "../../assets/Logo.png";
import {apiUrl} from '../../constant/constants';
import { toast } from "react-toastify";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const [submitSuccess, setSubmitSuccess] = useState("false");

  const [userDataForm, setUserDataForm] = useState({
    username: "",
    birth: "",
    gender: "",
    email: "",
    phone: "",
    role: "Student",
    level: "uninformed",
    purpose: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptcha = () => {
    setCaptchaValue("target.value");
    console.log(captchaValue);
  };

  const fetchData = async (data) => {
    try{
      const res = await axios.post(apiUrl + "/students",data);
      console.log(res);
      if(res.status === 200)
        {
          setSubmitSuccess("true");
          toast.success("Register successfully");
        }
    }
    catch(err){
      console.log(err);
      toast.error("Register failed");
      const error = err.response.data.error.details.errors[0];
      if(error.path[0] === "email"){
        if(error.message === "This attribute must be unique")
        toast.error("Email is already in use");
        else
        toast.error("Email is not in the correct format");
      }
      else if(error.path[0] === "phone"){
        if(error.message === "This attribute must be unique")
        toast.error("Phone number is already in use");
        else
        toast.error("Phone number is not in the correct format");
      }
      else if(error.path[0] === "username"){
        if(error.message === "This attribute must be unique")
          toast.error("Username is already in use");
        else
          toast.error("Username is required");
      }
      else if(error.path[0] === "birth"){
        toast.error("Birth is required");
      }
      else 
        toast.error("Server error");
    }
  };

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

    // Send Data to db
    if (
      (userDataForm.username !== "") &
      (userDataForm.username !== undefined) &
      ((userDataForm.email !== "") & (userDataForm.email !== undefined)) &
      ((userDataForm.birth !== "") & (userDataForm.birth !== undefined)) &
      ((userDataForm.gender !== "") & (userDataForm.gender !== undefined)) &
      ((userDataForm.phone !== "") & (userDataForm.phone !== undefined)) &
      ((userDataForm.role !== "") & (userDataForm.role !== undefined)) &
      ((userDataForm.level !== "") &
        (userDataForm.level !== undefined)) &
      ((userDataForm.purpose !== "") & (userDataForm.purpose !== undefined)) &
      (grecaptcha.getResponse().length > 0)
    ) {
      const data = {
        data: {
        username: userDataForm.username,
        birth: userDataForm.birth,
        email: userDataForm.email,
        gender: userDataForm.gender,
        phone: userDataForm.phone,
        role: userDataForm.role,
        level: userDataForm.level,
        purpose: userDataForm.purpose
        // username :"Phamm dfsdfsSon",
        // birth: "2004-11-15",
        // gender: "male",
        // email : "pdfddsfdfdssdfdson@gmail.com",
        // phone : "0921411142",
        // role: "Student",
        // purpose :" biet nhieu hon nhung gi chua biet",
        // level : "expert"
         }
      };
      fetchData(data);
      console.log(data);
    }

    var error = document.getElementsByClassName("error");
    for (let i = 0; i < error.length; i++) {
      error[i].innerHTML = "";
    }

    // Handle error for username
    if (
      (userDataForm.username === "") |
      (userDataForm.username === undefined)
    ) {
      let errorItem = document.getElementById("error_username");
      errorItem.innerHTML = "Username is required.";
      setSubmitSuccess("false");
    }

    // Handle error for email (sai dinh dang)
    const emailInput = userDataForm.email;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput)) {
      let errorItem = document.getElementById("error_email");
      errorItem.innerHTML = "Email is not in the correct format.";
      setSubmitSuccess("false")
    }

    if ((userDataForm.email === "") | (userDataForm.email === undefined)) {
      let errorItem = document.getElementById("error_email");
      errorItem.innerHTML = "Email is required.";
      setSubmitSuccess("false");
    }

    // Handle error for date of birth
    if ((userDataForm.birth === "") | (userDataForm.birth === undefined)) {
      let errorItem = document.getElementById("error_birth");
      errorItem.innerHTML = "Birth is required.";
      setSubmitSuccess("false");
    }

    // Handle error for gender
    if ((userDataForm.gender === "") | (userDataForm.gender === undefined)) {
      let errorItem = document.getElementById("error_gender");
      errorItem.innerHTML = "Gender is required.";
      setSubmitSuccess("false");
    }

    // Handle error for phone
    const phoneInput = userDataForm.phone;
    const phonePattern = /[0-9]{10,11}/;

    if (!phonePattern.test(phoneInput)) {
      let errorItem = document.getElementById("error_phone");
      errorItem.innerHTML = "Phone number is not in the correct format.";
      setSubmitSuccess("false")
    }

    if ((userDataForm.phone === "") | (userDataForm.phone === undefined)) {
      let errorItem = document.getElementById("error_phone");
      errorItem.innerHTML = "Phone is required.";
      setSubmitSuccess("false");
    }

    // Handle error for role
    if ((userDataForm.role === "") | (userDataForm.role === undefined)) {
      let errorItem = document.getElementById("error_role");
      errorItem.innerHTML = "Role is required.";
      setSubmitSuccess("false");
    }
    // Handle error for level
    if (
      (userDataForm.level === "") |
      (userDataForm.level === undefined)
    ) {
      let errorItem = document.getElementById("error_level");
      errorItem.innerHTML = "level is required.";
      setSubmitSuccess("false");
    }

    // Handle error for purpose
    if ((userDataForm.purpose === "") | (userDataForm.purpose === undefined)) {
      let errorItem = document.getElementById("error_purpose");
      errorItem.innerHTML = "Purpose is required.";
      setSubmitSuccess("false");
    }

    //Handle error for captcha

    const captchaResponse = grecaptcha.getResponse();
    
    if (!captchaResponse.length > 0) {
      let errorItem = document.getElementById("error_captcha");
      errorItem.innerHTML = "Captcha is required.";
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
                  className="text-black"
                  onChange={(e) => handleChange(e)}
                  required
                ></input>
                <div id="error_username" className="error"></div>
              </div>

              <div>
                <label>Date of birth</label>
                <input
                  type="date"
                  name="birth"
                  onChange={(e) => handleChange(e)}
                  className="text-black"
                  required
                ></input>
                <div id="error_birth" className="error"></div>
              </div>

              <div className="gender-selection">
                <label>Gender</label>

                <content>
                <label htmlfor="male" className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    onChange={(e) => handleChange(e)}
                    className="text-black"
                    required
                  ></input>
                  Male
                </label>

                <label htmlFor="female" className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="text-black"
                    onChange={(e) => handleChange(e)}
                  ></input>
                  Female
                </label>

                <label htmlFor="other" className="gender">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    className="text-black"
                    onChange={(e) => handleChange(e)}
                  ></input>
                  Other
                </label>
                </content>

                <div id="error_gender" className="error"></div>
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                  className="text-black"
                  onChange={(e) => handleChange(e)}
                ></input>
                <div id="error_email" className="error"></div>
              </div>

              <div>
                <label>Phone number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your phone number"
                  className="text-black"
                  onChange={(e) => handleChange(e)}
                ></input>
                <div id="error_phone" className="error"></div>
              </div>

              <div className="select-role">
                <label>You are </label>
                <select
                  name="role"
                  onChange={(e) => handleChange(e)}
                  className="role text-black"
                >
                  <option>Student</option>
                  <option>Employee</option>
                  <option>Other</option>
                </select>

                <div id="error_role" className="error"></div>
              </div>

              <div className="select-knowledge">
                <label>Knowledge about AI </label>
                <select
                  name="level"
                  onChange={(e) => handleChange(e)}
                  className="level text-black"
                >
                  <option>Uninformed</option>
                  <option>Basic understanding</option>
                  <option>Knowledgeable</option>
                  <option>Expert</option>
                </select>

                <div id="error_level" className="error"></div>
              </div>

              <div className="goals">
                <label>Your goals</label>
                <input
                  type="text"
                  className="purpose, text-black"
                  name="purpose"
                  onChange={(e) => handleChange(e)}
                ></input>

                <div id="error_purpose" className="error"></div>
              </div>

              <div >
                <ReCAPTCHA
                  sitekey="6LcE2fYpAAAAAHPVQ1Am21vm32BxOwVap36PJ-Y3"
                  onChange={handleCaptcha}
                  className="authentication"
                />

                <div id="error_captcha" className="error"></div>
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