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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <i class="fa fa-google"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-youtube"></i>
            <i class="fa fa-instagram"></i>
          </Col>
          <Col xs="12" md="2">
            <ul className="footer-important">
              <h5>Important Links</h5>
              <li>Investasi</li>
              <li>Cara Kerja</li>
              <li>Tentang Kami</li>
            </ul>
          </Col>
          <Col xs="12" md="2">
            <ul className="footer-link">
            <h5>Useful Links</h5>
              <li>Bantuan</li>
              <li>Hubungi Kami</li>
            </ul>
          </Col>
          <Col xs="12" md="4">
            <h4 style={{ textAlign: "center" }}>
              Subscribe Now
            </h4>
            <p>Lorem ipsum dolor sit ame consecte adipisicing elit, sed do eiusm</p>
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
