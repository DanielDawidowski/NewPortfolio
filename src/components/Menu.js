import React from "react";
import { Link, withRouter } from "react-router-dom";

//Styled Components
// import { Menu } from "./styles/menuStyles";

const isActive = (history, path) =>
  history.location.pathname === path
    ? { color: "rgba(247, 127, 0, 0.8)" }
    : { color: "#EDEDED" };

const Menu = ({ history, toggleMenu, setToggleMenu }) => {
  return (
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
    </ul>
  );
};

export default withRouter(Menu);
