import React from "react";
import "../StepInvestation/Stepinvest.scss";

export default function Stepinvest() {
  return (
    <div className="container__stepinvest">
      <div className="container__stepinvest__left">
      <h5>Monggovest</h5>
        <h1>How to Invest</h1>
        <p>
          Hasil bersih adalah hasil keuntungan produksi komoditas sejenis yang
          dikelola dikurangi dengan production cost langsung yang terkait dengan
          komoditas tersebut. Hasil bersih tersebut secara umum akan dibagikan
          ke pengelola peternakan.
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
      <div className="container__stepinvest__right">
        <div className="container__stepinvest__flex">
          <div className="container__stepinvest__content">
            <img src={require("../../../assets/Service/1.svg")} alt="logo" />
            <div className="container__stepinvest__content__padding">
              <h1>Choose Instrument Investation</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
                yang dikelola dikurangi dengan production cost langsung yang
                terkait dengan komoditas tersebut.
              </p>
            </div>
          </div>
          <div className="container__stepinvest__content">
            <img src={require("../../../assets/Service/2.svg")} alt="logo" />
            <div className="container__stepinvest__content__padding">
              <h1>Choose Instrument Investation</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
                yang dikelola dikurangi dengan production cost langsung yang
                terkait dengan komoditas tersebut.
              </p>
            </div>
          </div>
        </div>
        <div className="container__stepinvest__content">
            <img src={require("../../../assets/Service/3.svg")} alt="logo" />
            <div className="container__stepinvest__content__padding">
              <h1>Choose Instrument Investation</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
                yang dikelola dikurangi dengan production cost langsung yang
                terkait dengan komoditas tersebut.
              </p>
            </div>
          </div>
          <div className="container__stepinvest__content">
            <img src={require("../../../assets/Service/4.svg")} alt="logo" />
            <div className="container__stepinvest__content__padding">
              <h1>Choose Instrument Investation</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
                yang dikelola dikurangi dengan production cost langsung yang
                terkait dengan komoditas tersebut.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}
