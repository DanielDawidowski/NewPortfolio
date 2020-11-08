import styled from "styled-components";
import { motion } from "framer-motion";

export const CardStyles = styled(motion.div)`
  grid-column: 4 / 7;
  grid-row: 3 / 5;
  max-width: 100%;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.black};
  height: 290px;
  border-radius: 137px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (min-width: 801px) and (max-width: 1200px) {
    grid-column: 3 / 7;
    grid-row: 2 / 5;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    grid-column: 3 / 7;
    grid-row: 2 / 5;
  }

  @media (min-width: 200px) and (max-width: 600px) {
    grid-column: 2 / 7;
    grid-row: 2 / 4;
  }

  @media (min-width: 200px) and (max-width: 1400px) {
    border-radius: 27px;
  }

  .pattern {
    padding: 1rem;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    margin-left: 3rem;
    @media (min-width: 501px) and (max-width: 700px) {
      margin-left: 1rem;
    }
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

export const CardBody = styled(motion.div)`
  position: relative;
  background-color: ${(props) => props.theme.grey};
  margin: 1rem;
  padding: 1.4rem;
  border-radius: 137px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 4;
  grid-row: 1 / 3;

  @media (max-width: 500px) {
    grid-column: 1 / 4;
  }

  @media (min-width: 200px) and (max-width: 1400px) {
    border-radius: 27px;
  }

  .hero-icon {
    width: 80px;
    @media (min-width: 801px) and (max-width: 1400px) {
      width: 60px;
    }
    @media (min-width: 451px) and (max-width: 800px) {
      width: 50px;
    }
    @media (min-width: 200px) and (max-width: 450px) {
      width: 40px;
    }
  }

  h1 {
    font-size: 4rem;
    margin-right: 0.4rem;
    @media (min-width: 801px) and (max-width: 1400px) {
      font-size: 3rem;
    }
    @media (min-width: 451px) and (max-width: 800px) {
      font-size: 2rem;
    }
    @media (min-width: 200px) and (max-width: 450px) {
      font-size: 2rem;
    }
  }

  .carousel-initialized {
    width: 410px;
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 1001px) and (max-width: 1600px) {
      width: 290px;
      height: 150px;
    }
    @media (min-width: 801px) and (max-width: 1000px) {
      width: 260px;
      height: 150px;
    }
    @media (min-width: 501px) and (max-width: 800px) {
      width: 190px;
      height: 150px;
    }
    @media (min-width: 200px) and (max-width: 500px) {
      width: 200px;
      height: 150px;
    }

    .carousel-track {
      width: 410px;
      height: 200px;
      @media (min-width: 1001px) and (max-width: 1600px) {
        width: 290px;
        height: 150px;
      }
      @media (min-width: 801px) and (max-width: 1000px) {
        width: 260px;
        height: 150px;
      }
      @media (min-width: 501px) and (max-width: 800px) {
        width: 190px;
        height: 150px;
      }
      @media (min-width: 200px) and (max-width: 500px) {
        width: 200px;
        height: 150px;
      }
    }
  }

  .carousel-dots-active {
    background-color: ${(props) => props.theme.green};
    border-radius: 13px;
    button {
      color: ${(props) => props.theme.green};
    }
  }

  div {
    display: grid;

    span {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 3rem;
    }
  }
`;

export const CardImage = styled(motion.div)``;

export const CardSVG = styled(motion.div)`
  img {
    width: 30px;
  }
`;

export const CardBodyContent = styled(motion.div)`
  ul {
    position: absolute;
    li {
      background-color: ${(props) => props.theme.offWhite};
      color: ${(props) => props.theme.gold_transparent};
      padding: 10px;
      margin-top: 7px;
      border-radius: 13px;
      border: 1px solid ${(props) => props.theme.gold_transparent};
      cursor: pointer;
    }
  }
  h2 {
    color: ${(props) => props.theme.white};
  }
`;
