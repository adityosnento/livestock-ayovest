import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import '../home/ButtonLink.scss'

export default class ButtonLink extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <a href="/investationlist" className="button-play" alt="btn"> 
              {this.props.title}
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
