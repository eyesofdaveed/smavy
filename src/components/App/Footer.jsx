import { useEffect } from "react";
import scrollToSection from "@common/scrollToSection";

const Footer = ({ noWave }) => {
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
    <footer className={`style-4 ${noWave ? "mt-0 pt-100" : ""}`}>
      <div className="container">
        <div className="section-head text-center style-4">
          <h2 className="mb-10">
            {"Готов"} <span>{"Трансформироваться"}</span>{" "}
          </h2>
          <p>
            {
              "Раскрой свой потенциал и начни свою новую карьеру с нашими продвинутыми курсами."
            }
          </p>
        </div>
        <div className="foot mt-80">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <img src="/assets/img/logo_lgr.png" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="links">
                <li>
                  <a
                    href="#about"
                    data-scroll-nav="2"
                    onClick={scrollToSection}
                  >
                    {"О нас"}
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    data-scroll-nav="1"
                    onClick={scrollToSection}
                  >
                    {"Курсы"}
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    data-scroll-nav="5"
                    onClick={scrollToSection}
                  >
                    {"Отзывы"}
                  </a>
                </li>
                <li>
                  <a
                    href="#price"
                    data-scroll-nav="6"
                    onClick={scrollToSection}
                  >
                    {"Прайс"}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    data-scroll-nav="8"
                    onClick={scrollToSection}
                  >
                    {"Контакты"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copywrite text-center">
          <small className="small">
            {"© 2022 Copyrights and designed by"}{" "}
            <a
              href="https://eyesofdaveed.github.io/personal-portfolio/"
              className="fw-bold text-decoration-underline"
              target="_blank"
              rel="noreferrer"
            >
              eyesofdaveed.
            </a>{" "}
          </small>
        </div>
      </div>
      {!noWave && (
        <img
          src="/assets/img/footer/footer_4_wave.png"
          alt=""
          className="wave"
        />
      )}
    </footer>
  );
};

export default Footer;
