import React from "react";
import "./subscribe.css";

const head = "باقة الصف 10";
const disc = "احصل على جميع مواد الصف 10 باشتراك واحد و وفر لغاية 75%";

function Subscribe() {
  return (
    <div className="welcome subscribe">
      <div className="content">
        <div className="content-head">{head}</div>
        <div className="content-disc">{disc}</div>
        <div className="content-btns">
          <div className="rounded-btn btn">اشترك</div>
          <div className="btn">
            تعرف على الباقة <span></span>
          </div>
        </div>
      </div>
      <div className="subscribe-cards">
        <div className="sbs-card">اربع اشهر</div>
        <div className="sbs-card gold-card">الاشتراك الذهبي</div>
        <div className="sbs-card">شهر</div>
      </div>
    </div>
  );
}

export default Subscribe;
