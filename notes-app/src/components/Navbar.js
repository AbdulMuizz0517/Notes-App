import React from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="logo">Notes App</div>
      <ul className="nav-links">
        <li><a href="#home" onClick={() => setCurrentPage("home")}>Homepage</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="btn" onClick={() => setCurrentPage("login")}>Login</button>
        <button className="btn signup" onClick={() => setCurrentPage("signup")}>Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
