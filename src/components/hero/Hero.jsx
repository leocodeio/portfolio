import React from "react";
import "./Hero.css";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowLeft,
} from "react-icons/fa";
const Hero = () => {
  return (
    <div className="home">
      <div className="home-img">
        <img src="trail7.png" alt="Harsha" />
      </div>
      <div className="home-content">
        <h1>
          Hi, I’m <span>Harsha</span>
        </h1>
        <h3 className="typing-text">
          I'm a <span></span>
        </h3>
        <p>
          Hey there! Harsha, a passionate software developer with a knack for
          turning complex problems into elegant solutions. I’m always up for a
          challenge and love collaborating on exciting projects. Let’s connect
          and see where our shared interests can take us!
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/sai-harsha-vardhan-pittada-8a9a74252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/leocodeio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/leocodeio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/leocodeio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@leocodeio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
        <div style={{ display: "flex" }}>
          <a
            href="https://drive.google.com/file/d/1xS3EYL80qoEzinq8HGOWW-eCsNruX64x/view?usp=sharing"
            className="btn"
          >
            Hire me
          </a>
          <div
            className="resume-link"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            <FaArrowLeft style={{ marginRight: "5px" }} />
            <span>Connect</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
