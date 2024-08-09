import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Header from "../common/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home-img">
          <img src="trails2.png" alt="Harsha" />
        </div>
        <div className="home-content">
          <h1>
            Hi, It's <span>Harsha</span>
          </h1>
          <h3 className="typing-text">
            I'm a <span></span>
          </h3>
          <p>
            Hey there! I’m Leo, a passionate software developer with a knack
            for turning complex problems into elegant solutions. I’m always up for a
            challenge and love collaborating on exciting project. Let’s connect and see where our shared
            interests can take us!
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>

          <a href="https://www.youtube.com" className="btn">
            Hire me
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
