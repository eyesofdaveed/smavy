import Link from "next/link";

const Navbar = ({ navbarRef }) => {
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
    <nav
      className="navbar navbar-expand-lg navbar-light style-4"
      ref={navbarRef}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
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
              <Link href="/page-portfolio-app">
                <a className="nav-link">portfolio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/page-blog-app">
                <a className="nav-link">blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/page-contact-app">
                <a className="nav-link">
                  <img
                    src="/assets/img/icons/nav_icon/price.png"
                    alt=""
                    className="icon-15 me-2"
                  />
                  contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
