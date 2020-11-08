import React, { useState } from "react";
import Header from "./Header";
import Navigation from "./Navigation";

//Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
  red: "#F12C56",
  dark_red: "#D33367",
  white: "#ffffff",
  black: "#28203D",
  light_black: "#2D3652",
  grey: "#F1E3CF",
  yellow: "#F6CB51",
  orange: "#FF8B61",
  blue: "#94C0D4",
  green: "#75CBB3",
  light_green: "#75CBB3",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  font1: "0.8rem",
  font2: "1rem",
  font3: "1.4rem",
  font4: "3.2rem",
  font5: "2.4rem",
};

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  }
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased; 
}
body {
  font-size: 16px;
  font-family: 'Rouge Script', cursive;
  background: ${(props) => props.theme.light_green};
  overscroll-behavior: none;
  overflow-x: hidden;
  color: ${(props) => props.theme.brown};
  /* overflow: hidden; */
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.light_black};
}
  a:focus {
    outline: none;
  }

ul {
  list-style: none
}

li {
  list-style-type: none
}

img {
    max-width: 100%;
}
`;

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [ spinner, setSpinner ] = useState(false);

  //  useEffect(() => {
  //     setTimeout(() => setSpinner(true), 2000)
  //   }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Container> */}
      {/* {!spinner && <div>Your content</div>} */}
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <main>{children}</main>
      {/* </Container> */}
    </ThemeProvider>
  );
};

export default Layout;
