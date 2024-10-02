/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Facebook = ({ className }) => {
  return (
    <svg
      className={`facebook ${className}`}
      fill="none"
      height="70"
      viewBox="0 0 52 70"
      width="52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_49_89)">
        <path
          className="path"
          d="M37 11H31C28.3478 11 25.8043 12.0536 23.9289 13.9289C22.0536 15.8043 21 18.3478 21 21V27H15V35H21V51H29V35H35L37 27H29V21C29 20.4696 29.2107 19.9609 29.5858 19.5858C29.9609 19.2107 30.4696 19 31 19H37V11Z"
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
          height="76"
          id="filter0_d_49_89"
          width="76"
          x="-13"
          y="-3"
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
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_49_89" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_49_89"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
