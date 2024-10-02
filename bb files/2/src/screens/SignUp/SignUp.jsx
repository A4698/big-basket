import React from "react";
import { Facebook } from "../../icons/Facebook";
import { Twitter } from "../../icons/Twitter";
import "./style.css";

export const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="div">
        <img className="sign-in" alt="Sign in" src="/img/sign-in.png" />
        <div className="text-wrapper">Forgot your Password ?</div>
        <div className="text-wrapper-2">or use your account</div>
        <div className="text-wrapper-3">Sign Up</div>
        <div className="overlap-group">
          <div className="logos">
            <div className="group" />
            <div className="group-2" />
            <div className="group-3" />
            <div className="group-4" />
          </div>
          <Twitter className="twitter-instance" />
          <Facebook className="facebook-instance" />
          <img className="google-svgrepo-com" alt="Google svgrepo com" src="/img/google-svgrepo-com-1.svg" />
          <img
            className="search-engine-yahoo"
            alt="Search engine yahoo"
            src="/img/search-engine-yahoo-yahoo-svgrepo-com-1.svg"
          />
        </div>
        <div className="overlap">
          <img className="password" alt="Password" src="/img/password.png" />
          <img className="email" alt="Email" src="/img/email.png" />
        </div>
      </div>
    </div>
  );
};
