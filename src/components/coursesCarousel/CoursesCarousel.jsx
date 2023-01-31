import React, { useState } from "react";

import { motion } from "framer-motion";

import "./coursesCarousel.css";
import CourseCard from "./CourseCard";

function CoursesCarousel() {
  const [state, setState] = useState([
    {
      id: 1,
      title: "Math",
      desc: "Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, shapes and the spaces in which they are contained, and quantities and their changes.",
      value: 50,
    },
    {
      id: 2,
      title: "chimestry",
      desc: "Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, shapes and the spaces in which they are contained, and quantities and their changes.",
      value: 20,
    },
    {
      id: 3,
      title: "history",
      desc: "Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, shapes and the spaces in which they are contained, and quantities and their changes.",
      value: 80,
    },
  ]);

  return (
    <div className="courses">
      <div className="corses-carousel-container">
        <div className="big-text">Your Courses</div>
        <div className="carousel-scroll">
          <motion.div className="carousel-in" drag="x" dragDirectionLock>
            {state.map((item) => (
              <CourseCard
                key={item.id}
                title={item.title}
                desc={item.desc}
                value={item.value}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CoursesCarousel;
