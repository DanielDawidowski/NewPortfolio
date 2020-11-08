import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const GithubSVG = styled(motion.svg)`
  /* grid-column: 1 / 2;
  grid-row: 6 / 7;
  @media (min-width: 401px) and (max-width: 800px) {
    margin-top: -4rem;
    grid-column: 1 / 4;
    grid-row: 6 / 7;
  }
  @media (min-width: 301px) and (max-width: 400px) {
    margin-top: 1rem;
    grid-column: 1 / 4;
    grid-row: 5 / 7;
  }
  @media (min-width: 200px) and (max-width: 300px) {
    grid-column: 1 / 4;
    grid-row: 5 / 7;
  } */
`;

const GithubIcon = () => {
  return (
    <GithubSVG
      initial={{ opacity: 0, scale: 0, x: -400, y: 60 }}
      animate={{ opacity: 1, scale: 0.7, x: 0, y: 0, rotate: 1440 }}
      transition={{
        duration: 3,
      }}
      whileHover={{ scale: [0.8, 0.7, 0.8] }}
      exit={{ scale: 0, x: -400, y: 60 }}
      width="134"
      height="128"
      viewBox="0 0 134 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M67 0C29.9825 0 0 29.3839 0 65.6241C0 94.624 19.1955 119.216 45.8113 127.887C49.1613 128.505 50.3896 126.473 50.3896 124.731C50.3896 123.173 50.3338 119.044 50.3058 113.573C31.6687 117.53 27.738 104.769 27.738 104.769C24.6895 97.1951 20.2843 95.1694 20.2843 95.1694C14.2152 91.1012 20.7533 91.1847 20.7533 91.1847C27.4812 91.6411 31.0154 97.9464 31.0154 97.9464C36.9896 107.98 46.699 105.081 50.5292 103.406C51.1322 99.1596 52.8574 96.2713 54.7725 94.6295C39.8929 92.9878 24.254 87.3448 24.254 62.2015C24.254 55.0392 26.8503 49.1847 31.1494 44.5934C30.3957 42.935 28.1344 36.2624 31.7357 27.2246C31.7357 27.2246 37.3469 25.4661 50.1607 33.9529C55.5207 32.4948 61.2157 31.7714 66.9107 31.738C72.6057 31.7714 78.3007 32.4948 83.6607 33.9529C96.3907 25.4661 102.002 27.2246 102.002 27.2246C105.603 36.2624 103.342 42.935 102.672 44.5934C106.943 49.1847 109.539 55.0392 109.539 62.2015C109.539 87.4116 93.8782 92.96 78.9707 94.5739C81.3157 96.544 83.4932 100.568 83.4932 106.717C83.4932 115.499 83.4094 122.555 83.4094 124.687C83.4094 126.406 84.5819 128.46 88.0157 127.803C114.821 119.188 134 94.5795 134 65.6241C134 29.3839 104.001 0 67 0Z"
        fill="#2D3652"
      />
    </GithubSVG>
  );
};

export default GithubIcon;