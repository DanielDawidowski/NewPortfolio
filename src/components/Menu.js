import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, NavHeader, CloseNav, NavList } from "./styles/navigationStyles";
import GithubIcon from "../components/Hero/Github.js";
import LinkedInIcon from "../components/Hero/LinkedIn.js";
import { ReactComponent as LogoBig } from "../assets/navigation/Logo-big.svg";

//Styled Components
// import { Menu } from "./styles/menuStyles";

const isActive = (history, path) =>
  history.location.pathname === path
    ? { color: "rgba(247, 127, 0, 0.8)" }
    : { color: "#EDEDED" };

const Menu = ({ history, toggleMenu, setToggleMenu }) => {
  return (
    <NavList displayBlock>
      <ul>
        <li>
          <Link style={isActive(history, "/")} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={isActive(history, "/About")} to="/About">
            About
          </Link>
        </li>
        <li>
          <Link style={isActive(history, "/Projects")} to="/Projects">
            Projects
          </Link>
        </li>
        <li>
          <Link style={isActive(history, "/Contact")} to="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <a href="https://github.com/DanielDawidowski">
            <GithubIcon className="github" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-dawidowski-924905165/">
            <LinkedInIcon className="linkedIn" />
          </a>
          <LogoBig />
        </li>
      </ul>
    </NavList>
  );
};

export default withRouter(Menu);
