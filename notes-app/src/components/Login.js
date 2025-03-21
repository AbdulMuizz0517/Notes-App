import React, { useState } from "react";
import "./Auth.css";
import ForgotPassword from "./ForgotPassword"; 
import Signup from "./Signup"; // Import Signup component

const Login = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  if (showForgotPassword) {
    return <ForgotPassword goBack={() => setShowForgotPassword(false)} />;
  }

  if (showSignup) {
    return <Signup goBack={() => setShowSignup(false)} />;
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
        <button type="submit">Login</button>
      </form>
      <p className="forgot-password-link" onClick={() => setShowForgotPassword(true)}>
        Forgot Password?
      </p>
      <p>Don't have an account? <span className="signup-link" onClick={() => setShowSignup(true)}>Sign up</span></p>        
    </div>
  );
};

export default Login;
