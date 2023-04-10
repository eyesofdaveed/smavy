import features from "@data/App/features.json";

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
            <div className="features-card" key={index}>
              <div
                className="icon img-contain"
                style={{ height: "85px", width: "auto" }}
              >
                <img src={feature.image} alt="" />
                {feature.new && (
                  <span
                    className="label icon-40 alert-success text-success rounded-circle small text-uppercase fw-bold"
                    style={{ top: "-12px", right: "-12px" }}
                  >
                    new
                  </span>
                )}
              </div>
              <h6>
                {feature.title.text1} <br /> {feature.title.text2}
              </h6>
            </div>
          ))}
        </div>
      </div>
      <img src="/assets/img/feat_circle.png" alt="" className="img-circle" />
    </section>
  );
};

export default Features;
