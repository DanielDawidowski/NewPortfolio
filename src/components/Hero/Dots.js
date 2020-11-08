import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const DotsSVG = styled(motion.svg)`
  grid-column: 4 / 6;
  grid-row: 3 / 5;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const HeroFigures1 = () => {
  return (
    <DotsSVG
      initial={{ opacity: 0, x: 100, y: 70 }}
      animate={{ opacity: 1, x: -200, y: 70 }}
      transition={{
        duration: 2.5,
      }}
      exit={{ opacity: 1, x: 100, y: 70 }}
      width="354"
      height="158"
      viewBox="0 0 354 158"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M188.494 153.504C188.494 151.021 190.496 149.008 192.967 149.008C195.437 149.008 197.44 151.021 197.44 153.504C197.44 155.987 195.437 158 192.967 158C190.496 158 188.494 155.987 188.494 153.504ZM219.806 153.504C219.806 151.021 221.808 149.008 224.279 149.008C226.749 149.008 228.752 151.021 228.752 153.504C228.752 155.987 226.749 158 224.279 158C221.808 158 219.806 155.987 219.806 153.504ZM251.118 153.504C251.118 151.021 253.12 149.008 255.591 149.008C258.061 149.008 260.064 151.021 260.064 153.504C260.064 155.987 258.061 158 255.591 158C253.12 158 251.118 155.987 251.118 153.504ZM282.43 153.504C282.43 151.021 284.432 149.008 286.903 149.008C289.373 149.008 291.376 151.021 291.376 153.504C291.376 155.987 289.373 158 286.903 158C284.432 158 282.43 155.987 282.43 153.504ZM313.742 153.504C313.742 151.021 315.744 149.008 318.215 149.008C320.685 149.008 322.688 151.021 322.688 153.504C322.688 155.987 320.685 158 318.215 158C315.744 158 313.742 155.987 313.742 153.504ZM345.054 153.504C345.054 151.021 347.056 149.008 349.527 149.008C351.997 149.008 354 151.021 354 153.504C354 155.987 351.997 158 349.527 158C347.056 158 345.054 155.987 345.054 153.504ZM188.494 123.959C188.494 121.476 190.496 119.463 192.967 119.463C195.437 119.463 197.44 121.476 197.44 123.959C197.44 126.442 195.437 128.455 192.967 128.455C190.496 128.455 188.494 126.442 188.494 123.959ZM219.806 123.959C219.806 121.476 221.808 119.463 224.279 119.463C226.749 119.463 228.752 121.476 228.752 123.959C228.752 126.442 226.749 128.455 224.279 128.455C221.808 128.455 219.806 126.442 219.806 123.959ZM251.118 123.959C251.118 121.476 253.12 119.463 255.591 119.463C258.061 119.463 260.064 121.476 260.064 123.959C260.064 126.442 258.061 128.455 255.591 128.455C253.12 128.455 251.118 126.442 251.118 123.959ZM282.43 123.959C282.43 121.476 284.432 119.463 286.903 119.463C289.373 119.463 291.376 121.476 291.376 123.959C291.376 126.442 289.373 128.455 286.903 128.455C284.432 128.455 282.43 126.442 282.43 123.959ZM313.742 123.959C313.742 121.476 315.744 119.463 318.215 119.463C320.685 119.463 322.688 121.476 322.688 123.959C322.688 126.442 320.685 128.455 318.215 128.455C315.744 128.455 313.742 126.442 313.742 123.959ZM345.054 123.959C345.054 121.476 347.056 119.463 349.527 119.463C351.997 119.463 354 121.476 354 123.959C354 126.442 351.997 128.455 349.527 128.455C347.056 128.455 345.054 126.442 345.054 123.959ZM188.494 94.4147C188.494 91.9316 190.496 89.9187 192.967 89.9187C195.437 89.9187 197.44 91.9316 197.44 94.4147C197.44 96.8977 195.437 98.9105 192.967 98.9105C190.496 98.9105 188.494 96.8977 188.494 94.4147ZM219.806 94.4147C219.806 91.9316 221.808 89.9187 224.279 89.9187C226.749 89.9187 228.752 91.9316 228.752 94.4147C228.752 96.8977 226.749 98.9105 224.279 98.9105C221.808 98.9105 219.806 96.8977 219.806 94.4147ZM251.118 94.4147C251.118 91.9316 253.12 89.9187 255.591 89.9187C258.061 89.9187 260.064 91.9316 260.064 94.4147C260.064 96.8977 258.061 98.9105 255.591 98.9105C253.12 98.9105 251.118 96.8977 251.118 94.4147ZM282.43 94.4147C282.43 91.9316 284.432 89.9187 286.903 89.9187C289.373 89.9187 291.376 91.9316 291.376 94.4147C291.376 96.8977 289.373 98.9105 286.903 98.9105C284.432 98.9105 282.43 96.8977 282.43 94.4147ZM313.742 94.4147C313.742 91.9316 315.744 89.9187 318.215 89.9187C320.685 89.9187 322.688 91.9316 322.688 94.4147C322.688 96.8977 320.685 98.9105 318.215 98.9105C315.744 98.9105 313.742 96.8977 313.742 94.4147ZM345.054 94.4147C345.054 91.9316 347.056 89.9187 349.527 89.9187C351.997 89.9187 354 91.9316 354 94.4147C354 96.8977 351.997 98.9105 349.527 98.9105C347.056 98.9105 345.054 96.8977 345.054 94.4147ZM188.494 63.5853C188.494 61.1023 190.496 59.0895 192.967 59.0895C195.437 59.0895 197.44 61.1023 197.44 63.5853C197.44 66.0684 195.437 68.0813 192.967 68.0813C190.496 68.0813 188.494 66.0684 188.494 63.5853ZM219.806 63.5853C219.806 61.1023 221.808 59.0895 224.279 59.0895C226.749 59.0895 228.752 61.1023 228.752 63.5853C228.752 66.0684 226.749 68.0813 224.279 68.0813C221.808 68.0813 219.806 66.0684 219.806 63.5853ZM251.118 63.5853C251.118 61.1023 253.12 59.0895 255.591 59.0895C258.061 59.0895 260.064 61.1023 260.064 63.5853C260.064 66.0684 258.061 68.0813 255.591 68.0813C253.12 68.0813 251.118 66.0684 251.118 63.5853ZM282.43 63.5853C282.43 61.1023 284.432 59.0895 286.903 59.0895C289.373 59.0895 291.376 61.1023 291.376 63.5853C291.376 66.0684 289.373 68.0813 286.903 68.0813C284.432 68.0813 282.43 66.0684 282.43 63.5853ZM313.742 63.5853C313.742 61.1023 315.744 59.0895 318.215 59.0895C320.685 59.0895 322.688 61.1023 322.688 63.5853C322.688 66.0684 320.685 68.0813 318.215 68.0813C315.744 68.0813 313.742 66.0684 313.742 63.5853ZM345.054 63.5853C345.054 61.1023 347.056 59.0895 349.527 59.0895C351.997 59.0895 354 61.1023 354 63.5853C354 66.0684 351.997 68.0813 349.527 68.0813C347.056 68.0813 345.054 66.0684 345.054 63.5853ZM188.494 34.0406C188.494 31.5576 190.496 29.5447 192.967 29.5447C195.437 29.5447 197.44 31.5576 197.44 34.0406C197.44 36.5237 195.437 38.5366 192.967 38.5366C190.496 38.5366 188.494 36.5237 188.494 34.0406ZM219.806 34.0406C219.806 31.5576 221.808 29.5447 224.279 29.5447C226.749 29.5447 228.752 31.5576 228.752 34.0406C228.752 36.5237 226.749 38.5366 224.279 38.5366C221.808 38.5366 219.806 36.5237 219.806 34.0406ZM251.118 34.0406C251.118 31.5576 253.12 29.5447 255.591 29.5447C258.061 29.5447 260.064 31.5576 260.064 34.0406C260.064 36.5237 258.061 38.5366 255.591 38.5366C253.12 38.5366 251.118 36.5237 251.118 34.0406ZM282.43 34.0406C282.43 31.5576 284.432 29.5447 286.903 29.5447C289.373 29.5447 291.376 31.5576 291.376 34.0406C291.376 36.5237 289.373 38.5366 286.903 38.5366C284.432 38.5366 282.43 36.5237 282.43 34.0406ZM313.742 34.0406C313.742 31.5576 315.744 29.5447 318.215 29.5447C320.685 29.5447 322.688 31.5576 322.688 34.0406C322.688 36.5237 320.685 38.5366 318.215 38.5366C315.744 38.5366 313.742 36.5237 313.742 34.0406ZM345.054 34.0406C345.054 31.5576 347.056 29.5447 349.527 29.5447C351.997 29.5447 354 31.5576 354 34.0406C354 36.5237 351.997 38.5366 349.527 38.5366C347.056 38.5366 345.054 36.5237 345.054 34.0406ZM188.494 4.49596C188.494 2.01293 190.496 -7.14698e-06 192.967 -7.03899e-06C195.437 -6.931e-06 197.44 2.01293 197.44 4.49596C197.44 6.979 195.437 8.99181 192.967 8.99181C190.496 8.99181 188.494 6.979 188.494 4.49596ZM219.806 4.49597C219.806 2.01294 221.808 -5.77829e-06 224.279 -5.6703e-06C226.749 -5.56231e-06 228.752 2.01294 228.752 4.49597C228.752 6.97901 226.749 8.99182 224.279 8.99182C221.808 8.99182 219.806 6.97901 219.806 4.49597ZM251.118 4.49597C251.118 2.01294 253.12 -4.40959e-06 255.591 -4.3016e-06C258.061 -4.19362e-06 260.064 2.01294 260.064 4.49597C260.064 6.97901 258.061 8.99182 255.591 8.99182C253.12 8.99182 251.118 6.97901 251.118 4.49597ZM282.43 4.49597C282.43 2.01294 284.432 -3.0409e-06 286.903 -2.93291e-06C289.373 -2.82493e-06 291.376 2.01294 291.376 4.49597C291.376 6.97901 289.373 8.99182 286.903 8.99182C284.432 8.99182 282.43 6.97901 282.43 4.49597ZM313.742 4.49597C313.742 2.01294 315.744 -1.67221e-06 318.215 -1.56422e-06C320.685 -1.45623e-06 322.688 2.01294 322.688 4.49597C322.688 6.97901 320.685 8.99182 318.215 8.99182C315.744 8.99182 313.742 6.97901 313.742 4.49597ZM345.054 4.49597C345.054 2.01294 347.056 -3.03514e-07 349.527 -1.95527e-07C351.997 -8.75405e-08 354 2.01294 354 4.49597C354 6.97901 351.997 8.99182 349.527 8.99182C347.056 8.99182 345.054 6.97901 345.054 4.49597ZM-6.70987e-06 153.504C-6.60134e-06 151.021 2.00268 149.008 4.47314 149.008C6.9436 149.008 8.94628 151.021 8.94628 153.504C8.94628 155.987 6.9436 158 4.47314 158C2.00268 158 -6.81841e-06 155.987 -6.70987e-06 153.504ZM31.312 153.504C31.312 151.021 33.3148 149.008 35.7852 149.008C38.2557 149.008 40.2584 151.021 40.2584 153.504C40.2584 155.987 38.2557 158 35.7852 158C33.3148 158 31.312 155.987 31.312 153.504ZM62.6241 153.504C62.6241 151.021 64.6268 149.008 67.0972 149.008C69.5677 149.008 71.5704 151.021 71.5704 153.504C71.5704 155.987 69.5677 158 67.0972 158C64.6268 158 62.6241 155.987 62.6241 153.504ZM93.9361 153.504C93.9361 151.021 95.9388 149.008 98.4092 149.008C100.88 149.008 102.882 151.021 102.882 153.504C102.882 155.987 100.88 158 98.4092 158C95.9388 158 93.9361 155.987 93.9361 153.504ZM125.248 153.504C125.248 151.021 127.251 149.008 129.721 149.008C132.192 149.008 134.194 151.021 134.194 153.504C134.194 155.987 132.192 158 129.721 158C127.251 158 125.248 155.987 125.248 153.504ZM156.56 153.504C156.56 151.021 158.563 149.008 161.033 149.008C163.504 149.008 165.506 151.021 165.506 153.504C165.506 155.987 163.504 158 161.033 158C158.563 158 156.56 155.987 156.56 153.504ZM-5.41844e-06 123.959C-5.3099e-06 121.476 2.00268 119.463 4.47314 119.463C6.9436 119.463 8.94628 121.476 8.94628 123.959C8.94628 126.442 6.9436 128.455 4.47314 128.455C2.00268 128.455 -5.52697e-06 126.442 -5.41844e-06 123.959ZM31.312 123.959C31.312 121.476 33.3148 119.463 35.7852 119.463C38.2557 119.463 40.2584 121.476 40.2584 123.959C40.2584 126.442 38.2557 128.455 35.7852 128.455C33.3148 128.455 31.312 126.442 31.312 123.959ZM62.6241 123.959C62.6241 121.476 64.6268 119.463 67.0972 119.463C69.5677 119.463 71.5704 121.476 71.5704 123.959C71.5704 126.442 69.5677 128.455 67.0972 128.455C64.6268 128.455 62.6241 126.442 62.6241 123.959ZM93.9361 123.959C93.9361 121.476 95.9388 119.463 98.4092 119.463C100.88 119.463 102.882 121.476 102.882 123.959C102.882 126.442 100.88 128.455 98.4092 128.455C95.9388 128.455 93.9361 126.442 93.9361 123.959ZM125.248 123.959C125.248 121.476 127.251 119.463 129.721 119.463C132.192 119.463 134.194 121.476 134.194 123.959C134.194 126.442 132.192 128.455 129.721 128.455C127.251 128.455 125.248 126.442 125.248 123.959ZM156.56 123.959C156.56 121.476 158.563 119.463 161.033 119.463C163.504 119.463 165.506 121.476 165.506 123.959C165.506 126.442 163.504 128.455 161.033 128.455C158.563 128.455 156.56 126.442 156.56 123.959ZM-4.127e-06 94.4147C-4.01846e-06 91.9316 2.00268 89.9187 4.47314 89.9187C6.9436 89.9187 8.94629 91.9316 8.94628 94.4147C8.94628 96.8977 6.9436 98.9105 4.47314 98.9105C2.00268 98.9105 -4.23553e-06 96.8977 -4.127e-06 94.4147ZM31.312 94.4147C31.312 91.9316 33.3148 89.9187 35.7852 89.9187C38.2557 89.9187 40.2584 91.9316 40.2584 94.4147C40.2584 96.8977 38.2557 98.9105 35.7852 98.9105C33.3148 98.9105 31.312 96.8977 31.312 94.4147ZM62.6241 94.4147C62.6241 91.9316 64.6268 89.9187 67.0972 89.9187C69.5677 89.9187 71.5704 91.9316 71.5704 94.4147C71.5704 96.8977 69.5677 98.9105 67.0972 98.9105C64.6268 98.9105 62.6241 96.8977 62.6241 94.4147ZM93.9361 94.4147C93.9361 91.9316 95.9388 89.9187 98.4092 89.9187C100.88 89.9187 102.882 91.9316 102.882 94.4147C102.882 96.8977 100.88 98.9105 98.4092 98.9105C95.9388 98.9105 93.9361 96.8977 93.9361 94.4147ZM125.248 94.4147C125.248 91.9316 127.251 89.9187 129.721 89.9187C132.192 89.9187 134.194 91.9316 134.194 94.4147C134.194 96.8977 132.192 98.9105 129.721 98.9105C127.251 98.9105 125.248 96.8977 125.248 94.4147ZM156.56 94.4147C156.56 91.9316 158.563 89.9187 161.033 89.9187C163.504 89.9187 165.506 91.9316 165.506 94.4147C165.506 96.8977 163.504 98.9105 161.033 98.9105C158.563 98.9105 156.56 96.8977 156.56 94.4147ZM-2.7794e-06 63.5853C-2.67087e-06 61.1023 2.00268 59.0895 4.47314 59.0895C6.9436 59.0895 8.94629 61.1023 8.94629 63.5853C8.94629 66.0683 6.9436 68.0813 4.47314 68.0813C2.00268 68.0813 -2.88794e-06 66.0683 -2.7794e-06 63.5853ZM31.312 63.5853C31.312 61.1023 33.3148 59.0895 35.7852 59.0895C38.2557 59.0895 40.2584 61.1023 40.2584 63.5853C40.2584 66.0683 38.2557 68.0813 35.7852 68.0813C33.3148 68.0813 31.312 66.0683 31.312 63.5853ZM62.6241 63.5853C62.6241 61.1023 64.6268 59.0895 67.0972 59.0895C69.5677 59.0895 71.5704 61.1023 71.5704 63.5853C71.5704 66.0683 69.5677 68.0813 67.0972 68.0813C64.6268 68.0813 62.6241 66.0683 62.6241 63.5853ZM93.9361 63.5853C93.9361 61.1023 95.9388 59.0895 98.4092 59.0895C100.88 59.0895 102.882 61.1023 102.882 63.5853C102.882 66.0683 100.88 68.0813 98.4092 68.0813C95.9388 68.0813 93.9361 66.0683 93.9361 63.5853ZM125.248 63.5853C125.248 61.1023 127.251 59.0895 129.721 59.0895C132.192 59.0895 134.194 61.1023 134.194 63.5853C134.194 66.0683 132.192 68.0813 129.721 68.0813C127.251 68.0813 125.248 66.0683 125.248 63.5853ZM156.56 63.5853C156.56 61.1023 158.563 59.0895 161.033 59.0895C163.504 59.0895 165.506 61.1023 165.506 63.5853C165.506 66.0684 163.504 68.0813 161.033 68.0813C158.563 68.0813 156.56 66.0684 156.56 63.5853ZM-1.48796e-06 34.0406C-1.37943e-06 31.5576 2.00268 29.5447 4.47314 29.5447C6.9436 29.5447 8.94629 31.5576 8.94629 34.0406C8.94629 36.5237 6.9436 38.5366 4.47314 38.5366C2.00268 38.5366 -1.5965e-06 36.5237 -1.48796e-06 34.0406ZM31.312 34.0406C31.312 31.5576 33.3148 29.5447 35.7852 29.5447C38.2557 29.5447 40.2584 31.5576 40.2584 34.0406C40.2584 36.5237 38.2557 38.5366 35.7852 38.5366C33.3148 38.5366 31.312 36.5237 31.312 34.0406ZM62.6241 34.0406C62.6241 31.5576 64.6268 29.5447 67.0972 29.5447C69.5677 29.5447 71.5704 31.5576 71.5704 34.0406C71.5704 36.5237 69.5677 38.5366 67.0972 38.5366C64.6268 38.5366 62.6241 36.5237 62.6241 34.0406ZM93.9361 34.0406C93.9361 31.5576 95.9388 29.5447 98.4092 29.5447C100.88 29.5447 102.882 31.5576 102.882 34.0406C102.882 36.5237 100.88 38.5366 98.4092 38.5366C95.9388 38.5366 93.9361 36.5237 93.9361 34.0406ZM125.248 34.0406C125.248 31.5576 127.251 29.5447 129.721 29.5447C132.192 29.5447 134.194 31.5576 134.194 34.0406C134.194 36.5237 132.192 38.5366 129.721 38.5366C127.251 38.5366 125.248 36.5237 125.248 34.0406ZM156.56 34.0406C156.56 31.5576 158.563 29.5447 161.033 29.5447C163.504 29.5447 165.506 31.5576 165.506 34.0406C165.506 36.5237 163.504 38.5366 161.033 38.5366C158.563 38.5366 156.56 36.5237 156.56 34.0406ZM-1.96525e-07 4.49596C-8.79885e-08 2.01293 2.00269 -1.53863e-05 4.47314 -1.52783e-05C6.9436 -1.51703e-05 8.94629 2.01293 8.94629 4.49596C8.94629 6.979 6.9436 8.99181 4.47314 8.99181C2.00269 8.99181 -3.05062e-07 6.979 -1.96525e-07 4.49596ZM31.312 4.49596C31.312 2.01293 33.3148 -1.40176e-05 35.7852 -1.39096e-05C38.2557 -1.38016e-05 40.2584 2.01293 40.2584 4.49596C40.2584 6.979 38.2557 8.99181 35.7852 8.99181C33.3148 8.99181 31.312 6.979 31.312 4.49596ZM62.6241 4.49596C62.6241 2.01293 64.6268 -1.26489e-05 67.0972 -1.25409e-05C69.5677 -1.24329e-05 71.5704 2.01293 71.5704 4.49596C71.5704 6.979 69.5677 8.99181 67.0972 8.99181C64.6268 8.99181 62.6241 6.979 62.6241 4.49596ZM93.9361 4.49596C93.9361 2.01293 95.9388 -1.12802e-05 98.4092 -1.11722e-05C100.88 -1.10642e-05 102.882 2.01293 102.882 4.49596C102.882 6.979 100.88 8.99181 98.4092 8.99181C95.9388 8.99181 93.9361 6.979 93.9361 4.49596ZM125.248 4.49596C125.248 2.01293 127.251 -9.91152e-06 129.721 -9.80353e-06C132.192 -9.69555e-06 134.194 2.01293 134.194 4.49596C134.194 6.979 132.192 8.99181 129.721 8.99181C127.251 8.99181 125.248 6.979 125.248 4.49596ZM156.56 4.49596C156.56 2.01293 158.563 -8.54283e-06 161.033 -8.43484e-06C163.504 -8.32685e-06 165.506 2.01293 165.506 4.49596C165.506 6.979 163.504 8.99181 161.033 8.99181C158.563 8.99181 156.56 6.979 156.56 4.49596Z"
        fill="#6ED47C"
      />
    </DotsSVG>
  );
};

export default HeroFigures1;