import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import RightImg from "../../assets/contact/cU7wLFRyWWw.png";
import LeftImg from "../../assets/contact/Mohaka.png";

export const ContactStyles = styled(motion.div)`
  height: 100vh;
  background-color: ${(props) => props.theme.green};
  position: relative;
  overflow: hidden;

  @media (max-width: 500px) {
    height: 120vh;
    overflow: unset;
  }
`;

export const RegisterFormStyles = styled(motion.div)`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 1fr);

  .left {
    background-image: url(${LeftImg});
    background-size: cover;
    width: 100%;
    grid-column: 1 / 4;
    grid-row: 1 / 8;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(10, 1fr);

    @media (max-width: 1000px) {
      grid-column: 1 / 7;
    }

    @media (max-width: 500px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120vh;
      overflow: unset;
    }
  }

  .right {
    background-image: url(${RightImg});
    background-size: cover;
    grid-column: 4 / 7;
    grid-row: 1 / 8;
    width: 100%;
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

export const Form = styled(motion.form)`
  grid-column: 2 / 6;
  grid-row: 3 / 9;
  position: relative;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  border-radius: 26px;
  border: 2px solid ${(props) => props.theme.blue};
  padding: 2rem;
  line-height: 1.5;
  background: ${(props) => props.theme.light_black};

  @media (min-width: 1001px) and (max-width: 1500px) {
    grid-column: 2 / 6;
    grid-row: 3 / 10;
  }

  @media (min-width: 200px) and (max-width: 1000px) {
    grid-column: 2 / 6;
    grid-row: 3 / 10;
  }

  @media (max-width: 500px) {
    padding: 1rem;
    margin: 3rem 1rem 0 1rem;
  }

  label {
    display: flex;
    margin: 2rem 1rem;
  }

  input,
  textarea {
    width: 100%;
    border-radius: 12px;
    /* border: 10px solid ${(props) => props.theme.green}; */
    background-color: ${(props) => props.theme.white};
    padding: 0.5rem;
    margin: 0.3rem;
    font-size: 1rem;
    font-weight: 700;
    border: 1px solid black;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;

    &:focus {
      outline: 0;
      border: 3px solid ${(props) => props.theme.yellow};
    }
  }

  button {
    padding: 0.5rem;
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.font3};
    background-color: ${(props) => props.theme.green};
    border-radius: 13px;
    margin-left: 1.4rem;
  }
`;
