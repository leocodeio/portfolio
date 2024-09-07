import React from "react";
import "./Projects.css";
import Header from "../../common/Header";

const projects = [
  {
    id: 5,
    title: "Catalyst",
    description:
      "Building Catalyst, a community platform designed to unite industrious individuals, offer cutting-edge technologies and services, and foster collaborative opportunities for emerging talent.",
    tools: "Node, React, MongoDB, Express, github pages, Vercel",
    imageUrl:
      "https://i.pinimg.com/736x/3f/58/20/3f582064e15e2f13546b0603cef5b968.jpg",
    projectUrl: "https://bufferxleo.github.io/catalyst-frontend/",
  },
  {
    id: 1,
    title: "Domain-In-Domain",
    description:
      "A user-friendly interface that stores pairs of URL and domain name, allowing domain names to be used for rendering or redirecting to the specified URLs.",
    tools: "Node, React, PostgreSQL, Express, Render, Vercel",
    imageUrl:
      "https://i.pinimg.com/originals/49/f6/b3/49f6b314d7873260af254d54ff96af64.png",
    projectUrl: "https://keerthana-essk.github.io/dod-frontend/",
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    description:
      "A fully functional multiplayer Tic-Tac-Toe game with efficient user management and real-time gameplay.",
    tools: "Node, React, MongoDB, Express, Socket-io, Atlas, Glitch",
    imageUrl:
      "https://i.pinimg.com/474x/d7/ec/37/d7ec375e6c3592f1833c9867fa232e3d.jpg",
    projectUrl: "https://hatakexleo.github.io/tic-tac-toe/",
  },
  {
    id: 3,
    title: "StarClassifier",
    description:
      "An image classification model integrated with a frontend UI, offering a user-friendly and responsive experience.",
    tools:
      "Python, Django, HTML, CSS, JS, CNN (Neural Networks), Wavelet transforms",
    imageUrl:
      "https://i.pinimg.com/474x/75/bd/32/75bd329004a692624f76b49bb572f881.jpg",
    projectUrl: "https://github.com/hatakexleo/ImgClassifier",
  },
  {
    id: 4,
    title: "AnimeSpam",
    description:
      "A service website for the anime editing community, allowing users to download available 4k upscaled twixtors.",
    tools: "Node, React, MongoDB, Express, Render, Vercel",
    imageUrl:
      "https://i.pinimg.com/236x/b1/78/e8/b178e87dd4ac18d778028a057f7c5714.jpg",
    projectUrl: "https://animespam.vercel.app/",
  },
  // "https://i.pinimg.com/564x/8b/48/a5/8b48a5dab7ad4a9fb026111f029c5210.jpg",
];

const Projects = () => {
  return (
    <>
      <Header />
      <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tools">Tools Used: {project.tools}</p>
              <a
                href={project.projectUrl}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
