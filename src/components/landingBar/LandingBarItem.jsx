import React from "react";

function LandingBarItem({ svg, value, title }) {
  return (
    <div className="landing-bar-item">
      <div className="bar-item-svg">{svg}</div>
      <div className="bar-item-col">
        <div className="bar-item-value">{value}</div>
        <div className="bar-item-title">{title}</div>
      </div>
    </div>
  );
}

export default LandingBarItem;
