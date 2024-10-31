import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <section className="skills-section">
        <h2 className="section-title">Technologies and Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Libraries/Packages</h3>
            <ul>
              <li>React</li>
              <li>NodeJs</li>
              <li>Express</li>
              <li>Mongoose</li>
              <li>pg</li>
              <li>Flask</li>
              <li>Django</li>
              <li>Tensorflow</li>
              <li>Remix</li>
              <li>PrismaORM</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Software</h3>
            <ul>
              <li>Postman</li>
              <li>Hoppscotch</li>
              <li>MongoCompass</li>
              <li>PgAdmin</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Vercel</li>
              <li>Render</li>
              <li>Glitch</li>
              <li>Supabase</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Soft Skills</h3>
            <ul>
              <li>Communication and Community Building</li>
              <li>Collaboration</li>
              <li>Adaptability</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
