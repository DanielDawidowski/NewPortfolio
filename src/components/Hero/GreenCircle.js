import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const CircleSVG = styled(motion.svg)`
  grid-column: 5 / 7;
  grid-row: 2 / 4;
`;

const HeroFigures1 = () => {
  return (
    <CircleSVG
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 2.5,
      }}
      exit={{ opacity: 1, scale: 0, y: 100 }}
      width="350"
      height="350"
      viewBox="0 0 350 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 60">
        <path
          id="Shape"
          d="M174.739 349.371C271.245 349.371 349.478 271.162 349.478 174.686C349.478 78.2094 271.245 0 174.739 0C78.2333 0 0 78.2094 0 174.686C0 271.162 78.2333 349.371 174.739 349.371Z"
          fill="#75CBB3"
        />
        <path
          id="Shape_2"
          d="M174.5 246C213.436 246 245 214.436 245 175.5C245 136.564 213.436 105 174.5 105C135.564 105 104 136.564 104 175.5C104 214.436 135.564 246 174.5 246Z"
          fill="#F6CB51"
        />
      </g>
    </CircleSVG>
  );
};

export default HeroFigures1;
