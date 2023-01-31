import React from "react";
import "./welcome.css";
import Button from "../button/Button";

const h1 = "DID NOT START YET ?";
const p = "discover the horizon of the science";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-title">Home</div>
      <div className="welcome-content">
        <div className="wlc-content-left">
          <div className="big-text">{h1}</div>
          <div>{p}</div>
          <Button title={"GO TO COURSE"} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Welcome;
