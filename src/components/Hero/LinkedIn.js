import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const LinkedInSVG = styled(motion.svg)`
  /* grid-column: 2 / 3;
  grid-row: 6 / 7;
  @media (min-width: 401px) and (max-width: 800px) {
    margin-top: -4rem;
    grid-column: 3 / 7;
    grid-row: 6 / 7;
  }
  @media (min-width: 301px) and (max-width: 400px) {
    margin-left: 3rem;
    margin-top: 1rem;
    grid-column: 4 / 7;
    grid-row: 5 / 7;
  }
  @media (min-width: 200px) and (max-width: 300px) {
    grid-column: 4 / 7;
    grid-row: 5 / 7;
  } */
`;

const LinkedInIcon = () => {
  return (
    <LinkedInSVG
      initial={{ opacity: 0, scale: 0, x: -400, y: 60 }}
      animate={{
        opacity: 1,
        scale: 0.7,
        x: 0,
        y: 0,
        rotate: 1440,
      }}
      whileHover={{ scale: [0.8, 0.7, 0.8] }}
      transition={{
        duration: 3,
      }}
      exit={{ opacity: 1, scale: 0, x: -400, y: 60 }}
      width="125"
      height="125"
      viewBox="0 0 125 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M113.693 0H11.3073C5.0625 0 0 5.0625 0 11.3073V113.692C0 119.937 5.0625 125 11.3073 125H113.692C119.937 125 125 119.937 125 113.692V11.3073C125 5.0625 119.938 0 113.693 0ZM38.6803 107.933C38.6803 109.751 37.2071 111.224 35.3897 111.224H21.3825C19.5651 111.224 18.0919 109.751 18.0919 107.933V49.2156C18.0919 47.3982 19.5651 45.9251 21.3825 45.9251H35.3897C37.2071 45.9251 38.6803 47.3982 38.6803 49.2156V107.933ZM28.3861 40.39C21.037 40.39 15.0792 34.4323 15.0792 27.0831C15.0792 19.734 21.037 13.7762 28.3861 13.7762C35.7353 13.7762 41.6931 19.734 41.6931 27.0831C41.6931 34.4323 35.7356 40.39 28.3861 40.39ZM111.882 108.198C111.882 109.869 110.527 111.224 108.856 111.224H93.8253C92.1544 111.224 90.7997 109.869 90.7997 108.198V80.6564C90.7997 76.5478 92.0049 62.6522 80.0625 62.6522C70.7991 62.6522 68.9202 72.1633 68.5429 76.4316V108.198C68.5429 109.869 67.1885 111.224 65.5173 111.224H50.98C49.3092 111.224 47.9545 109.869 47.9545 108.198V48.9506C47.9545 47.2798 49.3092 45.9251 50.98 45.9251H65.5173C67.1881 45.9251 68.5429 47.2798 68.5429 48.9506V54.0733C71.9777 48.9185 77.0825 44.9398 87.9512 44.9398C112.019 44.9398 111.882 67.4254 111.882 79.7801V108.198Z"
        fill="#2D3652"
      />
    </LinkedInSVG>
  );
};

export default LinkedInIcon;
