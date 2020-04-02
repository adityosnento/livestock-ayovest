import React, { Component } from "react";
import Slider from "react-slick";
import './Ourteam.scss'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="ourteam-card animated fadeIn">
        <h2> OUR TEAM MEMBER </h2>
        <Slider {...settings}>
          <div className="container-card">
          <img src={require("../../asset/Member/5.png")} alt="logo" />
          <h4>ADITYO S. NENTO</h4>
          <p>Frontend Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
          <div className="container-card">
          <img src={require("../../asset/Member/3.png")} alt="logo" />
          <h4>MICHAEL SIHOMBING</h4>
          <p>Backend Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
          <div className="container-card">
          <img src={require("../../asset/Member/2.png")} alt="logo" />
          <h4>Vicky Hermawan</h4>
          <p>React Native Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
          <div className="container-card">
          <img src={require("../../asset/Member/1.png")} alt="logo" />
          <h4>Bianca Belinda</h4>
          <p>Frontend Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
          <div className="container-card">
          <img src={require("../../asset/Member/4.png")} alt="logo" />
          <h4>Firbert Oktariko</h4>
          <p>Backend Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}