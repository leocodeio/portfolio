import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <Link to="/" className="logo">
        Harsha
      </Link>

      <FaBars className="menu-icon" onClick={toggleMenu} />

      <nav className={isMenuOpen ? "active" : ""}>
        <Link to="/" className={isActive("/") ? "active" : ""} onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/services" className={isActive("/services") ? "active" : ""} onClick={toggleMenu}>
          Services
        </Link>
        <Link to="/skills" className={isActive("/skills") ? "active" : ""} onClick={toggleMenu}>
          Skills
        </Link>
        <Link to="/education" className={isActive("/education") ? "active" : ""} onClick={toggleMenu}>
          Education
        </Link>
        <Link to="/experience" className={isActive("/experience") ? "active" : ""} onClick={toggleMenu}>
          Experience
        </Link>
        <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={toggleMenu}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
