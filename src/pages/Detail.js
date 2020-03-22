import React, { Component } from "react";
import DetailComponent from "../components/detail/DetailComponent";
import { Container, Row, Col } from "reactstrap";
import DetailCarousel from "../components/detail/DetailCarousel";
import TabComponent from "../components/detail/TabComponent";
import ButtonLink from "../components/home/ButtonLink";
import CardComponent from "../components/home/CardComponent";
import { livestockGetOne } from "../utils/api";
import './Detail.scss'

export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;
    this.state = {
      livestock: []
    };
    livestockGetOne(this.id).then(res => {
      const livestock = res.data.data;
      this.setState({
        livestock: livestock
      });

      console.log(this.state);
    });
  }
  render() {
    return (
      <div className="detail-container">
        <Container>
          <Row>
            <DetailComponent
              name={this.state.livestock.name}
              priceUnit={this.state.livestock.priceUnit}
            />
          </Row>
          <Row>
            <Col xs="12" md="6">
              <DetailCarousel />
            </Col>
            <Col>
              <TabComponent
               name={this.state.livestock.name}
               priceUnit={this.state.livestock.priceUnit}
                contractPeriod={this.state.livestock.contractPeriod}
                expectedReturn={this.state.livestock.expectedReturn}
                sharingPeriod={this.state.livestock.sharingPeriod}
                description={this.state.livestock.description}
              />
            </Col>
          </Row>
          
          <CardComponent />
        </Container>
      </div>
    );
  }
}
