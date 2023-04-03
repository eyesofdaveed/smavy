import Link from "next/link";

const Footer = ({ noWave, rtl }) => {
  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains("dropdown-toggle")
      ? event.target
      : event.target.querySelector(".dropdown-toggle");
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add("show");
    dropDownMenu?.classList?.add("show");
  };

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains("dropdown")
      ? event.target
      : event.target.closest(".dropdown");
    const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
    const dropDownMenu = dropdown.querySelector(".dropdown-menu");

    dropDownToggler?.classList?.remove("show");
    dropDownMenu?.classList?.remove("show");
  };

  return (
    <footer
      className={`style-4 ${noWave ? "mt-0 pt-100" : ""}`}
      data-scroll-index="8"
    >
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
                  <Link href="/">
                    <a className="active">{"Главная"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-about-5">
                    <a>{"О нас"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-portfolio-5">
                    <a>{"Курсы"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-portfolio-5">
                    <a>{"Отзывы"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-services-5">
                    <a>{"Прайс"}</a>
                  </Link>
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
