import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody, CardFooter } from "reactstrap";
import "./cardcomponent.scss";


export default class CardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livestocks: this.props.livestocks,
      totalPages: 1
    };
  }

  componentWillReceiveProps = props => {
    this.setState({
      livestocks: props.livestocks
    });
  };

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
          <Card className="card-item-single">
            <img src={data.image} alt="sapi" />
            <CardBody>
              <p>{data.name}</p>
              <h3 style={{ textAlign: "center" }}>$ {data.priceUnit}</h3>
            </CardBody>
            <CardFooter className="card-footer-text">
              <i className="fa fa-bar-chart"></i>
              <span>{data.expectedReturn}</span>
              <i className="fa fa-clock-o float-right"></i>
              <span className="float-right">{data.contractPeriod} years</span>
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
