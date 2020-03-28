import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class InvestasiTerpopler extends Component {
  render() {
    return (
      <Container>
        <Row className="investment-title">
          <Col>
            <h5 style={{fontSize:"16px"}}>AYOVEST</h5>
            <h1 style={{ textAlign: "center", fontWeight: "800" }}>
              Instrumen Investasi Terpopuler
            </h1>
            <p style={{color: "#949494"}}>Berikut adalah investasi yang paling banyak dicari oleh para investor, semoga bisa membantu:</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
