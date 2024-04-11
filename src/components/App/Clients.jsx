import clients from "@data/App/clients.json";

const Clients = () => {
  return (
    <section className="clients style-4" data-scroll-index="1">
      <div className="container">
        <div className="text-center">
          <h5 className="fw-bold mb-30">
            <span className="color-blue4">{"Стэк технологий"}</span>{" "}
            {"с которыми работаем"}
          </h5>
        </div>
        <div className="client-logos pb-70">
          <div className="row align-items-center">
            {clients.map((client, index) => (
              <div className="col-6 col-lg-3" key={index}>
                <a href="#" className="img d-block">
                  <img src={client} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
