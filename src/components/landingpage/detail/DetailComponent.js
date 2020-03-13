import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./detailcomponent.scss";

export default class DetailComponent extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="detail-font">
            <h1>Sapi Perah</h1>
            <h3>Rp. 19.000.000</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}
