import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsBg from "../components/Projects/ProjectsBG.js";
import ProjectsCards from "../components/Projects/ProjectsCards.js";

import { ProjectsStyles } from "../components/styles/projectsStyles";
// import { ReactComponent as HeroFigures1 } from "../assets/hero/hero-figures1.svg";

import Layout from "../components/Layout";

const Home = () => {
  const [expanded, setExpanded] = useState(false, 0);
  return (
    <Layout>
      <ProjectsStyles
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        exit={{ opacity: 0 }}
      >
        <ProjectsCards />
        <ProjectsBg />
      </ProjectsStyles>
    </Layout>
  );
};

export default Home;
