import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        Harsha
      </Link>

      <nav>
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/services">Services</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
