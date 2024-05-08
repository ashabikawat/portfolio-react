import React from "react";

function About() {
  return (
    <div className="background-color-primary">
      <section className="container py-5 " id="about">
        <div className="row ">
          <div class="col align-items-center px-5 ">
            <h2 className="text-white text-capitalize sub-headings fw-bold text-secondary-fs">
              About me.
            </h2>
            <p className="text-white mt-5 mt-20  line-height text-tertiary-fs ">
              I'm your go-to Full Stack Developer, all set to make your virtual
              ideas real.
              <p>
                I work wonders with JavaScript, React.js, Node.js, and
                express.js to make <br /> your online presence stand out.
              </p>
              <p>I focus on making websites easy to use.</p>
            </p>

            <p className="text-white text-tertiary-fs">
              Your ideas + My skills = reliable, easy-to-use, and top-notch
              products.
            </p>
            <button className=" mt-5 mt-20 cta-btn cta me-3 fw-600 cta-contact">
              Hire me
            </button>
            <button className=" mt-5  mt-20 cta-btn cta fw-600 cta-btn-secondary cta-resume">
              Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
