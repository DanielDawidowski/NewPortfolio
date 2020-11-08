import React from "react";
import { motion } from "framer-motion";
import { AboutStyles, SocialIcons } from "../components/styles/aboutStyles";
import AboutFigure from "../components/About/AboutFigure.js";
import AboutBg from "../components/About/AboutBg.js";
import AboutLeaf from "../components/About/AboutLeaf.js";
import AboutCard from "../components/About/AboutCard.js";
import Layout from "../components/Layout";
import { ReactComponent as Github } from "../assets/hero/github-icon.svg";
import { ReactComponent as LinkedIn } from "../assets/hero/linkedin-icon.svg";

const Home = () => {
  return (
    <Layout>
      <AboutStyles
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        exit={{ opacity: 0 }}
      >
        <AboutBg />
        <AboutCard />
        <AboutFigure />
        <AboutLeaf />
        <SocialIcons>
          <Github />
          <LinkedIn />
        </SocialIcons>
      </AboutStyles>
    </Layout>
  );
};

export default Home;
