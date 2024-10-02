/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Twitter = ({ className }) => {
  return (
    <svg
      className={`twitter ${className}`}
      fill="none"
      height="64"
      viewBox="0 0 72 64"
      width="72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_49_88)">
        <path
          className="path"
          d="M56.1666 11.5C54.411 12.7384 52.4671 13.6855 50.4099 14.305C49.3058 13.0354 47.8384 12.1356 46.2061 11.7272C44.5739 11.3188 42.8557 11.4215 41.2837 12.0215C39.7118 12.6215 38.3621 13.6897 37.4171 15.0818C36.472 16.4739 35.9774 18.1226 35.9999 19.805V21.6383C32.7781 21.7219 29.5856 21.0073 26.7068 19.5583C23.8279 18.1093 21.3522 15.9708 19.4999 13.3333C19.4999 13.3333 12.1666 29.8333 28.6666 37.1667C24.8909 39.7296 20.393 41.0147 15.8333 40.8333C32.3333 50 52.4999 40.8333 52.4999 19.75C52.4982 19.2393 52.4491 18.7299 52.3533 18.2283C54.2244 16.3831 55.5448 14.0533 56.1666 11.5Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="72"
          id="filter0_d_49_88"
          width="72"
          x="0"
          y="-4"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" dy="4" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="7" />
          <feComposite className="fe-composite" in2="hardAlpha" operator="out" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_49_88" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_49_88"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
