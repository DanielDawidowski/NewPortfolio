import React from "react";
import { HeroFiguresYellowStyles } from "../styles/homeStyles";
import { motion } from "framer-motion";

const HeroFigures3 = () => {
  return (
    <HeroFiguresYellowStyles
      initial={{ opacity: 0, y: -400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
      exit={{ opacity: 1, y: -400 }}
      viewBox="0 0 367 679"
    >
      <motion.path
        id="Shape"
        initial={{ y: -800 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
        }}
        exit={{ y: -800 }}
        d="M0 0H367V282.793C367 324.815 325.922 358.881 275.25 358.881C224.578 358.881 183.5 392.947 183.5 434.969V526.824C183.5 610.869 101.344 679 0 679V0Z"
        fill="#F6CB51"
      />
      <motion.path
        id="hero-figure23"
        initial={{ y: -1400 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.2,
        }}
        exit={{ y: -1400 }}
        d="M81.3706 576C100.424 576 115.871 560.554 115.871 541.5C115.871 522.446 100.424 507 81.3706 507C62.3168 507 46.8706 522.446 46.8706 541.5C46.8706 560.554 62.3168 576 81.3706 576Z"
        fill="#F2F2F2"
      />
      <motion.path
        id="hero-figure21"
        initial={{ y: -800 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.8,
        }}
        exit={{ y: -800 }}
        d="M312.871 82C327.23 82 338.871 70.3594 338.871 56C338.871 41.6406 327.23 30 312.871 30C298.511 30 286.871 41.6406 286.871 56C286.871 70.3594 298.511 82 312.871 82Z"
        fill="#F12C56"
      />
      <motion.path
        id="hero-figures22"
        initial={{ y: -800, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
        exit={{ y: -800, opacity: 0 }}
        d="M270.871 253C304.56 253 331.871 225.689 331.871 192C331.871 158.311 304.56 131 270.871 131C237.181 131 209.871 158.311 209.871 192C209.871 225.689 237.181 253 270.871 253Z"
        fill="#75CBB3"
      />
    </HeroFiguresYellowStyles>
  );
};

export default HeroFigures3;
