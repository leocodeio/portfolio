import React from "react";
import Header from "../common/Header";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import AchievementsAwards from "./achievements&awards/Achievements-Awards";
const Home = () => {
  return (
    <>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="a&a">
        <AchievementsAwards />
      </section>
      <section id="experience">
        <Experience />
      </section>
    </>
  );
};

export default Home;
