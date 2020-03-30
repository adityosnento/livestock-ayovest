import React, { Component } from "react";
import DetailComponent from "../components/detail/DetailComponent";
import { Container, Row, Col } from "reactstrap";
import DetailCarousel from "../components/detail/DetailCarousel";
import TabComponent from "../components/detail/TabComponent";
// import ButtonLink from "../components/home/ButtonLink";
import CardComponent from "../components/home/CardComponent";
import ImagesComponent from "../components/detail/ImagesComponent";
import { livestockGetOne } from "../utils/api";
import "./Detail.scss";

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
      <div>
        <div class="parallax-container">
          <div class="material-parallax">
            <img src={require("../asset/image/invest.webp")} alt="logo" />
          </div>
          <div class="breadcrumbs-custom-body parallax-content context-dark">
            <div class="container">
              <h2 class="breadcrumbs-custom-title">INVESTATION DETAIL</h2>
            </div>
          </div>
        </div>
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
                <ImagesComponent 
                image={this.state.livestock.image}/>
              </Col>
              <Col>
                <TabComponent
                  name={this.state.livestock.name}
                  priceUnit={this.state.livestock.priceUnit}
                  contractPeriod={this.state.livestock.contractPeriod}
                  expectedReturn={this.state.livestock.expectedReturn}
                  sharingPeriod={this.state.livestock.sharingPeriod}
                  description={this.state.livestock.description}
                  totalUnit={this.state.livestock.totalUnit}
                profitContractPeriod={this.state.livestock.profitContractPeriod}
                />
              </Col>
            </Row>
            <div className="title__container">
              <h5>AYOVEST</h5>
              <h1>The Most Popular Investment</h1>
              <p>
Here are the most sought-after investments by investors, hopefully it can help:
              </p>
            </div>
            <CardComponent />
          </Container>
        </div>
      </div>
    );
  }
}
