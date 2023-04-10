import communityCards from "@data/App/community.json";

const Community = () => {
  const data = communityCards;

  return (
    <section className="community section-padding pt-0 style-4">
      <div className="container">
        <div className="section-head text-center style-4">
          <small className="title_small">{"Коммьюнити Smavy"}</small>
          <h2 className="mb-30">
            {"Присоединяйся"} <span>{"в наш Хаб"}</span>{" "}
          </h2>
        </div>
        <div className="content">
          {data.map((item, index) => (
            <a href="#" className="commun-card" key={index}>
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              <div className="inf">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
