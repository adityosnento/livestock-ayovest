import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import '../home/ButtonLink.scss'

export default class ButtonLink extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Button className="button-play">
              {this.props.title}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
