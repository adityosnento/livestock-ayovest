import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./aboutcomponent.scss";

export default class AboutComponent extends Component {
  render() {
    return (
      <Container className="about-component">
        <Row>
          <Col md="6" xs="12">
            <div className="center-image">
              <img
                src={require("../../asset/image/photos.jpeg")}
                alt="gambar"
              />
            </div>
          </Col>
          <Col>
            <div className="about-description">
              <p className="page">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <span className="view-more">
                View More <i className="fa fa-chevron-circle-right"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
