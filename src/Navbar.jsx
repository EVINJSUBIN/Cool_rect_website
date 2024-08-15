import React, { useState } from "react";
import "./nav.css";

const Navbar = ({ onHomeClick, onAboutClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">My Website</div>
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <ul className="navbar-items">
          <li className="navbar-item">
            <a href="#home" onClick={onHomeClick}>Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" onClick={onAboutClick}>About</a>
          </li>
          <li className="navbar-item"><a href="#services">Services</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
        <div className="toggle-bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
