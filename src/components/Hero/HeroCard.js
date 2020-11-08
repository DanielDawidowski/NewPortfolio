import React from "react";
import { Link } from "react-router-dom";
import Slider from "infinite-react-carousel";
import { CardStyles, CardBody } from "../styles/cardStyles";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as HeroPatterns } from "../../assets/hero/Hero-pattern.svg";
import { ReactComponent as ProjectsIcon } from "../../assets/hero/projects-icon.svg";
import { ReactComponent as ContactIcon } from "../../assets/hero/contact-icon.svg";
import { ReactComponent as AboutIcon } from "../../assets/hero/about-icon.svg";

const HeroSlider = [
  {
    link: "Contact",
    img: <ContactIcon className="hero-icon" />,
    text: "Contact",
  },
  {
    link: "About",
    img: <AboutIcon className="hero-icon" />,
    text: "About Me",
  },
  {
    link: "Projects",
    img: <ProjectsIcon className="hero-icon" />,
    text: "Projects",
  },
];

const HeroCard = () => {
  const settings = {
    arrowsBlock: false,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    centerPadding: 10,
    virtualList: true,
    dots: true,
    wheel: true,
  };

  return (
    <CardStyles>
      <HeroPatterns className="pattern" />
      <CardBody>
        <Slider {...settings}>
          {HeroSlider.map((slide, i) => (
            <div key={i}>
              <Link to={`/${slide.link}`}>
                <span>
                  <h1>{slide.text}</h1>
                  {slide.img}
                </span>
              </Link>
            </div>
          ))}
        </Slider>
      </CardBody>
    </CardStyles>
  );
};

export default HeroCard;
