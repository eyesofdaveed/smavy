import { useEffect } from "react";
import scrollToSection from "@common/scrollToSection";
import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
const AdditionalPageNav = ({ navbarRef }) => {
    console.log(BASE_URL)
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light style-4"
      id="main-nav"
      ref={navbarRef}
    >
      <div className="container">
        <Link href={'/'}>
          <a className="navbar-brand" data-scroll-nav="0">
            <img src="/assets/img/logo_lgr.png" alt="" />
          </a>
        </Link>
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
              <Link href={'/'}>
                <a className="nav-link">{"Главная"}</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={BASE_URL + "/#about"}>
                <a className="nav-link" data-scroll-nav="2">
                  {"О нас"}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={BASE_URL + "/#courses"}>
                <a className="nav-link" data-scroll-nav="4">
                  {"Курсы"}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={BASE_URL + "/#testimonials"}>
                <a className="nav-link" data-scroll-nav="5">
                  {"Отзывы"}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={BASE_URL + "/#price"}>
                <a className="nav-link" data-scroll-nav="6">
                  {"Прайс"}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/team">
                <a className="nav-link">{"Команда"}</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={BASE_URL + "/#contact"}>
                <a className="nav-link" data-scroll-nav="8">
                  {"Контакты"}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdditionalPageNav;
