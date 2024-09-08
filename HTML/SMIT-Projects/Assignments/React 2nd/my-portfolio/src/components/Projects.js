// src/components/Projects.js
import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "AI Podcast Generator",
    description:
      "Transforms written content into captivating, lifelike podcasts using AI.",
    link: "https://github.com/your-repo/ai-podcast-generator",
  },
  {
    title: "Bank Web App",
    description: "A web application for managing accounts and transactions.",
    link: "https://github.com/your-repo/bank-web-app",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
