import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, CardFooter } from "reactstrap";

import "./cardcomponent.scss";

export default class CardComponent extends Component {
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
        <Row>
          <Col xs="12" md="4" className="card-item">
            <Card className="card-item-single">
              <img src={require("../../asset/image/sapi.jpg")} alt="sapi" />
              <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                eligendi, pariatur molestiae ducimus vitae velit aspernatur
                eveniet, placeat temporibus iste quibusdam labore totam corrupti
                minima, doloremque unde a? Assumenda, voluptas?
                <h3 style={{ color: "blue", textAlign: "center" }}>
                  Rp. 16.000.000
                </h3>
              </CardBody>
              <CardFooter className="card-footer-text">
                <i className="fa fa-bar-chart"></i>
                <span>12%-19%</span>
                <i className="fa fa-clock-o float-right"></i>
                <span className="float-right">10 tahun</span>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" md="4" className="card-item">
            <Card className="card-item-single">
              <img src={require("../../asset/image/sapi.jpg")} alt="sapi" />
              <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                eligendi, pariatur molestiae ducimus vitae velit aspernatur
                eveniet, placeat temporibus iste quibusdam labore totam corrupti
                minima, doloremque unde a? Assumenda, voluptas?
                <h3 style={{ color: "blue", textAlign: "center" }}>
                  Rp. 16.000.000
                </h3>
              </CardBody>
              <CardFooter className="card-footer-text">
                <i className="fa fa-bar-chart"></i>
                <span>12%-19%</span>
                <i className="fa fa-clock-o float-right"></i>
                <span className="float-right">10 tahun</span>
              </CardFooter>
            </Card>
          </Col>
          <Col xs="12" md="4" className="card-item">
            <Card className="card-item-single">
              <img src={require("../../asset/image/sapi.jpg")} alt="sapi" />
              <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                eligendi, pariatur molestiae ducimus vitae velit aspernatur
                eveniet, placeat temporibus iste quibusdam labore totam corrupti
                minima, doloremque unde a? Assumenda, voluptas?
                <h3 style={{ color: "blue", textAlign: "center" }}>
                  Rp. 16.000.000
                </h3>
              </CardBody>
              <CardFooter className="card-footer-text">
                <i className="fa fa-bar-chart"></i>
                <span>12%-19%</span>
                <i className="fa fa-clock-o float-right"></i>
                <span className="float-right">10 tahun</span>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
