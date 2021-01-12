import * as React from "react";
import "./index.scss";
import { icons } from "./_icons";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <ul className="icons">
        {icons.map((icon) => {
          return <li className="social-icons">{icon}</li>;
        })}
      </ul>
      <h4>Made by Sérgio de Almeida Cipriano Júnior</h4>
    </div>
  );
};

export default Footer;
