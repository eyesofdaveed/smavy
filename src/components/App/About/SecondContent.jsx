const SecondContent = ({ accordions, rtl }) => {
  return (
    <div className="content sec-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="info">
              <div className="section-head style-4">
                <h2 className="mb-30">
                  {"Изучи новые "} <span> {"навыки"} </span>
                </h2>
              </div>
              <p className="text mb-40">
                {
                  "Мы стремимся создать благоприятную и инклюзивную учебную среду, в которой учащиеся могут развиваться и полностью раскрывать свой потенциал. Мы хотим создать сообщества амбициозных людей, которые стремятся использовать свои навыки и знания, чтобы оказывать положительное влияние на свое окружение. Если вы готовы поднять свои навыки программирования на новый уровень и присоединиться к поддерживающему сообществу, мы приглашаем вас присоединиться к нам в центр Smavy."
                }
              </p>
              {/*               <div className="faq style-3 style-4">
                <div className="accordion" id="accordionExample">
                  {accordions.map((accordion, index) => (
                    <div className="accordion-item" key={index}>
                      <h2
                        className="accordion-header"
                        id={`heading${accordion.id}`}
                      >
                        <button
                          className={`accordion-button ${
                            index !== 0 ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${accordion.id}`}
                          aria-expanded="true"
                          aria-controls={`collapse${accordion.id}`}
                        >
                          {accordion.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${accordion.id}`}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        aria-labelledby={`heading${accordion.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {accordion.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/2mobiles.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s4_bubble2.png"
        alt=""
        className="bubble2"
      />
    </div>
  );
};

export default SecondContent;
