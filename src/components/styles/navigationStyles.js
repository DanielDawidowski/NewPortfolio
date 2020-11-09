import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-color: ${(props) => props.theme.green};
  color: #000;
  z-index: 100;
  overflow: hidden;
  padding-top: 1rem;
`;

export const NavHeader = styled.div`
  top: 48px;
  position: relative;
  z-index: 100;

  h2 {
    color: ${(props) => props.theme.background};
    cursor: pointer;
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

export const CloseNav = styled(motion.div)`
  button {
    border: none;
    background: none;
    outline: none;
    width: 60px;
    height: 60px;
    margin-right: -1rem;
    cursor: pointer;
    z-index: 100;
    background: ${(props) => props.theme.white};
    border-radius: 50%;
    span {
      width: 40px;
      height: 4px;
      display: block;
      background: ${(props) => props.theme.black};
      border-radius: 13px;
      margin: 8px;
    }
  }
`;

export const NavList = styled.div`
  top: 148px;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  ul {
    padding: 0;
    display: flex;
    li {
      list-style: none;
      text-transform: uppercase;
      font-weight: 900;
      margin-left: 1rem;
      height: 100px;
      overflow: hidden;

      a {
        font-size: 1.6rem;
      }

      @media (max-width: 700px) {
        font-size: 1rem;
        height: 80px;
        line-height: 20px;
      }
      &:last-child {
        position: relative;
        height: 200px;
        @media (max-width: 700px) {
          width: 200px;
        }
        svg {
          @media (max-width: 700px) {
            width: 70px;
          }
          &:last-child {
            width: 250px;
            @media (max-width: 700px) {
              width: 70px;
            }
          }
        }
      }
    }
  }
  ${(props) =>
    props.displayNone &&
    css`
      top: 0;
      flex-direction: column;
      ul {
        justify-content: flex-end;
        margin-right: 1rem;
      }
      @media (max-width: 700px) {
        display: none;
      }
    `}
  ${(props) =>
    props.displayBlock &&
    css`
      ul {
        flex-direction: column;
        align-items: flex-start;
      }
      @media (min-width: 700px) {
        display: block;
      }
    `}
`;
