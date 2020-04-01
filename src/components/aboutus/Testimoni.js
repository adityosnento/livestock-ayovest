import React, { Component } from "react";
import Slider from "react-slick";
import "./Testimoni.scss";

export default class Testimony extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div className="testimony-card">
        <h2> TESTIMONIAL </h2>
        <div>
          <Slider {...settings}>
            <div className="container-testimony">
            <i class="fa fa-quote-left"></i>
              <h3>
              "I STRONGLY recommend breeder to EVERYONE interested in running a successful online business!"
              </h3>
              <div className="container__person">
                <div className="img__testimonial">
                  <img
                    src={require("../../asset/image/user1.jpeg")}
                    alt="logo"
                  />
                </div>
                <div className="paragraph__description">
                  <p id="title__position">WILLIAM ENDOK</p>
                  <p>Client</p>
                </div>
              </div>
            </div>
            <div className="container-testimony">
            <i class="fa fa-quote-left"></i>
              <h3>
                We're loving it. Nice work on your farm. Farm is both attractive
                and highly adaptable. Farm is great
              </h3>
              <div className="container__person">
                <div className="img__testimonial">
                  <img
                    src={require("../../asset/image/user1.jpeg")}
                    alt="logo"
                  />
                </div>
                <div className="paragraph__description">
                  <p id="title__position">WILLIAM ENDOK</p>
                  <p>Client</p>
                </div>
              </div>
            </div>
            <div className="container-testimony">
            <i class="fa fa-quote-left"></i>
              <h3>
              I love this investation! For years, I hated investation because I was drinking the store-bought stuff, but this tastes wonderful and I’m addicted!
              </h3>
              <div className="container__person">
                <div className="img__testimonial">
                  <img
                    src={require("../../asset/image/user1.jpeg")}
                    alt="logo"
                  />
                </div>
                <div className="paragraph__description">
                  <p id="title__position">WILLIAM ENDOK</p>
                  <p>Client</p>
                </div>
              </div>
            </div>
            <div className="container-testimony">
            <i class="fa fa-quote-left"></i>
              <h3>
                We're loving it. Nice work on your farm. Farm is both attractive
                and highly adaptable. Farm is great
              </h3>
              <div className="container__person">
                <div className="img__testimonial">
                  <img
                    src={require("../../asset/image/user1.jpeg")}
                    alt="logo"
                  />
                </div>
                <div className="paragraph__description">
                  <p id="title__position">WILLIAM ENDOK</p>
                  <p>Client</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
