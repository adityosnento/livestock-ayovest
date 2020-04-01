import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import './InvestasiTerpopuler.scss'

export default class InvestasiTerpopler extends Component {
  render() {
    return (
      <Container>
        <Row className="investment-title">
          <Col>
            <h5 style={{fontSize:"16px"}}>AYOVEST</h5>
            <h1 style={{ textAlign: "center", fontWeight: "800" }}>
            The Most Popular Investment Instrument
            </h1>
            <p style={{color: "#949494"}}>Here are the investments most sought after by investors, hopefully they can help:</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
