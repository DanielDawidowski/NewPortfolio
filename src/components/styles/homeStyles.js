import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroFiguresStyles = styled(motion.svg)`
  background-color: ${(props) => props.theme.red};
  max-width: 100%;
  /* height: 100%; */
  margin-left: -1rem;
  grid-column: 1 / -1;
  grid-row: 5 / 7;
  justify-content: center;
`;

export const HeroFiguresStylesLeft = styled(motion.svg)`
  position: absolute;
  max-width: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 5;
  height: 100%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const HeroStyles = styled(motion.div)`
  height: 100vh;
  background-color: ${(props) => props.theme.red};
  max-width: 100%;
  position: relative;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  overflow: hidden;
  .social {
    @media (min-width: 1001px) {
      padding-left: 4rem;
      display: grid;
      grid-column: 7 / 8;
      grid-row: 3 / 6;
      height: 200px;
    }

    @media (min-width: 801px) and (max-width: 1000px) {
      margin-bottom: 1rem;
      grid-column: 1 / 7;
      grid-row: 6 / 7;
    }

    @media (min-width: 601px) and (max-width: 800px) {
      display: flex;
      margin-bottom: 1rem;
      grid-column: 2 / 7;
      grid-row: 6 / 7;
    }

    @media (min-width: 401px) and (max-width: 600px) {
      display: flex;
      margin-bottom: 1rem;
      grid-column: 2 / 7;
      grid-row: 6 / 7;
    }

    @media (min-width: 301px) and (max-width: 400px) {
      display: flex;
      margin-left: 3rem;
      margin-bottom: 1rem;
      grid-column: 1 / 7;
      grid-row: 6 / 7;
    }

    @media (min-width: 200px) and (max-width: 300px) {
      display: flex;
      grid-column: 1 / 7;
      grid-row: 6 / 7;
    }
  }
`;

export const HeroFiguresYellowStyles = styled(motion.svg)`
  height: 100%;
  max-width: 100%;
  position: relative;
  overflow-x: hidden;
  grid-column: 2 / span 4;
  grid-row: 1 / span 4;
  @media (max-width: 801px) {
    grid-column: 1 / span 4;
    grid-row: 1 / span 4;
  }
  @media (min-width: 381px) and (max-width: 800px) {
    height: 400px;
  }
  @media (min-width: 381px) and (max-width: 480px) {
    height: 380px;
  }
  @media (min-width: 301px) and (max-width: 380px) {
    height: 300px;
  }
  @media (min-width: 200px) and (max-width: 300px) {
    height: 260px;
  }
`;
