import React, { useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "./Menu";

// Styled Components
import { NavList } from "./styles/navigationStyles";

import { Flex } from "./styles/globalStyles";
import { HeaderNav, HamburgerMenu, Logo } from "./styles/headerStyles";

const Header = ({ history, toggleMenu, setToggleMenu }) => {
  console.log(history.location);
  const hamburger = useRef(null);
  return (
    <HeaderNav
      initial={{ y: -172 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
      exit={{ y: -172 }}
    >
      <Flex spaceAround paddingTop>
        <Logo>
          <Link className="link" to="/">
            {history.location.pathname === "/"
              ? "Portfolio"
              : history.location.pathname.substring(1)}
          </Link>
        </Logo>
        <HamburgerMenu
          onClick={() => setToggleMenu(!toggleMenu)}
          ref={hamburger}
        >
          <button
            style={{
              background: history.location.pathname === "/Contact" && "#2D3652",
            }}
          >
            <span
              style={{
                background: history.location.pathname === "/Contact" && "white",
              }}
            ></span>
            <span
              style={{
                background: history.location.pathname === "/Contact" && "white",
              }}
            ></span>
          </button>
        </HamburgerMenu>
      </Flex>
    </HeaderNav>
  );
};

export default withRouter(Header);
