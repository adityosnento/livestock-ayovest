import React from "react";
import "./AboutUs.scss";

export default function LandingPage() {
  return (
    <div className="container__aboutus">
      <img src={require("../../../assets/anjing2.jpg")} alt="logo" />
      <div className="container__aboutus__content">
        <h5>Monggovest</h5>
        <h1>ABOUT US</h1>
        <p>
          Monggovest hadir sebagai medium kolaborasi untuk satu visi yang sama.
          Kami percaya bahwa kesempatan untuk berkontribusi kepada bangsa adalah
          milik semua orang. Kami bertekad untuk memberi kesepatan yang sama
          kepada setiap individu. Dengan satu tujuan, eskalasi produksi
          peternakan.
        </p>
        <div id="container__button">
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
