import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
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
      <RouterLink to="/" className="logo">
        Harsha
      </RouterLink>

      <FaBars className="menu-icon" onClick={toggleMenu} />

      <nav className={isMenuOpen ? "active" : ""}>
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className={isActive("/") ? "active" : ""}
          onClick={toggleMenu}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className={isActive("/projects") ? "active" : ""}
          onClick={toggleMenu}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          className={isActive("/services") ? "active" : ""}
          onClick={toggleMenu}
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className={isActive("/skills") ? "active" : ""}
          onClick={toggleMenu}
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="a&a"
          smooth={true}
          duration={500}
          className={isActive("/a&a") ? "active" : ""}
          onClick={toggleMenu}
        >
          Achievements & Awards
        </ScrollLink>
        <ScrollLink
          to="experience"
          smooth={true}
          duration={500}
          className={isActive("/experience") ? "active" : ""}
          onClick={toggleMenu}
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className={isActive("/contact") ? "active" : ""}
          onClick={toggleMenu}
        >
          Contact
        </ScrollLink>
      </nav>
    </header>
  );
};

export default Header;
