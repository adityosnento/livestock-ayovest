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
      <div className="ourteam-card">
        <h2> OUR TEAM MEMBER </h2>
        <Slider {...settings}>
          <div className="container-card">
          <img src={require("../../asset/Member/5.jpg")} alt="logo" />
          <h4>ADITYO S. NENTO</h4>
          <p>Frontend Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
          <div className="container-card">
          <img src={require("../../asset/Member/2.jpg")} alt="logo" />
          <h4>ADITYO S. NENTO</h4>
          <p>Frontend Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
          <div className="container-card">
          <img src={require("../../asset/Member/4.jpg")} alt="logo" />
          <h4>ADITYO S. NENTO</h4>
          <p>Frontend Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
          <div className="container-card">
          <img src={require("../../asset/Member/5.jpg")} alt="logo" />
          <h4>ADITYO S. NENTO</h4>
          <p>Frontend Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
          <div className="container-card">
          <img src={require("../../asset/Member/6.jpg")} alt="logo" />
          <h4>ADITYO S. NENTO</h4>
          <p>Frontend Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
          <div className="container-card">
          <img src={require("../../asset/Member/2.jpg")} alt="logo" />
          <h4>ADITYO S. NENTO</h4>
          <p>Frontend Developer</p>
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