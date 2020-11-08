import styled from "styled-components";
import { motion } from "framer-motion";

export const Logo = styled.h1`
  position: relative;
  z-index: 2;
  transform: skew(-7deg);

  @media (max-width: 1300px) {
    text-align: center;
  }
  .link {
    color: ${(props) => props.theme.light_black};
    font-size: 5.5rem;
    letter-spacing: 5px;
    @media (min-width: 301px) and (max-width: 600px) {
      font-size: 4rem;
    }
    @media (min-width: 200px) and (max-width: 300px) {
      font-size: 3rem;
    }
  }
`;

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  color: ${(props) => props.theme.red};
  z-index: 99;

  /* @media (max-width: 700px) {
    margin-top: 1rem;
  } */
`;

export const HamburgerMenu = styled.div`
  z-index: 99;

  button {
    border: none;
    background: none;
    outline: none;
    width: 60px;
    height: 60px;
    z-index: 100;
    background: ${(props) => props.theme.white};
    border-radius: 50%;
    cursor: pointer;
    span {
      width: 40px;
      height: 4px;
      display: block;
      background: ${(props) => props.theme.light_black};
      border-radius: 13px;
      margin: 8px;
      padding-left: 4px;
    }
  }
`;
