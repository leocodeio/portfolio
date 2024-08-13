import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust the scroll position as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <Link to="/" className="logo">
        Harsha
      </Link>

      <FaBars className="menu-icon" onClick={toggleMenu} />

      <nav className={isMenuOpen ? "active" : ""}>
        <Link
          to="/"
          className={isActive("/") ? "active" : ""}
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={isActive("/projects") ? "active" : ""}
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          to="/services"
          className={isActive("/services") ? "active" : ""}
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          to="/skills"
          className={isActive("/skills") ? "active" : ""}
          onClick={toggleMenu}
        >
          Skills
        </Link>
        <Link
          to="/a&a"
          className={isActive("/a&a") ? "active" : ""}
          onClick={toggleMenu}
        >
          Achievements & Awards
        </Link>
        <Link
          to="/experience"
          className={isActive("/experience") ? "active" : ""}
          onClick={toggleMenu}
        >
          Experience
        </Link>
        <Link
          to="/contact"
          className={isActive("/contact") ? "active" : ""}
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
