import React from "react";

function Services() {
  return (
    <>
      <div className="background-color-secondary py-5 ">
        <section className="container py-4 px-5" id="services">
          <h2 className="text-white text-capitalize sub-headings fw-bold text-secondary-fs">
            Services.
          </h2>
          <div className="py-5">
            <div className="row display-flex-service ">
              <div className="col background-color-tertiary me-5 mb-5 p-5">
                <div className="text-white icons-fs mb-4 icons">
                  <ion-icon name="desktop-outline"></ion-icon>
                </div>
                <span className="text-white fw-bold fs-6 text-capitalize  service-span">
                  Web design
                </span>
                <p className="text-white mt-5 line-height-service text-small-fs">
                  I specialize in making websites that are both easy to use and
                  visually appealing. From the design to how it works on
                  different devices, I focus on making everything user-friendly
                  and attractive.
                </p>
              </div>
              <div className="col background-color-tertiary me-5 mb-5 p-5">
                <div className="text-white icons-fs mb-4 icons ">
                  <ion-icon name="code-slash-outline"></ion-icon>
                </div>
                <span className="text-white fw-bold fs-6 text-capitalize service-span">
                  Web Development
                </span>
                <p className="text-white mt-5 line-height-service text-small-fs">
                  I specialize in bringing ideas to life through coding and
                  development. Whether it's building a website from scratch or
                  creating custom software, I thrive on turning concepts into
                  functional, user-friendly realities.
                </p>
              </div>
            </div>

            <div className="row display-flex-service">
              <div className="col background-color-tertiary me-5 mb-5 p-5">
                <div className="text-white icons-fs mb-4 icons">
                  <ion-icon name="settings-outline"></ion-icon>
                </div>
                <span className="text-white fw-bold fs-6 text-capitalize service-span">
                  SEO Optimization
                </span>
                <p className="text-white mt-5 line-height-service text-small-fs">
                  Boosting your online visibility is crucial, and that's where
                  SEO optimization comes in. I specialize in fine-tuning
                  websites to rank higher on search engines.
                </p>
              </div>
              <div className="col background-color-tertiary me-5 mb-5 p-5">
                <div className="text-white icons-fs mb-4 icons">
                  <ion-icon name="phone-portrait-outline"></ion-icon>
                </div>
                <span className="text-white fw-bold fs-6 text-capitalize service-span">
                  responsive design
                </span>
                <p className="text-white mt-5 line-height-service text-small-fs">
                  Today, browsing happens on all sorts of devices, from phones
                  to tablets to computers.I focus on creating websites that look
                  fantastic and work seamlessly on any screen size.
                </p>
              </div>
            </div>

            <div className="row display-flex-service">
              <div className="background-color-tertiary me-5 mb-5 p-5 col">
                <div className="text-white icons-fs mb-4 icons">
                  <ion-icon name="logo-github"></ion-icon>
                </div>
                <span className="text-white fw-bold fs-6 text-capitalize service-span">
                  version control
                </span>
                <p className="text-white mt-5 line-height-service text-small-fs">
                  Version control is like a safety net for your projects. It's a
                  tool that tracks changes in your code, allowing you to go back
                  to earlier versions if needed.
                </p>
              </div>
              <div className="background-color-tertiary me-5 mb-5 p-5 col">
                <div className="text-white icons-fs mb-4 icons ">
                  <ion-icon name="bug-outline"></ion-icon>
                </div>
                <span className="text-white fw-bold fs-6 text-capitalize service-span">
                  Debugging
                </span>
                <p className="text-white mt-5 line-height-service text-small-fs">
                  Skilled in systematically identifying and resolving issues
                  within software applications by analyzing code, logs, and
                  relevant data to ensure smooth functionality and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
