import React, { Component } from "react";
import "../home/Stepinvest(2).scss";

export default class Stepinvest2 extends Component {
  render() {
    return (
      <div className="container__fullstepinvest">
        <div className="container__stepinvest2">
          <div className="container__stepinvest__content">
            <div className="flex__title">
              <h1>01</h1>
              <img src={require("../../asset/image/money.svg")} alt="logo" />
            </div>
            <div className="container__stepinvest__content__padding">
              <h1>INSTRUMENT INVESTASI</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
              </p>
            </div>
          </div>

          <div className="container__stepinvest__content">
            <div className="flex__title">
              <h1>02</h1>
              <img src={require("../../asset/image/bank.svg")} alt="logo" />
            </div>
            <div className="container__stepinvest__content__padding">
              <h1>PAYMENT</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
              </p>
            </div>
          </div>

          <div className="container__stepinvest__content">
            <div className="flex__title">
              <h1>03</h1>
              <img src={require("../../asset/image/smartfarm.svg")} alt="logo" />
            </div>
            <div className="container__stepinvest__content__padding">
              <h1>CAPITAL TO BREEDER</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
              </p>
            </div>
          </div>

          <div className="container__stepinvest__content">
            <div className="flex__title">
              <h1>04</h1>
              <img src={require("../../asset/image/cow.svg")} alt="logo" />
            </div>
            <div className="container__stepinvest__content__padding">
              <h1>INVESTMENT RETURN</h1>
              <p>
                Hasil bersih adalah hasil keuntungan produksi komoditas sejenis
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
