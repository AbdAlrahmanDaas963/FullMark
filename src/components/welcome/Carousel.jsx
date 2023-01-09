import React from "react";

const courses = ["math", "sin", "arabic", "english", "math"];

const CarouselItem = ({ title }) => {
  return <div className="carousel-item">{title}</div>;
};

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-title">choose</div>
      <div className="carousel-content">
        {courses.map((item, i) => (
          <CarouselItem key={i} title={item} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
