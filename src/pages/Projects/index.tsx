import * as React from "react";
import "./index.scss";
import { projects } from "./_projects";

const Projects: React.FC = () => {
  return (
    <div className="container">
      <div className="projects-page">
        <h1>my projects</h1>
        <div className="underline"></div>
        <div className="projects">
          <div className="projects-container">
            {projects.map((project) => {
              const {
                name,
                source,
                technologies,
                description,
              } = project;
              return (
                <article>
                  <h3>{name}</h3>
                  <p>{description.slice(0, 200)}...</p>
                  <ul>
                    {technologies.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                  <div className="links">
                    <a
                      href={source}
                      rel="noreferrer"
                      target="_blank"
                    >
                      source code
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
