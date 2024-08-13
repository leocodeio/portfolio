import React from "react";
import Header from "../../common/Header";
import "./Achievements-Awards.css";
import { IoLinkSharp } from "react-icons/io5";

const achievementsData = [
  {
    title: "GATE - 2024 DA Rank",
    description: "All India Rank: 1243",
    url: "https://www.linkedin.com/posts/sai-harsha-vardhan-pittada-8a9a74252_hello-everyone-hope-you-are-doing-great-activity-7174765328843878400-3oPv/?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "AWS Hackathon",
    description: "Secured top prize as part of a winning team of six members",
    url: "https://www.linkedin.com/posts/sai-harsha-vardhan-pittada-8a9a74252_awshackathon-teamsynergy-cloudchampions-activity-7106236966815363072-6oC2/?utm_source=share&utm_medium=member_desktop",
  },
];

const educationData = [
  {
    institution: "Anil Neerukonda Institute Of Technologies And Sciences",
    degree: "BTech in Computer Science (DS)",
    years: "2021 – Present",
    gpa: "9.43/10.0",
    learnings:
      "Database Management Systems, Computer Networks, Operating Systems, Machine Learning, Data Science, Data Structures and Algorithms.",
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate, MPC",
    years: "2019 – 2021",
    gpa: "9.82/10.0",
    learnings:
      "Probability, Algebra, Coordinate Geometry, Statistics, Aptitude and Reasoning.",
  },
  {
    institution: "Sri Chaitanya Techno School",
    degree: "High School",
    years: "2018 – 2019",
    gpa: "10.0/10.0",
    learnings: "Basics of Science, Mathematics and general studies.",
  },
];

const AchievementsAwards = () => {
  return (
    <div>
      <Header />
      <section className="achievements-awards-section">
        <h2>Achievements and Awards</h2>
        <div className="achievements-awards-container">
          {achievementsData.map((achievement, index) => (
            <div className="achievements-awards-item" key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>

              <a
                href={achievement.url}
                className="achievements-awards-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLinkSharp  size={20}/>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <div className="education-container">
          {educationData.map((education, index) => (
            <div className="education-item" key={index}>
              <h3>{education.institution}</h3>
              <span>{education.degree}</span>
              <span>{education.years}</span>
              <p>GPA: {education.gpa}</p>
              <p>Learnings: {education.learnings}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AchievementsAwards;
