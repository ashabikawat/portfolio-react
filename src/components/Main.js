import React from "react";
import Hero from "../assets/hero image.webp";

function Main() {
  return (
    <div className="background-color-primary">
      <main className="container px-5">
        <section className="row align-items-center display-flex">
          <div className="col">
            <div className="">
              <span className="text-color-secondary fs-5">I'm a</span>
              <h1 className="text-white text-uppercase hero-text-fs fw-bolder mt-3 ">
                full stack web developer.
              </h1>
              <a href="#contact">
                <button className="cta mt-lg-4 mt-3 cta-btn text-uppercase fw-bold cta-contact">
                  Start a Project
                </button>
              </a>
            </div>
          </div>
          <div className="col text-center">
            <img
              src={Hero}
              alt="Hero"
              className="img-fluid hero-img float-lg-end float-md-end"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
