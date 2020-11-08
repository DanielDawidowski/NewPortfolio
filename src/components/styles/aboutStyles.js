import styled from "styled-components";
import { motion } from "framer-motion";
import Foto1 from "../../assets/about/me.jpg";

export const AboutStyles = styled(motion.div)`
  height: 100vh;
  background-color: ${(props) => props.theme.yellow};
  max-width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(7, 1fr);
  overflow: hidden;
`;

export const AboutFigures = styled(motion.svg)`
  max-width: 100%;
  grid-column: 2 / 6;
  grid-row: 2 / 7;
  /* justify-content: center; */
  @media (min-width: 200px) and (max-width: 700px) {
    display: none;
  }
`;

export const AboutBg = styled(motion.svg)`
  grid-column: 7 / 10;
  grid-row: 1 / 7;
  /* @media (min-width: 200px) and (max-width: 300px) {
    grid-column: 1 / 4;
    grid-row: 5 / 7;
  } */
`;

export const LeafSVG = styled(motion.svg)`
  grid-column: 1 / 4;
  grid-row: 7 / 8;
  @media (min-width: 200px) and (max-width: 800px) {
    display: none;
  }
`;

export const AboutCardStyles = styled(motion.div)`
  grid-column: 7 / 10;
  grid-row: 2 / 7;
  background-color: ${(props) => props.theme.light_black};
  z-index: 1;
  border-radius: 27px;
  margin-top: 2rem;
  @media (min-width: 1001px) and (max-width: 1300px) {
    grid-column: 6 / 10;
    grid-row: 2 / 7;
  }
  @media (min-width: 701px) and (max-width: 1000px) {
    grid-column: 5 / 10;
    grid-row: 2 / 7;
  }
  @media (min-width: 201px) and (max-width: 700px) {
    grid-column: 1 / 11;
    grid-row: 2 / 6;
    height: 100px;
    margin: 2rem 1rem 1rem 1rem;
  }
  .card-body {
    margin: 1rem;
    background-color: ${(props) => props.theme.white};

    /* width: 100%; */
    border-radius: 27px;
    .card-details {
      margin: 1rem 0 0 1rem;
      padding-top: 1rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 8px;
      .card-image {
        position: relative;
        background-image: url(${Foto1});
        background-size: cover;
        background-position: 0% 50%;
        width: 100%;
        grid-column: 1 / 2;
        grid-row: 1 / 4;
        border-radius: 27px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (min-width: 200px) and (max-width: 500px) {
          background-position: 50% 50%;
          width: 100px;
        }
        .dots {
          position: absolute;
          width: 70px;
          left: -5%;
          bottom: -65%;
        }
      }
      .card-profile {
        grid-column: 2 / 4;
        grid-row: 1 / 4;
        h3 {
          color: ${(props) => props.theme.red};
          letter-spacing: 2px;
        }
        h2 {
          font-family: "Montserrat", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
            "Helvetica Neue", sans-serif;
          @media (min-width: 200px) and (max-width: 500px) {
            font-size: 0.8rem;
          }
        }
      }
    }
    .card-description {
      padding: 1rem;
      font-size: 1rem;
      line-height: 30px;
      text-align: justify;
      font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      @media (min-width: 200px) and (max-width: 1400px) {
        font-size: 0.8rem;
      }
      @media (min-width: 200px) and (max-width: 400px) {
        line-height: 20px;
      }
    }
  }

  /* @media (min-width: 200px) and (max-width: 300px) {
    grid-column: 1 / 4;
    grid-row: 5 / 7;
  } */
`;

export const SocialIcons = styled(motion.div)`
  grid-column: 2 / 4;
  grid-row: 7 / 8;
  margin-top: -1rem;
  @media (min-width: 200px) and (max-width: 800px) {
    display: none;
  }
  svg {
    width: 70px;
    @media (min-width: 200px) and (max-width: 800px) {
      width: 40px;
      margin-top: 2rem;
      grid-column: 1 / 4;
    }
    &:last-child {
      margin-left: 0.5rem;
    }
  }
  @media (min-width: 800px) and (max-width: 1150px) {
    grid-column: 3 / 5;
    grid-row: 7 / 8;
  }
`;
