import communityData from "@data/Contact/community.json";

const Community = () => {
  return (
    <section
      className="community section-padding style-5"
      data-scroll-index="8"
      id="contact"
    >
      <div className="container">
        <div className="section-head text-center style-4 mb-40">
          <small className="title_small">Связь с нами</small>
          <h2 className="mb-20">
            Наши <span>Контакты</span>{" "}
          </h2>
          <p>Мы свяжемся с вами как только сможем в течении 24 часов</p>
        </div>
        <div className="content rounded-pill">
          {communityData.map((card, i) => (
            <div className="commun-card" key={i}>
              <div className="icon icon-45">
                <img src={card.icon} alt="" />
              </div>
              <div className="inf">
                <h5>{card.info}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
