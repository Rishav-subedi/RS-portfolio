import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-illustration">
          {/* Placeholder for illustration */}
          <img
            src="./Coding-bro.svg"
            alt="About Me Illustration"
            className="illustration"
          />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi there! I’m Rishav Subedi, an aspiring software developer
            passionate about building interactive and user-friendly web
            applications. With a strong foundation in modern web technologies
            and a love for crafting seamless user experiences, I strive to
            create impactful solutions that make a difference.
          </p>
          <ul className="highlights">
            <li>Proficient in React.js, Node.js, MongoDB, and FastAPI.</li>
            <li>
              Experienced with responsive web design and modern CSS frameworks.
            </li>
            <li>
              Developed end-to-end solutions using different technologies.
            </li>
            <li>Built a task management system with MERN stack principles.</li>
          </ul>
          <p>
            I’m enthusiastic about collaborating, learning, and contributing to
            meaningful projects that challenge and enhance my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
