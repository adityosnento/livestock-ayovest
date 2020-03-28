import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../contactus/contactus.scss";

export default class contactus extends Component {
  render() {
    return (
      <div>
        <div className="parallax-container">
          <div className="material-parallax">
            <img src={require("../../asset/image/invest.webp")} alt="logo" />
          </div>
          <div className="breadcrumbs-custom-body parallax-content context-dark">
            <div className="container">
              <h2 className="breadcrumbs-custom-title">CONTACT US</h2>
            </div>
          </div>
        </div>
        <div className="breadcrumb_payment">
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="container__contactus">
          <div className="title__contactus">
            <h3>GET IN TOUCH</h3>
            <p>
              We are available 24/7 by fax, e-mail or by phone. You can also use
              our quick contact form to ask a question about our products.
            </p>
          </div>
          <div className="containerinput__contactus">
              <div className="containerinput__namemail">
              <label for="fname">FirstName:</label>
              <input type="text" id="fname" name="fname"/>
              <label for="email" id="email">E-mail:</label>
              <input type="text" name="email"/>
              </div>
              <div className="containerinput__lastphone">
              <label for="lname">LastName:</label>
              <input type="text" id="lname" name="lname"/>
              <label for="phone" id="phone">Phone</label>
              <input type="text" name="phone"/>
              </div>
              <div className="containerinput__textarea">
              <label for="textarea">Message</label>
                  <textarea/>
              </div>
          </div>
          <button>SEND MESSAGE</button>
        </div>
      </div>
    );
  }
}
