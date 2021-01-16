import * as React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import me from "./assets/sergiosacj.jpg";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I'm Sérgio</h1>
          <h4>
            Software Engineer & Free and Open Software
            Contributor
          </h4>
          <Link
            to="/resume.pdf"
            target="_blank"
            download
            className="contact-me"
          >
            my resume
          </Link>
        </article>
        <article className="hero-img">
          <img src={me} alt="myself" className="hero-photo" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
