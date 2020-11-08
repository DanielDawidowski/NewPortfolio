import React from "react";
import { motion } from "framer-motion";
import { HeroStyles } from "../components/styles/homeStyles";
// import { ReactComponent as HeroFigures1 } from "../assets/hero/hero-figures1.svg";
import HeroFigures1 from "../components/Hero/HeroFigures1.js";
import HeroFigures2 from "../components/Hero/HeroFigures2.js";
import HeroFigures3 from "../components/Hero/HeroFigures3.js";
import HeroCard from "../components/Hero/HeroCard.js";
import Dots from "../components/Hero/Dots.js";
import GreenCircle from "../components/Hero/GreenCircle.js";
import GithubIcon from "../components/Hero/Github.js";
import LinkedInIcon from "../components/Hero/LinkedIn.js";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <HeroStyles
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        exit={{ opacity: 0 }}
      >
        <HeroFigures1 />
        <HeroFigures2 />
        <HeroFigures3 />
        <HeroCard />
        <Dots />
        <GreenCircle />
        <motion.div className="social">
          <a href="https://github.com/DanielDawidowski">
            <GithubIcon className="github" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-dawidowski-924905165/">
            <LinkedInIcon className="linkedIn" />
          </a>
        </motion.div>
      </HeroStyles>
    </Layout>
  );
};

export default Home;
