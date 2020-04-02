import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./footercomponent.scss";

export default class FooterComponent extends Component {
  render() {
    return (
      <Container className="footer-container" fluid>
        <Row className="footer">
          <Col xs="12" md="4">
            <span>Ayovest</span>
            <p>
            Ayovest exists as a collaborative medium for a common vision. We believe the opportunity to contribute to the nation belongs to everyone.
            </p>
          </Col>
          <Col xs="12" md="2">
            <ul className="footer-important">
              <h5>Important Links</h5>
              <li>Investation</li>
              <li>About Us</li>
            </ul>
          </Col>
          <Col xs="12" md="2">
            <ul className="footer-link">
              <h5>Useful Links</h5>
              <li>Contact Us</li>
              <li>Helps</li>
            </ul>
          </Col>
          <Col xs="12" md="4">
            <div className="logos">
            <h4 style={{ textAlign: "center" }}>We Are Available </h4>
            <img src={require("../asset/auth/playstore.png")} alt="logo" />
            <img src={require("../asset/auth/apple.png")} alt="logo" id="apple"/>
            </div>
            <div className="sosmed">
            <i className="fa fa-google"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-youtube"></i>
            <i className="fa fa-instagram"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="footer-brand">
            <p>Ayovest &#169; 2020</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
