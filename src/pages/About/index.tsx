import * as React from "react";
import { knowledges } from "./_knowledge";
import "./index.scss";

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="about-me">
        <h1>about me</h1>
        <div className="underline"></div>
        <p className="description">
          Hello, I am Sérgio Cipriano, software engineering
          student from UnB. I currently study optimization,
          supervised by John Lenon Cardoso Gardenghi. I spend
          most of my day contributing to free software, studying
          new languages, frameworks and creating new ones too.
        </p>
        <div className="knowledge">
          {knowledges.map((name, index) => {
            return <span key={index}>{name}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
