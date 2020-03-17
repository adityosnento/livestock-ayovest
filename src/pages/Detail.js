import React, { Component } from "react";
import DetailComponent from "../components/detail/DetailComponent";
import { Container, Row, Col } from "reactstrap";
import DetailCarousel from "../components/detail/DetailCarousel";
import TabComponent from "../components/detail/TabComponent";
import ButtonLink from "../components/home/ButtonLink";
import CardComponent from "../components/home/CardComponent";

export default class Detail extends Component {
  render() {
    return (
      <div className="page-container">
        <Container>
          <Row>
            <DetailComponent />
          </Row>
          <Row>
            <Col xs="12" md="6">
              <DetailCarousel />
            </Col>
            <Col>
              <TabComponent />
            </Col>
          </Row>
          <ButtonLink title="lakukan investasi" />
          <CardComponent />
        </Container>
      </div>
    );
  }
}
