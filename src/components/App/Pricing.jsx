import Link from "next/link";
import plans from "@data/App/plans.json";
import plansRTL from "@data/App/plans-rtl.json";

const Pricing = ({ rtl }) => {
  const data = rtl ? plansRTL : plans;

  return (
    <section
      className="pricing section-padding style-4 pb-50"
      data-scroll-index="6"
    >
      <div className="container">
        <div className="section-head text-center style-4">
          <small className="title_small">{"Ценевая политика"}</small>
          <h2 className="mb-30">
            {"Курсы по"} <span> {"Доступной Цене"} </span>{" "}
          </h2>
        </div>
        <div className="content">
          <div className="row gx-0">
            {data.map((plan, index) => (
              <div className="col-lg-6" key={index}>
                <div className="price-card">
                  <div className="price-header pb-4">
                    <h6>{plan.title}</h6>
                    <h2>
                      {plan.price} <small> / {"месяц"}</small>
                    </h2>
                    <p>{plan.description}</p>
                  </div>
                  <div className="price-body py-4">
                    <ul>
                      {plan.features.map((feature, i) => (
                        <li
                          className={`d-flex align-items-center mb-3 ${
                            feature.active ? "" : " op-3"
                          }`}
                          key={i}
                        >
                          <small className="icon-30 bg-blue4 rounded-circle text-white d-inline-flex align-items-center justify-content-center me-3 flex-shrink-0">
                            <i className={feature.icon}></i>
                          </small>
                          <p className="fw-bold">{feature.title}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {plan.off && (
                    <div className="off">
                      <span>
                        {plan.off} <br /> {"скидка"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
