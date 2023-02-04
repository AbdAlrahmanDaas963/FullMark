import React from "react";

function TopCatCard({ svg, title, desc }) {
  return (
    <div className="top-cat-card landing-bar-item">
      <div className="cat-card-svg">{svg}</div>
      <div>
        <div>{title}</div>
        <div>{desc}</div>
      </div>
    </div>
  );
}

export default TopCatCard;
