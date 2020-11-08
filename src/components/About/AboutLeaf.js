import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { LeafSVG } from "../styles/aboutStyles";

const AboutLeafIcon = () => {
  return (
    <LeafSVG
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
      }}
      exit={{ opacity: 1, y: 200 }}
      width="400"
      height="200"
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.81742e-05 200L200 200C310.456 200 400 110.456 400 2.71797e-05L200 1.83601e-05C89.5441 1.34893e-05 6.29724e-05 89.544 5.81742e-05 200Z"
        fill="#75CBB3"
      />
      <path
        d="M199.31 99.7501L100.159 99.7501C44.8433 99.7501 -3.26748e-06 144.522 -7.29812e-06 199.75L99.1514 199.75C154.469 199.75 199.31 154.978 199.31 99.7501Z"
        fill="#F1E3CF"
      />
    </LeafSVG>
  );
};

export default AboutLeafIcon;
