import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Public folder ka image directly src="/logo.png" se use hota hai */}
        <img src="/logo.png" alt="Chanakya Logo" className="logo" />
        <span className="brand-name">Chanakya</span>
      </div>
      
      {/* Hamburger Menu Button */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/admission">Admission</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
