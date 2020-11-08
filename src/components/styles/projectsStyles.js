import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsStyles = styled(motion.div)`
  height: 100vh;
  background-color: ${(props) => props.theme.green};
  max-width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(7, 1fr);
  overflow: hidden;

  @media (min-width: 200px) and (max-width: 800px) {
    height: 280vh;
    /* overflow: unset; */
  }
`;

export const ProjectsBg = styled(motion.svg)`
  grid-column: 1 / 11;
  grid-row: 5 / 8;
  /* justify-content: center; */
  @media (min-width: 200px) and (max-width: 800px) {
    grid-column: 1 / 11;
    grid-row: 2 / 8;
  }
`;

export const ProjectsCardsStyles = styled(motion.ul)`
  grid-column: 1 / 11;
  grid-row: 1 / 8;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  margin: 3rem 0;

  @media (min-width: 200px) and (max-width: 1000px) {
    display: grid;
    margin: 9rem 0;
  }

  /* justify-content: center; */
  /* @media (min-width: 200px) and (max-width: 700px) {
    display: none;
  } */
`;

export const ProjectCardStyles = styled(motion.li)`
  border-radius: 27px 27px 27px 27px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 1fr);

  width: 350px;
  height: 450px;
  background-color: ${(props) => props.theme.light_black};

  @media (min-width: 801px) and (max-width: 1200px) {
    width: 300px;
    height: 400px;
    margin: 1rem 0;
  }

  @media (min-width: 401px) and (max-width: 800px) {
    width: 270px;
    height: 230px;
    margin: 1rem 0;
  }

  @media (min-width: 200px) and (max-width: 400px) {
    width: 250px;
    height: 200px;
    margin: 1rem 0;
  }

  img {
    max-width: 100%;
    grid-column: 1 / 11;
    grid-row: 1 / 8;
  }

  .card-content {
    grid-column: 1 / 11;
    grid-row: 5 / 8;
    /* padding-left: 1rem; */
  }

  .card-content > * {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1.2rem;
  }

  .card-link {
    font-size: 0.8rem;
    a {
      color: ${(props) => props.theme.white};
      font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      @media (min-width: 200px) and (max-width: 700px) {
        font-size: 0.7rem;
      }
    }
  }

  .card-tech {
  }
  /* @media (min-width: 200px) and (max-width: 700px) {
    display: none;
  } */
`;
