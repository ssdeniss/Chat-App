import React, { useState } from "react";
import Cookies from "universal-cookie";
import signBg from "../assets/signup.jpg";
import axios from "axios";
const Auth = () => {
  const cookies = new Cookies();
  const initialState = {
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    avatarURL: "",
  };
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, userName, password, avatarURL, phoneNumber } = form;
    const URL = "http://localhost:5000/auth";
    const {
      data: { token, userId, hashedPassword },
    } = await axios.post(`${URL}/${isSignup ? "signup" : "login"}`, {
      userName,
      password,
      avatarURL,
      phoneNumber,
      fullName,
    });
    cookies.set("token", token);
    cookies.set("username", userName);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);
    if (isSignup) {
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatarURL", avatarURL);
      cookies.set("hashedPassword", hashedPassword);
    }
    window.location.reload();
  };
  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign up" : "Sign in"}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  placeholder="Full Name"
                  name="fullName"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="userName">User Name</label>
              <input
                placeholder="User Name"
                name="userName"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  placeholder="Phone Number"
                  name="phoneNumber"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  placeholder="Avatar URL"
                  name="avatarURL"
                  type="text"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "Sign Up" : "Sign In"}</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchMode} style={{ marginLeft: "5px" }}>
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signBg} alt="" />
      </div>
    </div>
  );
};

export default Auth;
