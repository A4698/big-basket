/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Mail = ({ color = "white", className }) => {
  return (
    <svg
      className={`mail ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M18.3334 4.99992C18.3334 4.08325 17.5834 3.33325 16.6667 3.33325H3.33341C2.41675 3.33325 1.66675 4.08325 1.66675 4.99992M18.3334 4.99992V14.9999C18.3334 15.9166 17.5834 16.6666 16.6667 16.6666H3.33341C2.41675 16.6666 1.66675 15.9166 1.66675 14.9999V4.99992M18.3334 4.99992L10.0001 10.8333L1.66675 4.99992"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

Mail.propTypes = {
  color: PropTypes.string,
};
