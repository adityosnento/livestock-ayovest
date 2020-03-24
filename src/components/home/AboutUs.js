import React from "react";
import "./AboutUs.scss";

export default function LandingPage() {
  return (
    <div className="container__aboutus">
      <img src={require("../../asset/image/AboutUS.png")} alt="logo" />
      <div className="container__aboutus__content">
        <h5>Ayovest</h5>
        <h1>ABOUT US</h1>
        <p>
          Ayovest hadir sebagai medium kolaborasi untuk satu visi yang sama.
          Kami percaya bahwa kesempatan untuk berkontribusi kepada bangsa adalah
          milik semua orang. Kami bertekad untuk memberi kesepatan yang sama
          kepada setiap individu. Dengan satu tujuan, eskalasi produksi
          peternakan.
        </p>
        <div id="container__button">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
