import * as React from "react";
import "./index.scss";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
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
          <button className="contact-me">contact me</button>
        </article>
        <article className="hero-img"></article>
      </div>
    </div>
  );
};

export default Hero;
