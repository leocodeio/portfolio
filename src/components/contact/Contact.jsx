import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const emailData = {
      service_id: process.env.REACT_APP_MAIL_SERVICE_ID,
      template_id: process.env.REACT_APP_MAIL_TEMPLATE_ID,
      user_id: process.env.REACT_APP_MAIL_PUBLIC_KEY,
      template_params: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    };
    // console.log(emailData)
    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        emailData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Message sent successfully:", response.data);
      alert("Your mail is sent!");
    } catch (error) {
      console.error(
        "Failed to send message:",
        error.response ? error.response.data : error.message
      );
      alert(
        "Oops... " + (error.response ? error.response.data : error.message)
      );
    }

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <section className="contact-section">
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
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={
              formData.name === "" ||
              formData.email === "" ||
              formData.message === ""
            }
            className="submit-btn"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactMe;
