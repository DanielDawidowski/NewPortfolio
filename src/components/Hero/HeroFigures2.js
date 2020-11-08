import React from "react";
import { HeroFiguresStylesLeft } from "../styles/homeStyles";
import { motion } from "framer-motion";

const HeroFigures2 = () => {
  return (
    <HeroFiguresStylesLeft
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.1,
      }}
      exit={{ opacity: 1 }}
      viewBox="0 0 203 621"
    >
      <rect
        id="Rectangle 23"
        x="1"
        y="620.482"
        width="620"
        height="200"
        transform="rotate(-90 1 620.482)"
        fill="none"
      />
      <motion.g
        id="hero-figures1_2"
        initial={{ y: -600 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.6,
        }}
        exit={{ y: -600 }}
      >
        <path
          id="Vector"
          d="M2.93065 401.482L1.96532 201.485C1.43219 91.03 90.543 1.05487 200.998 0.521738L201.963 200.519C202.496 310.974 113.385 400.949 2.93065 401.482Z"
          fill="#2D3652"
        />
        <path
          id="Vector_2"
          d="M201.416 7.35234e-05L201.895 99.1502C202.162 154.465 157.607 199.524 102.379 199.791L101.901 100.64C101.634 45.3233 146.188 0.266641 201.416 7.35234e-05Z"
          fill="#75CBB3"
        />
      </motion.g>
      <motion.g
        id="hero-figures1_2"
        initial={{ y: -800 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        exit={{ y: -800 }}
      >
        <path
          id="Vector_3"
          d="M0.633248 520.483L100.633 520.26C155.861 520.137 200.732 564.809 200.855 620.037L100.855 620.26C45.6276 620.383 0.756112 575.711 0.633248 520.483Z"
          fill="white"
        />
        <path
          id="Vector_4"
          d="M199.999 419.593L99.9997 419.816C44.7718 419.938 0.0995491 464.81 0.222412 520.038L100.222 519.815C155.45 519.693 200.122 474.821 199.999 419.593Z"
          fill="#FFC700"
        />
      </motion.g>
    </HeroFiguresStylesLeft>
  );
};

export default HeroFigures2;
