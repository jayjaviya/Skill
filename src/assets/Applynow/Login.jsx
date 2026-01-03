import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <form className="login">
      <div className="login_form">
        <div className="logo">
          <img src="/logo.png" alt="Skill Logo" height="35px" width="35px" />
          <p>Skill</p>
        </div>
        <div className="form_detail">
          <h2>Login</h2>
          <h4>To continue with Us</h4>
          <input type="text" placeholder="Email address or username" />
          <input type="password" placeholder="Password" />

          <label className="remember_me">
            <input type="checkbox" defaultChecked name="remember" /> Remember me
          </label>
          
          <button type="button" className="login_btn">LOG IN</button>
          <a href="#" className="forgot_password">Forgot username or password?</a>
          <p>Already a customer? <Link to="/signup" className="login_now">Sign up</Link></p>
        </div>
      </div>
    </form>
  );
};

export default Login;