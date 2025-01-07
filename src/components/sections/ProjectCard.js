import React from "react";
import projects from "../../data/ProjectData";

const ProjectCard = ({ title, description, demoLink, repoLink, image }) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-card-buttons">
        <a
          href={demoLink}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <a
          href={repoLink}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

const ProjectGrid = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            repoLink={project.repoLink}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
