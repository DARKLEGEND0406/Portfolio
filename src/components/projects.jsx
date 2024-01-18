import React, { useState } from "react";
import "../style/projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description: "This is a description of project 1.",
      image: "",
      github: "",
    },
    {
      name: "Project 2",
      description: "This is a description of project 2.",
      image: "",
      github: "",
    },
    {
      name: "Project 3",
      description: "This is a description of project 3.",
      image: "",
      github: "",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const renderCard = (project) => {
    return (
      <div
        className="card"
        key={project.name}
        onClick={() => setSelectedProject(project)}
      >
        <img src={project.image} alt={project.name} className="card-image" />
      </div>
    );
  };

  const renderFrameContent = (project) => {
    return (
      <div
        className={`frame-content ${
          project.name === selectedProject.name ? "active" : ""
        }`}
        key={project.name}
      >
        <img src={project.image} alt={project.name} className="frame-image" />
        <h3 className="frame-title">{project.name}</h3>
        <p className="frame-description">{project.description}</p>
        <a href="#" className="frame-link">
          View Project
        </a>
      </div>
    );
  };

  return (
    <section id="projects" key="projects">
      <div className="project">
        <div className="frame">
          {projects.map((project) => renderFrameContent(project))}
        </div>
        <div className="card-container">
          {projects.map((project) => renderCard(project))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
