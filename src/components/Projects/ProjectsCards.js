import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsCardsStyles } from "../styles/projectsStyles";
import { ReactComponent as PhotoLogo } from "../../assets/projects/PHOTO-logo.svg";
import { ReactComponent as RestaurantLogo } from "../../assets/projects/restaurantte-logo.svg";
import { ReactComponent as AOLogo } from "../../assets/projects/AO-logo.svg";
import { ReactComponent as JSLogo } from "../../assets/projects/JS-logo.svg";
import { ReactComponent as HTMLLogo } from "../../assets/projects/HTML-logo.svg";
import { ReactComponent as CSSLogo } from "../../assets/projects/CSS-logo.svg";
import { ReactComponent as ReactJSLogo } from "../../assets/projects/ReactJS-logo.svg";
import { ReactComponent as NodeJSLogo } from "../../assets/projects/nodeJS-logo.svg";
import PhotoImg from "../../assets/projects/kalen-emsley-Bkci_8qcdvQ-unsplash 3.png";
import AOImg from "../../assets/projects/firecamp.png";
import RestaurantImg from "../../assets/projects/restaurant.png";

const cards = [
  {
    id: 0,
    link: "http://photographics.netlify.app",
    logo: <PhotoLogo />,
    img: PhotoImg,
    techIcons: [<JSLogo />, <HTMLLogo />, <CSSLogo />],
  },
  {
    id: 1,
    link: "http://aktywneobozy.herokuapp.com",
    logo: <AOLogo />,
    img: AOImg,
    techIcons: [<ReactJSLogo />, <NodeJSLogo />],
  },
  {
    id: 2,
    link: "http://restaurantte.netlify.app",
    logo: <RestaurantLogo />,
    img: RestaurantImg,
    techIcons: [<JSLogo />, <HTMLLogo />, <CSSLogo />],
  },
];

// const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

// const variants = {
//   open: {
//     scale: 1.04,
//     transition: {
//       staggerChildren: 1,
//       delayChildren: 1.4,
//       staggerDirection: -1, // od tyłu , staggerDirection: 1 do przodu
//       when: "afterChildren", // "afterChildren" // "beforeChildren"
//     },
//   },
//   closed: {
//     scale: 1,
//   },
// };

const ProjectsCards = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <ProjectsCardsStyles
      initial={"open"}
      // variants={variants}
      transition={{
        duration: 1,
      }}
      exit={{ opacity: 0 }}
    >
      {cards.map((card, i) => (
        <ProjectCard
          key={i}
          card={card}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </ProjectsCardsStyles>
  );
};

export default ProjectsCards;
