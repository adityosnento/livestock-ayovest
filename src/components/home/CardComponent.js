import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, CardFooter } from "reactstrap";

import "./cardcomponent.scss";
import { liveStockGetAll } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";

export default class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livestocks: [],
      totalPages:1
    };

    liveStockGetAll()
      .then(res => {
        this.setState({
          livestocks: res.data.data.docs,
          totalPages: res.data.data.totalPages
        });
      })
      .catch(err => {
        toast.error("Failed to get livestocks data");
      });
  }

  cardClicked = id => {
    window.location.href = "/detail/" + id;
  };

  render() {
    const cardData = this.state.livestocks.map(data => {
      return (
        <Col
          onClick={() => this.cardClicked(data._id)}
          key={data._id}
          xs="11"
          md="4"
          className="card-item"
        >
          <ToastContainer/>
          <Card className="card-item-single">
            <img src={data.image} alt="sapi" />
            <CardBody>
              <p>{data.description}</p>
              <h3 style={{ textAlign: "left" }}>
                $ {data.priceUnit}
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
      );
    });
    return (
      <Container>
        <Row>{cardData}</Row>
      </Container>
    );
  }
}
