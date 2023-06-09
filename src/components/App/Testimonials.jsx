import { useState } from "react";
import ModalVideo from "react-modal-video";
import testimonialsData from "@data/App/testimonials.json";
import "react-modal-video/css/modal-video.css";

const Testimonials = () => {
  const [isOpen, setOpen] = useState(false);
  const data = testimonialsData;

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <section className="testimonials style-4 pt-70" data-scroll-index="5" id="testimonials">
      <div className="container">
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-head style-4">
                <small className="title_small">{"Отзывы"}</small>
                <h2 className="mb-30">
                  {"От любимых"} <span>{"Клиентов"}</span>
                </h2>
              </div>
              <p className="text mb-40">
                {
                  "Что говорят довольные студенты о своем опыте трансформации в нашей школе программирования."
                }
              </p>
              <div className="d-flex align-items-center mt-70">
                {/*                 <a
                  href="https://www.apple.com/app-store"
                  rel="noreferrer"
                  className="btn rounded-pill bg-blue4 fw-bold text-white me-4"
                  target="_blank"
                >
                  <small> {"Оставить отзыв"}</small>
                </a> */}
                <a
                  href="https://youtube.com/shorts/kdHrfm3l3rk?feature=share"
                  className="play-btn"
                  onClick={openVideo}
                >
                  <span className="icon me-2">
                    <i className="fas fa-play ms-1"></i>
                  </span>
                  <strong className="small">
                    {"Видео"} <br />
                    {"Отзывы"}
                  </strong>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="testi-cards">
                {data.testiCards.map((card, index) => (
                  <div className="client_card" key={index}>
                    {/*               <div className="user_img">
                      <img src={card.userImg} alt="" />
                    </div> */}
                    <div className="inf_content">
                      <div className="stars mb-2">
                        {Array(card.stars)
                          .fill()
                          .map((_, i) => (
                            <i className="fas fa-star" key={i}></i>
                          ))}
                      </div>
                      <h6>
                        {typeof card.title === "string" ? (
                          card.title
                        ) : (
                          <>
                            {card.title.text1} <br /> {card.title.text2}
                          </>
                        )}
                      </h6>
                      <p>
                        {card.author.name}{" "}
                        <span className="text-muted">
                          {" "}
                          / {card.author.position} /{" "}
                          <span>{card.author.company}</span>{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
                <img
                  src="/assets/img/contact_globe.svg"
                  alt=""
                  className="testi-globe"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="kdHrfm3l3rk"
          onClose={() => setOpen(false)}
        />
      )}
    </section>
  );
};

export default Testimonials;
