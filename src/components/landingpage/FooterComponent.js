import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./footercomponent.scss";

export default class FooterComponent extends Component {
  render() {
    return (
      <Container className="footer-container" fluid>
        <Row className="footer">
          <Col xs="12" md="3">
            <span>Monggovest</span>
          </Col>
          <Col xs="12" md="2">
            <ul className="footer-link">
              <li>Investasi</li>
              <li>Cara Kerja</li>
              <li>Tentang Kami</li>
            </ul>
          </Col>
          <Col xs="12" md="2">
            <ul className="footer-link">
              <li>Bantuan</li>
              <li>Hubungi Kami</li>
            </ul>
          </Col>
          <Col xs="12" md="5">
            <h3 style={{ textAlign: "center" }}>
              Download Aplikasi Smartphone
            </h3>
            <Row>
              <Col className="footer-download-icon">
                <i className="fa fa-apple" title="Apple store"></i>
              </Col>
              <Col className="footer-download-icon">
                <i className="fa fa-google" title="Google play"></i>
              </Col>
            </Row>
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
