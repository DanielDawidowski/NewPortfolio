import React from "react";
import { HeroFiguresStyles } from "../styles/homeStyles";
import { motion } from "framer-motion";

const HeroFigures1 = () => {
  return (
    <HeroFiguresStyles
      initial={{ opacity: 0, y: 100, rotate: 0 }}
      animate={{ opacity: 1, y: 100, rotate: 7 }}
      transition={{
        duration: 1,
        delay: 0.1,
      }}
      exit={{ opacity: 0, rotate: 0 }}
      viewBox="0 0 1667 202"
    >
      <motion.g
        id="hero-figures1"
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
          delay: 0.1,
        }}
        exit={{ x: 200 }}
      >
        <motion.g
          id="hero-figures1_2"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
          }}
          exit={{ x: 200 }}
        >
          <rect
            id="Rectangle 1"
            x="1667"
            y="200.605"
            width="1667"
            height="200"
            transform="rotate(-180 1667 200.605)"
            fill="#F12C56"
          />
        </motion.g>
        <motion.g
          id="hero-figure11"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
          }}
          exit={{ x: 300 }}
        >
          <path
            id="Vector"
            d="M1597 44.6052C1597 28.0372 1610.43 14.6052 1627 14.6052C1643.57 14.6052 1657 28.0372 1657 44.6052C1657 61.1732 1643.57 74.6052 1627 74.6052C1610.43 74.6052 1597 61.1732 1597 44.6052Z"
            fill="#2D3652"
          />
          <path
            id="Vector_2"
            d="M1654 155.708C1654 170.563 1641.96 182.605 1627.1 182.605C1612.25 182.605 1600.21 170.563 1600.21 155.708C1600.21 140.854 1612.25 128.812 1627.1 128.812C1641.96 128.812 1654 140.854 1654 155.708Z"
            fill="#FF743C"
          />
        </motion.g>
        <motion.path
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.9,
          }}
          exit={{ x: 400 }}
          id="hero-figure12"
          d="M1400.95 101.003C1400.95 45.7747 1445.57 1.00267 1500.6 1.00268C1555.64 1.00268 1600.26 45.7747 1600.26 101.003C1600.26 156.231 1555.64 201.003 1500.6 201.003L1400.95 201.003L1400.95 101.003Z"
          fill="#D5E155"
        />
        <motion.g
          id="hero-figure13"
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.6,
          }}
          exit={{ x: 500 }}
        >
          <path
            id="Vector_9"
            d="M1400.83 200.421L1200.83 200.421C1090.38 200.421 1000.83 110.877 1000.83 0.421143L1200.83 0.421169C1311.29 0.421183 1400.83 89.9652 1400.83 200.421Z"
            fill="#75CBB3"
          />
          <path
            id="Vector_10"
            d="M1000.31 0.000223816L1099.46 0.000233927C1154.78 0.000239568 1199.62 44.7718 1199.62 100L1100.47 100C1045.15 100 1000.31 55.2286 1000.31 0.000223816Z"
            fill="white"
          />
        </motion.g>
        <motion.g
          id="hero-figure14"
          initial={{ x: 600 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.7,
          }}
          exit={{ x: 600 }}
        >
          <path
            id="Vector_3"
            d="M900 200.605L900 100.605C900 45.377 944.771 0.605006 1000 0.605011L1000 100.605C1000 155.833 955.228 200.605 900 200.605Z"
            fill="#D5E155"
          />
          <path
            id="Vector_4"
            d="M799.791 1.0154L799.791 101.015C799.791 156.243 844.563 201.015 899.791 201.015L899.791 101.015C899.791 45.7874 855.019 1.01541 799.791 1.0154Z"
            fill="#2D3652"
          />
        </motion.g>
        <motion.g
          id="hero-figure15"
          initial={{ x: 700 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.8,
          }}
          exit={{ x: 700 }}
        >
          <path
            id="Vector_14"
            d="M700 0.605002C644.772 0.604997 600 45.377 600 100.605C600 155.833 644.772 200.605 700 200.605C755.228 200.605 800 155.833 800 100.605L800 0.605011L700 0.605002Z"
            fill="#FF743C"
          />
          <path
            id="Vector_15"
            d="M799.413 52.6604C799.413 81.2259 776.255 104.384 747.688 104.384C719.122 104.384 695.964 81.2259 695.964 52.6604C695.964 24.0929 719.122 0.935296 747.688 0.935298L799.413 0.935303L799.413 52.6604Z"
            fill="#FFC700"
          />
        </motion.g>
        <motion.g
          id="hero-figure16"
          initial={{ x: 800 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.9,
          }}
          exit={{ x: 800 }}
        >
          <path
            id="Vector_5"
            d="M400 0.604963C510.458 0.604973 600 90.149 600 200.605L400 200.605L400 0.604963Z"
            fill="#2D3652"
          />
          <g id="Group 7">
            <path
              id="Vector_6"
              d="M399.931 98.536C456.303 98.536 502 144.233 502 200.605L399.931 200.605L399.931 98.536Z"
              fill="#6ED47C"
            />
          </g>
        </motion.g>
        <motion.g
          id="hero-figure17"
          initial={{ x: 900 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
          }}
          exit={{ x: 900 }}
        >
          <path
            id="Vector_7"
            d="M200 200.605C200 90.149 289.544 0.604971 400 0.60498L400 200.605L200 200.605Z"
            fill="#F6CB51"
          />
          <path
            id="Vector_8"
            d="M297.931 200.606C297.931 144.233 343.628 98.5366 400 98.5366L400 200.606L297.931 200.606Z"
            fill="white"
          />
        </motion.g>
        <motion.g
          id="hero-figure18"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1.1,
          }}
          exit={{ x: 1000 }}
        >
          <path
            id="Vector_11"
            d="M100 200.605C44.772 200.605 3.91409e-06 155.833 8.74228e-06 100.605C1.35705e-05 45.3767 44.772 0.60474 100 0.604745C155.228 0.60475 200 45.3768 200 100.605C200 155.833 155.228 200.605 100 200.605Z"
            fill="#FF743C"
          />
          <path
            id="Vector_12"
            d="M98.9655 155.777C68.3049 155.777 43.4483 130.92 43.4483 100.26C43.4483 69.5993 68.3049 44.7427 98.9655 44.7427C129.626 44.7427 154.483 69.5993 154.483 100.26C154.483 130.92 129.626 155.777 98.9655 155.777Z"
            fill="white"
          />
          <path
            id="Vector_13"
            d="M129.132 100.95C129.132 117.518 115.7 130.95 99.1323 130.95C82.5643 130.95 69.1323 117.518 69.1323 100.95C69.1323 84.3819 82.5643 70.9499 99.1323 70.9499C115.7 70.9499 129.132 84.382 129.132 100.95Z"
            fill="#6ED47C"
          />
        </motion.g>
      </motion.g>
    </HeroFiguresStyles>
  );
};

export default HeroFigures1;
