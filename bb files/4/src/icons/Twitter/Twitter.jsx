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
      <g className="g" filter="url(#filter0_d_49_55)">
        <path
          className="path"
          d="M56.1667 11.5C54.4111 12.7384 52.4672 13.6855 50.41 14.305C49.3059 13.0354 47.8385 12.1356 46.2063 11.7272C44.5741 11.3188 42.8558 11.4215 41.2839 12.0215C39.7119 12.6215 38.3622 13.6897 37.4172 15.0818C36.4722 16.4739 35.9775 18.1226 36 19.805V21.6383C32.7782 21.7219 29.5857 21.0073 26.7069 19.5583C23.8281 18.1093 21.3523 15.9708 19.5 13.3333C19.5 13.3333 12.1667 29.8333 28.6667 37.1667C24.891 39.7296 20.3932 41.0147 15.8334 40.8333C32.3334 50 52.5 40.8333 52.5 19.75C52.4984 19.2393 52.4493 18.7299 52.3534 18.2283C54.2245 16.3831 55.5449 14.0533 56.1667 11.5Z"
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
          id="filter0_d_49_55"
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
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_49_55" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_49_55"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
