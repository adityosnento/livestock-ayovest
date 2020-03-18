import React, { Component } from "react";
import DetailComponent from "../components/detail/DetailComponent";
import { Container, Row, Col } from "reactstrap";
import DetailCarousel from "../components/detail/DetailCarousel";
import TabComponent from "../components/detail/TabComponent";
import ButtonLink from "../components/home/ButtonLink";
import CardComponent from "../components/home/CardComponent";
import { livestockGetOne } from "../utils/api";

export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      livestock: []
    };

    this.id = this.props.match.params.id;
  }

  componentDidMount(props) {
    // Get one livestock based on ID
    livestockGetOne(this.id).then(res => {
      const livestock = res.data.data;
      this.setState({
        livestock: livestock
      });
    });
  }

  render() {
    return (
      <div className="page-container">
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
                contractPeriod={this.state.livestock.contractPeriod}
                expectedReturn={this.state.livestock.expectedReturn}
                sharingPeriod={this.state.livestock.sharingPeriod}
                description={this.state.livestock.description}
              />
            </Col>
          </Row>
          <ButtonLink title="lakukan investasi" />
          <CardComponent />
        </Container>
      </div>
    );
  }
}
