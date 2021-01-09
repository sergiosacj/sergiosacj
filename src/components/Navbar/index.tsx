import * as React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { menu } from "./_menu";
import logo from "./assets/logo2.svg";
import { FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [showFaBar, setShowFaBar] = React.useState<Boolean>(
    false
  );
  const [showMenu, setShowMenu] = React.useState<Boolean>(false);
  const linksContainerRef = React.useRef<HTMLDivElement>(null);
  const linksRef = React.useRef<HTMLDivElement>(null);

  const checkWindowSize = () => {
    if (window.innerWidth < 900) {
      setShowFaBar(true);
    } else {
      setShowFaBar(false);
      setShowMenu(false);
    }
  };

  const mapMenu = (classname: string) => {
    const items = menu.map((links, index) => {
      return (
        <Link key={index} to={`/${links}`} className={classname}>
          {links}
        </Link>
      );
    });
    return items;
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
        <nav>
          <img src={logo} alt="logo" className="logo" />
          {!showFaBar ? (
            <ul className="menu" children={mapMenu("link")} />
          ) : (
            <FaBars
              className={`fabar-btn ${showMenu && "rotate"}`}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          )}
        </nav>
      </div>
      <div className="responsive-menu" ref={linksContainerRef}>
        <div
          ref={linksRef}
          className="container"
          children={mapMenu("responsive-link")}
        />
      </div>
    </>
  );
};

export default Navbar;
