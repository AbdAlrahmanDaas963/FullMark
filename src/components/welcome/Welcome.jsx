import React from "react";
import Carousel from "./Carousel";
import "./welcome.css";

const h1 = "مصدرك للتعلم التفاعلي والمتكامل في جميع المراحل الدراسية.";
const p =
  "أداء الطلبة هو الأهم لنا, ولذلك نقدم تدريبات ودعم فريدة من نوعها للمدرسين والطلبة للتعلم الفعال والنجاح العالي.";

function Welcome() {
  return (
    <div className="welcome">
      <div className="content">
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
      <Carousel />
    </div>
  );
}

export default Welcome;
