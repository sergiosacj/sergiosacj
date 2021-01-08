import * as React from "react";
import "./index.scss";
import { menu } from "./menu";
import logo from "./assets/logo2.svg";
import { FaBars } from "react-icons/fa";

const Navbar: React.FunctionComponent = () => {
  const [showFaBar, setShowFaBar] = React.useState<Boolean>(
    false
  );
  const [showMenu, setShowMenu] = React.useState<Boolean>(false);
  const linksContainerRef = React.useRef<HTMLDivElement>(null);
  const linksRef = React.useRef<HTMLUListElement>(null);

  const checkWindowSize = () => {
    if (window.innerWidth < 900) {
      setShowFaBar(true);
    } else {
      setShowFaBar(false);
      setShowMenu(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    return () =>
      window.removeEventListener("resize", checkWindowSize);
  }, []);

  React.useEffect(() => checkWindowSize(), []);

  React.useEffect(() => {
    const linksHeight = showMenu
      ? `${linksRef!.current!.getBoundingClientRect().height}px`
      : "0px";
    linksContainerRef!.current!.style.height = linksHeight;
  }, [showMenu]);

  return (
    <>
      <div className="navbar">
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          {!showFaBar ? (
            <ul className="menu">
              {menu.map((links, index) => {
                return <li key={index}>{links}</li>;
              })}
            </ul>
          ) : (
            <FaBars
              className={`fabar-btn ${showMenu && "rotate"}`}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          )}
        </div>
      </div>
      <div className="responsive-menu" ref={linksContainerRef}>
        <ul ref={linksRef}>
          {menu.map((links, index) => {
            return <li key={index}>{links}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
