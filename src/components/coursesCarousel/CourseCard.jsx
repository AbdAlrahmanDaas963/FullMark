import React from "react";

function CourseCard({ title, desc }) {
  return (
    <div className="course-card">
      <h2>{title}</h2>
      <div>{desc}</div>
    </div>
  );
}

export default CourseCard;
