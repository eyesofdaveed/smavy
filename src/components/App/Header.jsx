import { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import scrollToSection from "@common/scrollToSection";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("[data-scroll-index]");

    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const index = section.getAttribute("data-scroll-index");
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const scroll = window.scrollY;

        if (scroll + 200 > offset && scroll + 200 < offset + height) {
          document
            .querySelector(`[data-scroll-nav="${index}"]`)
            ?.classList?.add("active");
        } else {
          document
            .querySelector(`[data-scroll-nav="${index}"]`)
            ?.classList?.remove("active");
        }
      });
    });
  }, []);

  return (
    <header className="style-4" data-scroll-index="0">
      <div className="content">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-6">
              <div className="info">
                <h1 className="mb-30">
                  {"Кодируй"} <span>{"Свои Мечты"}</span> {"в Реальность"}
                </h1>
                <p className="text">
                  {"Раскрой свой потенциал в программировании: "}
                  <br />
                  {
                    "продвинутые концепции в нашей офлайн-школе программирования"
                  }
                </p>
                <div className="d-flex align-items-center mt-50">
                  <a
                    data-scroll-nav="8"
                    onClick={scrollToSection}
                    className="btn rounded-pill bg-blue4 fw-bold text-white me-4"
                  >
                    <small>{"Связь с нами"}</small>
                  </a>
                  <a
                    href="https://youtu.be/Z63VVv9eSYY"
                    data-lity
                    className="play-btn"
                    onClick={openVideo}
                  >
                    <span className="icon me-2">
                      <i className="fas fa-play ms-1"></i>
                    </span>
                    <strong className="small">
                      {"Посмотреть"} <br />
                      {"Промо-ролик"}
                    </strong>
                  </a>
                </div>
                <span className="mt-100 me-5">
                  <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-2">
                    <i className="fas fa-user-clock"></i>
                  </small>
                  <small className="text-uppercase">
                    {"Бесплатная консультация"}
                  </small>
                </span>
                <span className="mt-100">
                  <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-2">
                    <i className="fas fa-unlock"></i>
                  </small>
                  <small className="text-uppercase">
                    {"Гарантия трудоустройства"}
                  </small>
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <img src="/assets/img/header/header_4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/img/header/header_4_bubble.png"
          alt=""
          className="bubble"
        />
      </div>
      <img src="/assets/img/header/header_4_wave.png" alt="" className="wave" />
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="mRzsWRFQmQ4"
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
