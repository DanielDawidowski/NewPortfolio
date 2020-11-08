import React from "react";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import { ProjectCardStyles } from "../styles/projectsStyles";

const transition = { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] };

const ProjectCard = ({ card, expanded, setExpanded }) => {
  const isOpen = card.id === expanded;
  const { img, logo, link, techIcons } = card;

  return (
    <ProjectCardStyles
      onClick={() => setExpanded(isOpen ? false : card.id)}
      animate={isOpen ? { height: "550px" } : { height: "450px" }}
      transition={{ duration: 0.1 }}
    >
      <ProgressiveImage src={img} placeholder={img}>
        {(src) => (
          <motion.img
            src={src}
            alt={img}
            transition={transition}
            animate={isOpen ? { height: "250px" } : { height: "450px" }}
            whileHover={!isOpen ? { scale: 1.1 } : { scale: 1 }}
            style={
              isOpen
                ? { borderRadius: "27px 27px 0 0" }
                : { borderRadius: "27px" }
            }
          />
        )}
      </ProgressiveImage>
      <motion.div
        initial={false}
        animate={isOpen ? { display: "block" } : { display: "none" }}
        transition={{ duration: 0.1 }}
        className="card-content"
      >
        <div className="card-logo">{logo}</div>

        <motion.div className="card-link">
          <motion.h3
            style={isOpen ? { display: "block" } : { display: "none" }}
          >
            <a href={link}>{link}</a>
          </motion.h3>
        </motion.div>
        <motion.div className="card-tech">
          {techIcons.map((tech) => tech)}
        </motion.div>
      </motion.div>
    </ProjectCardStyles>
  );
};
export default ProjectCard;
