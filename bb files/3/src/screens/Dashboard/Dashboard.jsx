import React from "react";
import "./style.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">Create Banner</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper">Create Video</div>
          </div>
        </div>
        <div className="group-2" />
        <div className="div-wrapper">
          <div className="text-wrapper-2">Colors :</div>
        </div>
        <div className="group-3">
          <div className="text-wrapper-3">Promotional Offers</div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-4">Write here</div>
            </div>
          </div>
        </div>
        <div className="overlap">
          <div className="group-4">
            <div className="overlap-2">
              <div className="text-wrapper-5">Bold</div>
            </div>
          </div>
          <div className="group-5">
            <div className="overlap-2">
              <div className="text-wrapper-5">Dark</div>
            </div>
          </div>
        </div>
        <img className="sign-in" alt="Sign in" src="/img/sign-in.png" />
        <img className="img" alt="Group" src="/img/group-30.png" />
        <div className="group-wrapper">
          <div className="group-6">
            <div className="overlap-3">
              <img className="bigbasket-logo" alt="Bigbasket logo" src="/img/bigbasket-logo-1.png" />
              <div className="text-wrapper-6">Ai</div>
            </div>
          </div>
        </div>
        <div className="group-7">
          <div className="overlap-4">
            <div className="text-wrapper-7">Red</div>
          </div>
        </div>
        <div className="group-8">
          <div className="overlap-4">
            <div className="text-wrapper-7">Green</div>
          </div>
        </div>
        <div className="group-9">
          <div className="overlap-4">
            <div className="text-wrapper-7">Yellow</div>
          </div>
        </div>
        <div className="group-10">
          <div className="overlap-4">
            <div className="text-wrapper-7">Blue</div>
          </div>
        </div>
      </div>
    </div>
  );
};
