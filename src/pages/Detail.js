import React, { Component } from "react";
import DetailComponent from "../components/detail/DetailComponent";
import { Container, Row, Col } from "reactstrap";
import DetailCarousel from "../components/detail/DetailCarousel";
import TabComponent from "../components/detail/TabComponent";
import CardComponent from "../components/home/CardComponent";
// import ImagesComponent from "../components/detail/ImagesComponent";
import { livestockGetOne, liveStockGetAll } from "../utils/api";
import "./Detail.scss";
import { toast, ToastContainer } from "react-toastify";

export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;
    this.state = {
      livestock: [],
      livestocks: []
    };
  }

  componentDidMount = props => {
    livestockGetOne(this.id).then(res => {
      const livestock = res.data.data;
      this.setState({
        livestock: livestock
      });
    });

    liveStockGetAll()
      .then(res => {
        const data = res.data.data.docs;
        const livestocks = [data[0], data[1], data[2]];

        this.setState({
          livestocks
        });
      })
      .catch(err => {
        toast.error("Cannot retrieve recommendation list");
      });
  };
  render() {
    return (
      <div>
        <ToastContainer />
        <div className="parallax-container">
          <div className="material-parallax">
            <img src={require("../asset/image/invest.webp")} alt="logo" />
          </div>
          <div className="breadcrumbs-custom-body parallax-content context-dark">
            <div className="container">
              <h2 className="breadcrumbs-custom-title">INVESTATION DETAIL</h2>
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
                  totalUnit={this.state.livestock.totalUnit}
                  profitContractPeriod={
                    this.state.livestock.profitContractPeriod
                  }
                  livestockId={this.props.match.params.id}
                />
              </Col>
            </Row>
            <div className="title__container">
              <h5>AYOVEST</h5>
              <h1>The Most Popular Investment</h1>
              <p>
                Here are the most sought-after investments by investors,
                hopefully it can help:
              </p>
            </div>
            <CardComponent livestocks={this.state.livestocks} />
          </Container>
        </div>
      </div>
    );
  }
}
