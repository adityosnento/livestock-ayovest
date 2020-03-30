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
              <h3>Beneficial Financing</h3>
              <p>
              can benefit from a profit sharing of between 12-30%
  value of financing per year
              </p>
            </div>
            <div className="whyus__content">
              <img src={require("../../asset/why/2.png")} alt="logo" />
              <h3>Empowering Breeders</h3>
              <p>
              Farmers can have jobs and optimize livestock so that it can increase income
              </p>
            </div>
            <div className="whyus__content">
              <img src={require("../../asset/why/3.png")} alt="logo" />
              <h3>Environmentally friendly</h3>
              <p>
              The community feels the impact of greening and increasing food production
              </p>
            </div>
            <div className="whyus__content">
              <img src={require("../../asset/why/4.png")} alt="logo" />
              <h3>Food security</h3>
              <p>
              Lenders participate in increasing domestic food production
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
