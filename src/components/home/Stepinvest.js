import React from "react";
import "./Stepinvest.scss";

export default function Stepinvest() {
  return (
    <div className="container__stepinvest">
      <div className="container__stepinvest__left">
        <h5>Ayovest</h5>
        <h1>How to Invest</h1>
        <p>
          Hasil bersih adalah hasil keuntungan produksi komoditas sejenis yang
          dikelola dikurangi dengan production cost langsung yang terkait dengan
          komoditas tersebut. Hasil bersih tersebut secara umum akan dibagikan
          ke pengelola peternakan.
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
      <div className="container__stepinvest__right">
        <div className="container__stepinvest__flex">
          <div className="container__stepinvest__content">
            <img src={require("../../asset/Service/1.png")} alt="logo" />
            <div className="container__stepinvest__content__padding">
              <h1>Instrument Investation</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
              </p>
            </div>
          </div>
          <div className="container__stepinvest__content">
            <img src={require("../../asset/Service/2.png")} alt="logo" />
            <div className="container__stepinvest__content__padding">
              <h1>Payment</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
              </p>
            </div>
          </div>
        </div>
        <div className="container__stepinvest__content">
          <img src={require("../../asset/Service/3.png")} alt="logo" />
          <div className="container__stepinvest__content__padding">
            <h1>Capital to Breeder</h1>
            <p>
              Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
            </p>
          </div>
        </div>
        <div className="container__stepinvest__content">
          <img src={require("../../asset/Service/4.png")} alt="logo" />
          <div className="container__stepinvest__content__padding">
            <h1>Investment Return</h1>
            <p>
              Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
