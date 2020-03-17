import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";

export default class ButtonLink extends Component {
  render() {
    return (
      <Container style={{ marginBottom: "3rem" }}>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Button
              color="primary"
              size="lg"
              style={{
                borderRadius: "10% 10% 10% 10%",
                border: "none",
                textTransform: "uppercase"
              }}
            >
              {this.props.title}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
