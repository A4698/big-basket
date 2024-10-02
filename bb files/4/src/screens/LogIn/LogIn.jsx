import React from "react";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { Facebook } from "../../icons/Facebook";
import { Mail } from "../../icons/Mail";
import { PhoneCall } from "../../icons/PhoneCall";
import { Twitter } from "../../icons/Twitter";
import "./style.css";

export const LogIn = () => {
  return (
    <div className="log-in">
      <div className="div">
        <div className="overlap">
          <div className="sign-in">
            <div className="overlap-group">
              <div className="text-wrapper">Sign Up</div>
            </div>
          </div>
          <div className="logos">
            <div className="phone-call-wrapper">
              <PhoneCall className="phone-call" />
            </div>
            <div className="mail-wrapper">
              <Mail className="size-20-4" color="white" />
            </div>
          </div>
          <p className="p">
            Sign Up to unlock limitless creativity and elevate your promotional game where you can effortlessly design
            stunning banners and videos!
          </p>
          <p className="text-wrapper-2">For more information or assistance, feel free to reach out to our team</p>
          <div className="text-wrapper-3">New Here?</div>
          <ChevronLeft className="chevron-left" color="white" />
        </div>
        <img className="img" alt="Sign in" src="/img/sign-in.png" />
        <div className="text-wrapper-4">Forgot your Password ?</div>
        <div className="overlap-2">
          <img className="password" alt="Password" src="/img/password.png" />
          <img className="email" alt="Email" src="/img/email.png" />
        </div>
        <div className="text-wrapper-5">or use your account</div>
        <div className="logos-2">
          <div className="overlap-3">
            <div className="group" />
            <img className="google-svgrepo-com" alt="Google svgrepo com" src="/img/google-svgrepo-com-1.svg" />
          </div>
          <div className="overlap-4">
            <div className="group" />
            <Facebook className="facebook-instance" />
          </div>
          <div className="overlap-5">
            <div className="group" />
            <img
              className="search-engine-yahoo"
              alt="Search engine yahoo"
              src="/img/search-engine-yahoo-yahoo-svgrepo-com-1.svg"
            />
          </div>
          <div className="overlap-6">
            <div className="group" />
            <Twitter className="twitter-instance" />
          </div>
        </div>
        <div className="text-wrapper-6">Sign In</div>
      </div>
    </div>
  );
};
