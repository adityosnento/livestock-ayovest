import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class InvestasiTerpopler extends Component {
  render() {
    return (
      <Container>
        <Row className="investment-title">
          <Col>
            <h1 style={{ textAlign: "center" }}>
              Instrumen Investasi Terpopuler
            </h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
