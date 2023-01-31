import React, { useState } from "react";
import "./coursesCarousel.css";
import CourseCard from "./CourseCard";

function CoursesCarousel() {
  const [state, setState] = useState([
    {
      id: 1,
      title: "Math",
      desc: "Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, shapes and the spaces in which they are contained, and quantities and their changes.",
    },
    {
      id: 2,
      title: "chimestry",
      desc: "Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, shapes and the spaces in which they are contained, and quantities and their changes.",
    },
    {
      id: 3,
      title: "history",
      desc: "Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, shapes and the spaces in which they are contained, and quantities and their changes.",
    },
  ]);

  return (
    <div className="courses">
      <div className="corses-carousel-container">
        <div className="big-text">Your Courses</div>
        <div className="carousel-in">
          {state.map((item) => (
            <CourseCard key={item.id} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesCarousel;
