import React from "react";
import "./welcome.css";
import Button from "../button/Button";

const h1 = "DID NOT START YET ?";
const p = "discover the horizon of the science";
const svg = (
  <svg
    width="83"
    height="83"
    viewBox="0 0 83 83"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 25.4615L3.02429 25.6926C6.16059 22.0339 7.39271 11.2117 25.8745 13.3299C25.2024 59.6996 5.48853 64.5908 6.72065 74.1035C7.16869 79.4953 11.3131 82.8074 15.7935 83C29.9442 82.4993 29.3095 62.8192 33.7153 13.2144H51.973C51.0022 30.6993 48.3513 48.1842 48.0526 65.3225C48.2766 76.7224 54.9973 82.8074 63.8462 82.8845C78.4076 83.3851 83 65.8617 83 58.3902H79.8637C79.565 64.5523 76.6901 68.9813 70.5668 69.2509C53.8772 69.4819 63.0621 38.9796 63.1741 13.4455L83 13.561L82.888 0.505085C0.483852 0.0933451 10.9433 -1.57304 0 25.4615Z"
      fill="#ECEBE4"
    />
  </svg>
);

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
        <div>{svg}</div>
      </div>
    </div>
  );
}

export default Welcome;
