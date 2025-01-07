import React from "react";

const Intro = () => {
  return (
    <main id="intro" className="hero">
      <img
        src="./Code typing-bro.svg"
        alt="Code typing-bro Illustration"
        className="hero-illustration"
      />
      <div className="hero-content">
        <h1>
          Hi, I&#39;m <span className="highlight">Rishav Subedi</span>
        </h1>
        <p>Aspiring Software Developer | Building Impactful User Experiences</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
};

export default Intro;
