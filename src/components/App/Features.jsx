import features from "@data/App/features.json";
import Link from "next/link";
import React from "react";

const FeatureItem = ({ image, title, body }) => {

  return (
    <div
      className="features-card">
      <div
        className="icon img-contain"
        style={{ height: "95px", width: "auto" }}
      >
        <img src={image} alt="" />
      </div>
      <h6 className="feature-title" >
        {title.text1} <br /> {title.text2}
      </h6>
      <div className={`feature-content`}>{body}</div>
      <button className="pdf-btn" >
        <Link href={'/courses'}>
          <a className="feature-link">Подробнее</a>
        </Link>
      </button>
    </div>
  );
};

const Features = () => {
  const featuresData = features;

  return (
    <section
      className="features pt-70 pb-70 style-4"
      data-scroll-index="1"
      id="courses"
    >
      <div className="container">
        <div className="section-head text-center style-4">
          <small className="title_small bg-white">
            {"Smavy - единая точка всех курсов"}
          </small>
          <h2 className="mb-70">
            {"Мы предлагаем"} <span> {"Курсы"} </span>{" "}
          </h2>
        </div>
        <div className="content">
          {featuresData.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
      <img src="/assets/img/feat_circle.png" alt="" className="img-circle" />
    </section>
  );
};

export default Features;
