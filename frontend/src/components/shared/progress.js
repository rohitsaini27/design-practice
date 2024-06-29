import React from "react";

const Progress = ({heading, percent, background}) => {
  return (
    <div className="progress-item">
      <div className="text">
        <p className="progress-heading">{heading}</p>
        <p className="progress-percent">{percent}%</p>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percent}%`, background: background }}></div>
      </div>
    </div>
  );
};

export default Progress;
