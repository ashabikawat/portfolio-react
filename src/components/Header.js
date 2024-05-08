import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg background-color-primary pt-4 pb-5 ">
        <div className="container ">
          <button
            className="navbar-toggler border-0 text-white shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fs-2 icons">
              <ion-icon name="menu-outline"></ion-icon>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end px-5"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item me-4 text-uppercase fw-600 fs-6   ">
                <a
                  className="nav-link text-white  "
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item me-4 text-uppercase fw-600 fs-6   ">
                <a className="nav-link text-white" href="#about">
                  About me
                </a>
              </li>
              <li className="nav-item me-4 text-uppercase fw-600 fs-6   ">
                <a className="nav-link text-white " href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item me-4 text-uppercase fw-600 fs-6   ">
                <a className="nav-link text-white " href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item me-4 text-uppercase fw-600 fs-6 ">
                <a className="nav-link text-white " href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item text-uppercase fw-600 fs-6 ">
                <a
                  className="nav-link text-white cta cta-contact"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
