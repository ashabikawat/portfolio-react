import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="background-color-secondary py-4 ">
      <footer
        className="container py-2 d-flex justify-content-between display-flex-service"
        id="footer"
      >
        <p className="text-white">2023 - Asha bikawat. All rights reserved</p>
        <div className="d-flex justify-content-end me-4 mt-4">
          <Link to="https://www.facebook.com/ashaabikawat" target="_blank">
            <span className="fs-5 me-3 social-media-icons">
              <ion-icon name="logo-facebook"></ion-icon>
            </span>
          </Link>

          <Link to="https://twitter.com/ashaa_bikawat" target="_blank">
            <span className="fs-5 me-3 social-media-icons">
              <ion-icon name="logo-twitter"></ion-icon>
            </span>
          </Link>

          <Link to="https://www.linkedin.com/in/asha-bikawat/" target="_blank">
            <span className="fs-5 me-3 social-media-icons">
              <ion-icon name="logo-linkedin"></ion-icon>
            </span>
          </Link>

          <Link to="https://github.com/ashabikawat" target="_blank">
            <span className="fs-5 me-3 social-media-icons">
              <ion-icon name="logo-github"></ion-icon>
            </span>
          </Link>

          <span className="fs-5 me-3 social-media-icons">
            <ion-icon name="logo-instagram"></ion-icon>
          </span>

          <span className="fs-5 me-3 social-media-icons">
            <ion-icon name="logo-medium"></ion-icon>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
