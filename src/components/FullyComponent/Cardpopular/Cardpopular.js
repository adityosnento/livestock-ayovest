import React from "react";
import "../Cardpopular/Cardpopular.scss";

export default function Cardpopular() {
  return (
    <div className="container__allitem">
       <h5 className="monggovest5">Monggovest</h5>
      <h1>Popular item to invest</h1>
      <p>
        Telah terdapat 1000 ekor sapi dengan 473 orang 594 slot tersisa. Dalam
        sejarahnya, sapi penghasil susu dan sapi pedaging tidak memiliki
        perbedaaan mencolok, dengan induk yang sama dapat digunakan untuk
        menghasilkan sapi yang menghasilkan susu (sapi betina) maupun daging
        (umumnya sapi jantan).
      </p>
      <div className="container__popularinvest">
        <div className="card__container">
          <img src={require("../../../assets/Sapi/1.png")} alt="logo"></img>
          <h1>Abardeen Angus</h1>
          <h5>Rp.19.000.000</h5>
          <div className="container__investment">
            <div className="status__investment">
              <img
                src={require("../../../assets/icons/invest.svg")}
                alt="logo"
              ></img>
              <p>12-30%</p>
            </div>
            <div className="status__investment">
              <img
                src={require("../../../assets/icons/clock.svg")}
                alt="logo"
              ></img>
              <p>10-12 tahun</p>
            </div>
          </div>
        </div>
        <div className="card__container">
          <img src={require("../../../assets/Sapi/1.png")} alt="logo"></img>
          <h1>Abardeen Angus</h1>
          <h5>Rp.19.000.000</h5>
          <div className="container__investment">
            <div className="status__investment">
              <img
                src={require("../../../assets/icons/invest.svg")}
                alt="logo"
              ></img>
              <p>12-30%</p>
            </div>
            <div className="status__investment">
              <img
                src={require("../../../assets/icons/clock.svg")}
                alt="logo"
              ></img>
              <p>10-12 tahun</p>
            </div>
          </div>
        </div>
        <div className="card__container">
          <img src={require("../../../assets/Sapi/1.png")} alt="logo"></img>
          <h1>Abardeen Angus</h1>
          <h5>Rp.19.000.000</h5>
          <div className="container__investment">
            <div className="status__investment">
              <img
                src={require("../../../assets/icons/invest.svg")}
                alt="logo"
              ></img>
              <p>12-30%</p>
            </div>
            <div className="status__investment">
              <img
                src={require("../../../assets/icons/clock.svg")}
                alt="logo"
              ></img>
              <p>10-12 tahun</p>
            </div>
          </div>
        </div>
      </div>
      <div className="view-more">
      <button className="btn-viewmore">View More -></button>
      </div>
    </div>
  );
}
