import React from "react";
import "../styles/LandingPage.css";
import ProjectGrid from "./sections/ProjectCard";
import Navbar from "./sections/Navbar";
import AboutMe from "./sections/AboutMe";
import Intro from "./sections/Intro";
import Contact from "./sections/Contact";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Intro />
      <AboutMe />
      <ProjectGrid />
      <Contact />
    </div>
  );
};

export default LandingPage;
