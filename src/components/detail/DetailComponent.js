import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./detailcomponent.scss";

export default class DetailComponent extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="detail-font">
            <h1>{this.props.name}</h1>
            <h3>Rp.{this.props.priceUnit}</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}
