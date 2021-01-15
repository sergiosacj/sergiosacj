import * as React from "react";
import "./index.scss";
import { projects } from "./_projects";

const Projects: React.FC = () => {
  return (
    <div className="container">
      <div className="projects-page">
        <h1>projects</h1>
        <div className="underline"></div>
        <div className="projects">
          {projects.map((project) => {
            const {
              name,
              source,
              technologies,
              description,
            } = project;
            return <article></article>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
