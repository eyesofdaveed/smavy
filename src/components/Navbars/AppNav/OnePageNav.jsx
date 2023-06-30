import { useEffect } from "react";
import scrollToSection from "@common/scrollToSection";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ''
const OnePageNav = ({ navbarRef }) => {

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
    <nav
      className="navbar navbar-expand-lg navbar-light style-4"
      id="main-nav"
      ref={navbarRef}
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="#"
          data-scroll-nav="0"
          onClick={scrollToSection}
        >
          <img src="/assets/img/logo_lgr.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
            <li className="nav-item">
              <Link
                href={BASE_URL || ''}
              >
                <a className="nav-link">{"Главная"}</a>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={BASE_URL + '#about'}
                data-scroll-nav="2"
                onClick={scrollToSection}
              >
                {"О нас"}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={BASE_URL + '#courses'}
                data-scroll-nav="1"
                onClick={scrollToSection}
              >
                {"Курсы"}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={BASE_URL + '#testimonials'}
                data-scroll-nav="5"
                onClick={scrollToSection}
              >
                {"Отзывы"}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={BASE_URL + '#price'}
                data-scroll-nav="6"
                onClick={scrollToSection}
              >
                {"Прайс"}
              </a>
            </li>
            <li className="nav-item">
              <Link
                href="/team"
              >
                <a className="nav-link">{"Команда"}</a>
              </Link>
            </li> 
            <li className="nav-item">
              <a
                className="nav-link"
                href={BASE_URL + '#contact'}
                data-scroll-nav="8"
                onClick={scrollToSection}
              >
                {"Контакты"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default OnePageNav;
