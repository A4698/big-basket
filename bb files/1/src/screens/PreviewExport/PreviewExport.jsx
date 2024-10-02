import React from "react";
import "./style.css";

export const PreviewExport = () => {
  return (
    <div className="preview-export">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper">Preview</div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper">Export</div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap">
            <div className="text-wrapper-2">Back to Dashboard</div>
          </div>
        </div>
        <div className="group-wrapper">
          <div className="div-wrapper">
            <div className="overlap-2">
              <img className="bigbasket-logo" alt="Bigbasket logo" src="/img/bigbasket-logo-1.png" />
              <div className="text-wrapper-3">Ai</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-4">Content Generated Successfully!</div>
        <p className="p">Preview and Export Your Final Design Below , Enjoy :)</p>
        <div className="group-2" />
      </div>
    </div>
  );
};
