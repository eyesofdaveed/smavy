import { useEffect } from "react";
import scrollToSection from "@common/scrollToSection";

const FirstContent = () => {
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
    <div className="content frs-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/ipad.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="info">
              <div className="section-head style-4">
                <h2 className="mb-30">
                  {"Upgrade yourself "} <span> {"Today"} </span>{" "}
                </h2>
              </div>
              <p className="text mb-40">
                <>
                  В нашей школе программирования мы стремимся вооружить взрослых
                  навыками, необходимыми им для достижения успеха в сегодняшнюю
                  цифровую эпоху. Наше внимание к передовым концепциям
                  веб-разработки и разработки мобильных устройств гарантирует,
                  что наши студенты готовы решать сложные задачи и создавать
                  инновационные решения, которые приносят реальные результаты. С
                  опытными инструкторами и поддерживающим сообществом мы
                  стремимся помочь вам достичь ваших целей и преуспеть в вашей
                  карьере.
                </>
              </p>
              <a
                className="btn rounded-pill bg-blue4 fw-bold text-white"
                data-scroll-nav="8"
                onClick={scrollToSection}
              >
                <small> Бесплатная консультация </small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s4_lines.png"
        alt=""
        className="lines"
      />
      <img
        src="/assets/img/about/about_s4_bubble.png"
        alt=""
        className="bubble"
      />
    </div>
  );
};

export default FirstContent;
