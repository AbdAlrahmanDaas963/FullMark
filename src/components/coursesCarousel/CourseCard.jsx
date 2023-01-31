import React from "react";
import Button from "../button/Button";
import LinearWithValueLabel from "../common/progress-bar/LinearWithValueLabel";

function CourseCard({ title, desc, value }) {
  return (
    <div className="course-card">
      <h2>{title}</h2>
      <div>{desc}</div>
      <div className="peogress">
        <LinearWithValueLabel value={value} />
      </div>
      <div>
        <Button title={"countine"} />
      </div>
    </div>
  );
}

export default CourseCard;
