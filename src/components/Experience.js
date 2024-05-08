import React from "react";
import Html from "../assets/html (2).png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import Git from "../assets/github (1).png";
import Node from "../assets/nodejs.png";
import Mongo from "../assets/mongo-db.png";
import Type from "../assets/typescript (1).png";

function Experience() {
  return (
    <div className="background-color-secondary py-5">
      <section className="container py-4 px-5" id="experience">
        <h2 className="text-white text-capitalize sub-headings fw-bold text-secondary-fs">
          Experience.
        </h2>
        <div className="container">
          <div className="row mt-5">
            <div className="col mb-4 filter">
              <img src={Html} alt="HTML" />
            </div>
            <div className="col filter mb-4">
              <img src={Css} alt="CSS" />
            </div>
            <div className="col filter mb-4">
              <img src={Javascript} alt="JavaScript" />
            </div>
            <div className="col filter mb-4">
              <img src={react} alt="react" />
            </div>
            <div className="col filter mb-4">
              <img src={Tailwind} alt="Tailwind" />
            </div>
            <div className="col filter mb-4">
              <img src={Git} alt="GIT" />
            </div>
            <div className="col filter mb-4">
              <img src={Node} alt="Node js" />
            </div>
            <div className="col filter mb-4">
              <img src={Mongo} alt="Mongo DB" />
            </div>
            <div className="col filter mb-4">
              <img src={Type} alt="TypeScript" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
