import * as React from "react";
import "./index.scss";
import logo from "./assets/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar: React.FunctionComponent = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const checkWindowSize = () => {
    window.innerWidth < 900
      ? setShowSidebar(true)
      : setShowSidebar(false);
  };

  React.useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    return () =>
      window.removeEventListener("resize", checkWindowSize);
  }, []);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        {!showSidebar ? (
          <ul className="menu">
            <li>home</li>
            <li>about</li>
            <li>project</li>
            <li>blog</li>
            <li>contact</li>
          </ul>
        ) : (
          <div className="fabar-btn">
            <FaBars />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
