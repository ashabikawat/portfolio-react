import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="background-color-tertiary py-3">
        <section className="container py-4 px-5" id="contact">
          <h2 className="text-white text-capitalize sub-headings fw-bold text-secondary-fs">
            Contact.
          </h2>
          <div className="py-5 row gap-5 align-item-start ">
            <div className="col">
              <h4 className="text-white">Drop me a message !</h4>
              <div className="mt-5">
                <div className="text-white d-flex gap-2 align-items-center">
                  <Link
                    to={`tel:917208304683`}
                    className=" text-decoration-none text-white"
                  >
                    <span className="fs-5">
                      <ion-icon name="call-outline"></ion-icon>
                    </span>
                  </Link>

                  <span>+91-7208304683</span>
                </div>
                <div className="text-white d-flex gap-2 mt-3 align-items-center">
                  <Link
                    to={`mailto:ashab805412@gmail.com`}
                    className=" text-decoration-none text-white"
                  >
                    <span className="fs-5">
                      <ion-icon name="mail-outline"></ion-icon>
                    </span>
                  </Link>

                  <span>ashab805412@gmail.com</span>
                </div>
                <div className="text-white d-flex gap-2 mt-3 align-items-center">
                  <span className="fs-5">
                    <ion-icon name="earth-outline"></ion-icon>
                  </span>
                  <span>Mumbai, Maharashtra, India.</span>
                </div>
              </div>
            </div>
            <div className="col">
              <form>
                <div className="form-group text-white">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    type="email"
                    className="form-control mt-2 shadow-none"
                    id="exampleInputName1"
                    aria-describedby="emailHelp"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group mt-4 text-white">
                  <label for="exampleInputPassword1">Email</label>
                  <input
                    type="password"
                    className="form-control mt-2 shadow-none"
                    id="exampleInputEmail1"
                    placeholder="john@example.com"
                  />
                </div>
                <button type="submit" className="cta-btn mt-5 py-2 px-5 submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
