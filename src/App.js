import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import AchievementsAwards from "./components/achievements&awards/Achievements-Awards";
import Contact from "./components/contact/Contact";
import Experience from "./components/Experience";
import Projects from "./components/projects/Projects";


const App = () => {
  return (
    <Router>`
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/a&a" element={<AchievementsAwards />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
