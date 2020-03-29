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
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div className="container-card">
          <img src={require("../../asset/image/user1.jpeg")} alt="logo" />
          <h4>ADITYO S. NENTO</h4>
          <p>Frontend Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
          <div className="container-card">
          <img src={require("../../asset/image/user1.jpeg")} alt="logo" />
          <h4>ADITYO S. NENTO</h4>
          <p>Frontend Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
          <div className="container-card">
          <img src={require("../../asset/image/user1.jpeg")} alt="logo" />
          <h4>ADITYO S. NENTO</h4>
          <p>Frontend Developer</p>
          <div className="logo__center">
          <i class="fa fa-facebook-f"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter"></i>
          </div>
          </div>
          <div className="container-card">
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}