import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <form className="signup">
      <div className="signup_form">
        <div className="logo">
          <img src="/logo.png" alt="Skill Logo" height="35px" width="35px" />
          <p>Skill</p>
        </div>
        <div className="form_detail">
          <h2>Sign up</h2>
          <h4>To continue with Us</h4>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter Email address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button type="button" className="signup_btn">SIGN UP</button>
          <p>Already a customer? <Link to="/login" className="login_now">Login now</Link></p>
        </div>
      </div>
    </form>
  );
};

export default Signup;