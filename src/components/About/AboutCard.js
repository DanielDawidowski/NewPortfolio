import React from "react";
import { motion } from "framer-motion";
import { AboutCardStyles } from "../styles/aboutStyles";
import { ReactComponent as Profile } from "../../assets/hero/about-icon.svg";
import { ReactComponent as Dots } from "../../assets/hero/dots.svg";

const AboutCard = () => {
  return (
    <AboutCardStyles
      initial={{ opacity: 0, y: -200, height: 0 }}
      animate={{ opacity: 1, y: 0, height: 500 }}
      transition={{
        duration: 1.6,
      }}
      exit={{ opacity: 1, height: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 450 }}
        transition={{
          duration: 2.6,
        }}
        exit={{ opacity: 1, height: 0 }}
        className="card-body"
      >
        <div className="card-details">
          <div className="card-image">
            <Dots className="dots" />
          </div>
          <div className="card-profile">
            <h3>Name</h3>
            <h2>Daniel Dawidowski</h2>
            <h3>Age</h3>
            <h2>33</h2>
            <h3>Place</h3>
            <h2>Ełk, Polska</h2>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2.1,
          }}
          exit={{ opacity: 1 }}
          className="card-description"
        >
          <p>
            Hello, I am Junior Fronted Developer with one year of self-learn
            experience. I have finished several web development courses which
            contains HTML, CSS, Javascript, React and Node JS. My point is to
            become a proper Full-stack developer. I am also interested in design
            applications like Figma and to build web animations with GSAP or
            Framer Motion.{" "}
          </p>
        </motion.div>
      </motion.div>
    </AboutCardStyles>
  );
};

export default AboutCard;
