import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import "./investmentcomponent.scss";

export default class InvestmentComponent extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="investment-title">
            <h1>Langkah Mudah Berinvestasi</h1>
          </Col>
        </Row>
        <Row className="investment-row-img">
          <Col>
            <Row>
              <Col md="6" xs="12" className="investment-center-img">
                <img
                  src={require("../../asset/image/icon1.svg")}
                  alt="gambar-orang"
                />
              </Col>
              <Col md="6" xs="12">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  porro tempore quis vitae pariatur! Dolor voluptas optio maxime
                  magni dolores id aperiam rerum nulla debitis, earum, voluptate
                  quam. Molestiae, impedit?
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs="12" md="6" className="investment-center-img">
                <img
                  src={require("../../asset/image/icon2.svg")}
                  alt="investment-payment"
                />
              </Col>
              <Col>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid vel accusamus quam consequuntur facere natus. Quisquam
                totam quia nihil necessitatibus, enim fugit commodi, iste
                assumenda dolor corrupti reprehenderit error deleniti.
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="investment-row-img">
          <Col>
            <Row>
              <Col xs="12" md="6" className="investment-center-img">
                <img
                  src={require("../../asset/image/icon3.svg")}
                  alt="investment-cow"
                />
              </Col>
              <Col>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  voluptate quae molestiae explicabo quisquam provident rerum
                  fugit voluptatem, tempora asperiores recusandae itaque illo
                  ratione praesentium accusantium quia! Est, consectetur
                  blanditiis.
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs="12" md="6" className="investment-center-img">
                <img
                  src={require("../../asset/image/icon4.svg")}
                  alt="gambar-grafik"
                />
              </Col>
              <Col>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam a porro ea, asperiores cupiditate corporis dolore
                  cum sapiente ullam nemo molestiae, earum, voluptatibus maxime
                  cumque temporibus sunt recusandae tenetur totam.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
