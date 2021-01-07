import * as React from "react";
import "./index.scss";
import logo from "./assets/logo.svg";

const Navbar: React.FunctionComponent = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={`menu`}>
          <li>home</li>
          <li>about</li>
          <li>project</li>
          <li>blog</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
