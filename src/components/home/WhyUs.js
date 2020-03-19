import React, { Component } from "react";
import "./WhyUs.scss";

export default class WhyUs extends Component {
  render() {
    return (
      <div className="whyus__container">
        <div className="whyus__containerleft">
          <div className="whyus__containertop">
            <h5>AYOVEST</h5>
            <h2>Why you must choose us for your investment? </h2>
            <p>
              You must choose us because you will receive so many advantage,
              such us:
            </p>
          </div>
          <div className="whyus__containerbottom">
            <div className="whyus__content">
              <img src={require("../../asset/why/1.png")} alt="logo" />
              <h3>Pembiayaan Menguntungkan</h3>
              <p>
                dapat memperoleh keuntungan dari bagi hasil antara 12-30% dari
                nilai pembiayaan per tahun
              </p>
            </div>
            <div className="whyus__content">
              <img src={require("../../asset/why/2.png")} alt="logo" />
              <h3>Memberdayakan Peternak</h3>
              <p>
                Peternak bisa punya pekerjaan dan mengoptimalkan peternakan
                sehingga menambah pendapatan
              </p>
            </div>
            <div className="whyus__content">
              <img src={require("../../asset/why/3.png")} alt="logo" />
              <h3>Ramah Lingkungan</h3>
              <p>
                Masyarakat merasakan dampak penghijauan dan peningkatan produksi
                pangan
              </p>
            </div>
            <div className="whyus__content">
              <img src={require("../../asset/why/4.png")} alt="logo" />
              <h3>Ketahanan Pangan</h3>
              <p>
                Lender berpartisipasi dalam peningkatan produksi pangan dalam
                negeri
              </p>
            </div>
          </div>
        </div>
        <div className="whyus__containerright">
        <img src={require("../../asset/why/mbe.png")} alt="logo" />
        </div>
      </div>
    );
  }
}
