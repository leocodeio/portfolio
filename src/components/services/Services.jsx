import React from "react";
import Header from "../../common/Header";
import { IoLinkSharp } from "react-icons/io5";
import "./Services.css";

const servicesData = [
  {
    title: "Web Development",
    description: "Creating responsive and modern websites using the latest technologies.",
    url: "https://example.com/web-development",
  },
  // {
  //   title: "App Development",
  //   description: "Developing mobile applications for both iOS and Android platforms.",
  //   url: "https://example.com/app-development",
  // },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and user-friendly interfaces for web and mobile applications.",
    url: "https://example.com/ui-ux-design",
  },
  {
    title: "SEO Optimization",
    description: "Improving your website's visibility on search engines to attract more traffic.",
    url: "https://example.com/seo-optimization",
  },
];

const Services = () => {
  return (
    <div>
      <Header />
      <section className="services-section">
        <h2>Services</h2>
        <div className="services-container">
          {servicesData.map((service, index) => (
            <div className="services-item" key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <a
                href={service.url}
                className="services-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLinkSharp size={20} />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
