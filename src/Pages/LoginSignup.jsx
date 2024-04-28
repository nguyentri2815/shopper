import React from "react";

import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="container">
        <div className="loginSignup-form">
          <h3>Sign Up</h3>
          <div className="loginSignup-field">
            <input type="text" placeholder="Your name" />
          </div>
          <div className="loginSignup-field">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="loginSignup-field">
            <input type="password" placeholder="PassWord" />
          </div>
          <div className="loginSignup-btn">Continue</div>
          <p>
            Already have an account?{" "}
            <span className="loginSignup-here">Login here</span>
          </p>
          <div className="loginSignup-agree">
            <input type="checkbox" />
            <p>By continuing i agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
